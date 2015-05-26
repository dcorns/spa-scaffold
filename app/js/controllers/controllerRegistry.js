/**
 * controllerRegistry
 * Created by dcorns on 5/26/15.
 */
'use strict';
module.exports = function (){
  return{
    home: require('./home'),
    loginView: require('./loginView')
  };
};