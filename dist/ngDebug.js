/*! ngDebug v1.0.0 | (c) 2014 @YannickDot | https://github.com/YannickDot/ngDebug */
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

  	Object.defineProperty(window, '$A0', {
	    get: function () {
	        return angular.element(__commandLineAPI.$0);
	    },
	});

	Object.defineProperty(window, '$A1', {
	    get: function () {
	        return angular.element(__commandLineAPI.$0);
	    },
	});

	Object.defineProperty(window, '$A2', {
	    get: function () {
	        return angular.element(__commandLineAPI.$2);
	    },
	});

	Object.defineProperty(window, '$A3', {
	    get: function () {
	        return angular.element(__commandLineAPI.$3);
	    },
	});

  	var ngDebug = {};

	var isString = function(t) { return (Object.prototype.toString.call(t) === '[object String]'); };

	ngDebug.scope = function scope(targetNode) {
		var elem = isString(targetNode) ? document.querySelector(targetNode) : targetNode;
		return angular.element(elem).scope();
	};

	ngDebug.isolateScope = function isolateScope(targetNode) {
		var elem = isString(targetNode) ? document.querySelector(targetNode) : targetNode;
		return angular.element(elem).isolateScope();
	};

	ngDebug.controller = function controller(targetNode) {
		var elem = isString(targetNode) ? document.querySelector(targetNode) : targetNode;
		return angular.element(elem).controller();
	};

	ngDebug.service = function service(serviceName) {
		var html = document.querySelector('html');
		return angular.element(html).injector().get(serviceName);
	};

	return ngDebug;

});


/*

$A.scope(selector)  // using CSS selector

$A.scope(HTMLElement) // using HTMLElement

//Inspect scope/isolateScope based on commandLineAPI in chrome
$A0.scope() //for $0
$A1.scope() //for $1
$A2.scope() //for $2
$A3.scope() //for $3

*/