## Story Book for Shared Components.


![Webpack 2.0] <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200"><title>icon-square-big</title><path fill="#FFF" d="M600 0l530.3 300v600L600 1200 69.7 900V300z"/><path fill="#8ED6FB" class="st1" d="M1035.6 879.3l-418.1 236.5V931.6L878 788.3l157.6 91zm28.6-25.9V358.8l-153 88.3V765l153 88.4zm-901.5 25.9l418.1 236.5V931.6L320.3 788.3l-157.6 91zm-28.6-25.9V358.8l153 88.3V765l-153 88.4zM152 326.8L580.8 84.2v178.1L306.1 413.4l-2.1 1.2-152-87.8zm894.3 0L617.5 84.2v178.1l274.7 151.1 2.1 1.2 152-87.8z"/><path fill="#1C78C0" d="M580.8 889.7l-257-141.3v-280l257 148.4v272.9zm36.7 0l257-141.3v-280l-257 148.4v272.9zm-18.3-283.6zM341.2 436l258-141.9 258 141.9-258 149-258-149z"/></svg>
(https://github.com/rajendrav5/webpack2.0). 

This app setup allows to generate different chunks for commons, page levels, library level bundles and separate bundle for css and optimizes the bundle with tree-shaking, minification and other optimisations.

### Usage

```
npm start ENV=DEV / npm start for dev bundle (comes with elaborate source map and other dev level artifacts to enable debugging)
npm start ENV=PROD for production bundle
```

Then open `http://localhost:6556` on your browser.


For more documentation for Webpack2.0 visit.

```
https://webpack.js.org/
```
