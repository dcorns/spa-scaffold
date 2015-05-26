/**
 * helpers
 * Created by dcorns on 5/25/15.
 */
'use strict';
module.exports = function(){
  return {
    winReady: function (f) {
      var preOnload = window.onload;
      if (typeof preOnload !== 'function') {
        window.onload = f;
      }
      else {
        window.onload = function () {
          preOnload();
          f();
        }
      }
    }
  };
};