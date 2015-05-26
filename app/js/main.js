/**
 * main.js
 * Created by dcorns on 5/20/15.
 */
'use strict';
var views = require('./build/views');
var controllers = require('./controllers/controllerRegistry')();
var route = require('./router')(views, controllers);
var helper = require('./helpers')();

function doOnLoad(){
  var lastHref = window.sessionStorage.getItem('href');
  var netAction = window.sessionStorage.getItem('netAction');
  if (lastHref) {
    route(lastHref);
  }
  else {//load home template
    lastHref = '#/home';
    window.sessionStorage.setItem('href', lastHref);
    window.history.pushState(null, null, lastHref);
    route(lastHref);
  }
//Add event handlers for 'a' tags
  var links = document.getElementsByTagName('a');
  var idx = 0, ln = links.length;
  for (idx; idx < ln; idx++) {
    links[idx].addEventListener('click', function (e) {
      window.sessionStorage.setItem('href', this.href);
      window.history.pushState(null, null, this.href);
      e.preventDefault();
      route(this.href);
    });
  }
//Add front and back button handler
  window.addEventListener('popstate', function () {
    window.sessionStorage.setItem('href', location.href);
    route(location.href);
  });
}

helper.winReady(doOnLoad());