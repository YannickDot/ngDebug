# ngDebug

ngDebug is a small library providing command line utilities to debug AngularJS-based apps in Chrome Devtools.

## Install

Install with [Bower](http://bower.io):

```sh
$ bower install --save ngDebug
```

## Usage

1. Import ngDebug library:

    ```html
    <script src="bower_components/ngDebug/dist/ngDebug.js"></script>
    ```

2. Start using it!

	Debug a controller/scope using css selectors :
    ```js
    $A.controller(selector);
    $A.scope(selector);
    ```

    Debug a controller/scope using HTMLElements references :
    ```js
    $A.controller(HTMLElement);
    $A.scope(HTMLElement);
    ```

	Debug rootScope :
    ```js
    $A.rootScope();
    ```

    Debug scope using chrome commandLineAPI :
    ```js
    $A0.scope();
    $A1.scope();
    $A2.scope();
    $A3.scope();
    ```

    Debug a service by service name :
    ```js
    $A.service(serviceName);
    ```
    
    Start ui-router debugging by listening to its lifecycle events :
    ```js
    $A.uiRouterDebug();
    ```

## License
ngDebug is released under the [MIT License](http://opensource.org/licenses/MIT).

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.

## Release history
- 1.0.0
  - Initial release
- 1.1.0
	- added ui-router debug 

## Thanks

######Inspired by : 
- [angular-console](https://github.com/jarrodldavis/angular-console) by jarrodldavis.
- the [Ionic Framework Blog](http://ionicframework.com/blog/angularjs-console/) by [@maxlynch](https://twitter.com/maxlynch)
- Adam's answer on [stackoverflow](http://stackoverflow.com/a/20786262/69362)