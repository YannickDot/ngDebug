(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.$A = factory();
    root.ngDebug = root.$A;
  }
})(this, function () {

  'use strict';

  if(!window.angular) {
  	console.warn('AngularJS is not loaded.');
  }

	Object.defineProperty(window, '$A0', {
    get: function () {
        return angular.element($0);
    }
	});

	Object.defineProperty(window, '$A1', {
	    get: function () {
	        return angular.element($1);
	    }
	});

	Object.defineProperty(window, '$A2', {
	    get: function () {
	        return angular.element($2);
	    }
	});

	Object.defineProperty(window, '$A3', {
	    get: function () {
	        return angular.element($3);
	    }
	});


  var ngDebug = {};

	var isString = function(t) { return (Object.prototype.toString.call(t) === '[object String]'); };

	ngDebug.getScope = function getScope(targetNode) {
		var elem = isString(targetNode) ? document.querySelector(targetNode) : targetNode;
		return angular.element(elem).scope();
	};

	ngDebug.getRootScope = function getRootScope() {
		var html = document.querySelector('html');
		return angular.element(html).scope();
	};

	ngDebug.getIsolateScope = function getIsolateScope(targetNode) {
		var elem = isString(targetNode) ? document.querySelector(targetNode) : targetNode;
		return angular.element(elem).isolateScope();
	};

	ngDebug.getController = function getController(targetNode) {
		var elem = isString(targetNode) ? document.querySelector(targetNode) : targetNode;
		return angular.element(elem).controller();
	};

	ngDebug.getService = function getService(serviceName) {
		var html = document.querySelector('html');
		return angular.element(html).injector().get(serviceName);
	};

	ngDebug.uiRouterDebug = uiRouterDebug;

	return ngDebug;


	////

	function uiRouterDebug () {
		// Credits: Adam's answer in http://stackoverflow.com/a/20786262/69362
		// Paste this in browser's console
		var $rootScope = angular.element(document.querySelectorAll("[ui-view]")[0]).injector().get('$rootScope');

		$rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
		console.log('$stateChangeStart to '+toState.to+'- fired when the transition begins. toState,toParams : \n',toState, toParams);
		});

		$rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams){
		console.log('$stateChangeError - fired when an error occurs during transition.');
		console.log(arguments);
		});

		$rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
		console.log('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');
		});

		$rootScope.$on('$viewContentLoaded',function(event){
		console.log('$viewContentLoaded - fired after dom rendered',event);
		});

		$rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
		console.log('$stateNotFound '+unfoundState.to+' - fired when a state cannot be found by its name.');
		console.log(unfoundState, fromState, fromParams);
		});

		console.log('uiRouterDebug events loaded.');
	}



});
