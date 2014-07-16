(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.$A = factory();
  }
})(this, function () {

  'use strict';

  var ngDebug = {};

	var getType = function(t) { return Object.prototype.toString.call(t); };

	ngDebug.scope = function scope(targetNode) {
		var elem = (getType(targetNode) === '[object String]') ? document.querySelector(targetNode) : targetNode;
		return angular.element(element).scope();
	};

	ngDebug.isolateScope = function isolateScope(targetNode) {
		var elem = (getType(targetNode) === '[object String]') ? document.querySelector(targetNode) : targetNode;
		return angular.element(element).isolateScope();
	};

	ngDebug.service = function service(serviceName) {
		return angular.element('html').injector().get(serviceName);
	};

	return ngDebug;

});


/*
TODO : bind $0 variable to $A0 for even more easier debug using inspector
*/