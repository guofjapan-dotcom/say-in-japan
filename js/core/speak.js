// core/speak.js — Web Speech API TTS
window.JPSP = window.JPSP || {};

JPSP.speak = (function() {
  let playingId = null;
  let onStateChange = null;

  function speak(phraseId, jpText) {
    window.speechSynthesis.cancel();
    playingId = phraseId;
    if (onStateChange) onStateChange(phraseId, true);
    var u = new SpeechSynthesisUtterance(jpText);
    u.lang = 'ja-JP';
    u.rate = 0.9;
    u.onend = function() { stop(); };
    u.onerror = function() { stop(); };
    window.speechSynthesis.speak(u);
  }

  function stop() {
    window.speechSynthesis.cancel();
    var prev = playingId;
    playingId = null;
    if (onStateChange && prev) onStateChange(prev, false);
  }

  function isPlaying(id) { return playingId === id; }

  function getPlaying() { return playingId; }

  function setStateChange(fn) { onStateChange = fn; }

  return { speak: speak, stop: stop, isPlaying: isPlaying, getPlaying: getPlaying, setStateChange: setStateChange };
})();
