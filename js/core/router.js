// core/router.js — hash-based SPA router
window.JPSP = window.JPSP || {};

JPSP.router = (function() {
  var currentView = 'home';
  var currentScene = null;
  var currentSubscene = null;
  var listeners = {};

  function on(evt, fn) {
    if (!listeners[evt]) listeners[evt] = [];
    listeners[evt].push(fn);
  }

  function emit(evt, data) {
    (listeners[evt] || []).forEach(function(fn) { fn(data); });
  }

  function navigate(view, scene, subscene) {
    currentView = view;
    currentScene = scene || null;
    currentSubscene = subscene || null;
    var hash = view;
    if (scene) hash += '/' + scene;
    if (subscene) hash += '/' + subscene;
    window.location.hash = hash;
    emit('change', { view: view, scene: scene, subscene: subscene });
  }

  function parseHash() {
    var raw = window.location.hash.slice(1) || 'home';
    var parts = raw.split('/');
    currentView = parts[0] || 'home';
    currentScene = parts[1] || null;
    currentSubscene = parts[2] || null;
    return { view: currentView, scene: currentScene, subscene: currentSubscene };
  }

  function init() {
    parseHash();
    window.addEventListener('hashchange', function() {
      parseHash();
      JPSP.speak.stop();
      emit('change', { view: currentView, scene: currentScene, subscene: currentSubscene });
    });
    emit('change', { view: currentView, scene: currentScene, subscene: currentSubscene });
  }

  return { navigate: navigate, on: on, getView: function() { return currentView; }, getScene: function() { return currentScene; }, getSubscene: function() { return currentSubscene; }, init: init, parseHash: parseHash };
})();
