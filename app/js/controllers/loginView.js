/**
 * loginView.js
 * Created by dcorns on 5/25/15.
 */
'use strict';
module.exports = function(views){
  var content = document.getElementById('main-content');
  content.innerHTML = views.loginView;
};