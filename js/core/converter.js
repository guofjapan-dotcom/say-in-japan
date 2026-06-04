// core/converter.js — simplified-to-traditional via OpenCC
window.JPSP = window.JPSP || {};

JPSP.converter = (function() {
  var LANG_KEY = 'jpsp_v3_lang';
  var currentLang = null;
  var converter = null;
  var loading = false;

  function getLang() {
    if (currentLang) return currentLang;
    try {
      var v = JSON.parse(localStorage.getItem(LANG_KEY));
      currentLang = (v === 'tw' || v === 'cn') ? v : 'cn';
    } catch(e) { currentLang = 'cn'; }
    return currentLang;
  }

  function setLang(l) {
    currentLang = l;
    localStorage.setItem(LANG_KEY, JSON.stringify(l));
  }

  function ready() {
    return !!(window.OpenCC && window.OpenCC.Converter);
  }

  function initConv() {
    if (converter) return;
    if (ready()) {
      converter = OpenCC.Converter({from: 'cn', to: 'tw'});
    }
  }

  function t(text) {
    if (!text) return text;
    if (getLang() !== 'tw') return text;
    if (!converter) initConv();
    if (!converter) return text;
    try { return converter(text); } catch(e) { return text; }
  }

  return { getLang: getLang, setLang: setLang, t: t, ready: ready, initConv: initConv };
})();
