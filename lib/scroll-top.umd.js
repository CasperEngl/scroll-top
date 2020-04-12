(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.scrollTop = {}));
}(this, (function (exports) { 'use strict';

  function scrollTop() {
    if (typeof window.pageYOffset !== 'undefined') {
      // Most browsers except IE8 or below
      return window.pageYOffset
    }

    // Match browser implementations
    return (document.documentElement || document.body.parentNode || document.body).scrollTop
  }

  if (typeof window !== 'undefined') {
    // @ts-ignore
    window.scrollTop = scrollTop;
  }

  exports.default = scrollTop;
  exports.scrollTop = scrollTop;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
