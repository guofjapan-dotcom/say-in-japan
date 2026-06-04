// core/converter.js — simplified-to-traditional via OpenCC
window.JPSP = window.JPSP || {};

JPSP.converter = (function() {
  var LANG_KEY = 'jpsp_v3_lang';
  var currentLang = null;
  var converter = null;

  function getLang() {
    if (currentLang) return currentLang;
    currentLang = (function() {
      try { return JSON.parse(localStorage.getItem(LANG_KEY)) || 'cn'; }
      catch { return 'cn'; }
    })();
    return currentLang;
  }

  function setLang(l) {
    currentLang = l;
    localStorage.setItem(LANG_KEY, JSON.stringify(l));
  }

  function ready() { return !!window.OpenCC && !!window.OpenCC.Converter; }

  function initConv() {
    if (converter) return;
    if (ready()) converter = OpenCC.Converter({from:'cn',to:'tw'});
  }

  function t(text) {
    if (!text || getLang() !== 'tw') return text;
    if (!converter) initConv();
    return converter ? converter(text) : text;
  }

  function convertData(phrases, scenes, emergency, intents) {
    // deep-clone is too heavy — convert in-place on first render pass
    // we instead use the t() wrapper everywhere
  }

  return { getLang: getLang, setLang: setLang, t: t, ready: ready, initConv: initConv };
})();
