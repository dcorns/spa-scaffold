/**
 * home.js
 * Created by dcorns on 5/26/15.
 */
'use strict';
var views = require('../build/views');
var controllers = require('./controllerRegistry')();
var route = require('../router')(views, controllers);
module.exports = function(){
  alert('home controller');
  document.getElementById('mybtn').addEventListener('click', function(e){
    route('newList', 'mylist');
  });
};