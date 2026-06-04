// core/storage.js — localStorage wrapper
window.JPSP = window.JPSP || {};

JPSP.storage = (function() {
  const PFX = 'jpsp_v3_';
  return {
    get(k) { try { return JSON.parse(localStorage.getItem(PFX + k)); } catch { return null; } },
    set(k, v) { localStorage.setItem(PFX + k, JSON.stringify(v)); },
    toggleSet(k, item) {
      const s = this.get(k) || [];
      const i = s.indexOf(item);
      i > -1 ? s.splice(i, 1) : s.push(item);
      this.set(k, s);
      return s.includes(item);
    },
    isInSet(k, item) { return (this.get(k) || []).includes(item); },
    pushRecent(k, item, max) {
      max = max || 20;
      const s = this.get(k) || [];
      const f = s.filter(function(x) { return x !== item; });
      f.unshift(item);
      this.set(k, f.slice(0, max));
    }
  };
})();
