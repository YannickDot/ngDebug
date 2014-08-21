# ngDebug

ngDebug is a small library providing command line utilities to debug AngularJS-based apps in Chrome Devtools.


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
    $A.isolateScope(selector);
    ```

    Debug a controller/scope using HTMLElements references :
    ```js
    $A.controller(HTMLElement);
    $A.scope(HTMLElement);
    $A.isolateScope(HTMLElement);
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

## License
ngDebug is released under the [MIT License](http://opensource.org/licenses/MIT).

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.

## Release history
- 1.0.0
  - Initial release

## Thanks

Inspired by [angular-console](https://github.com/jarrodldavis/angular-console) by jarrodldavis and the [Ionic Framework Blog](http://ionicframework.com/blog/angularjs-console/) by [@maxlynch](https://twitter.com/maxlynch)
