Verify API JavaScript Client
=====

This is a JavaScript client to help you use the Verify API.

## Compatibility

The client is a universal module (UMD) for both browser apps and Node.js.

This client will work with several module systems:
 - ECMAScript / ES6 module (most modern apps)
 - CommonJS
 - AMD / RequireJS
 - Browser <script> tag imports

The client is compiled for ES5, so it will work with both old and new browsers.

## Installation

You can install the client from this repo using npm or yarn.

```
npm install --save git://github.com/fixture-ai/verify-client-js.git
```
or
```
yarn add git://github.com/fixture-ai/verify-client-js.git
```

## Frontend and backend clients

There are two variants of the `VerifyApi` client:

- [verify-api/frontend](https://fixture-ai.github.io/verify-client-js/modules/frontend.html) -
  This client is primarily for frontend/browser apps and allows you to make all
  the API calls that can be made without an API key. Specifically, you cannot make
  calls to create or retrieve a session with this client because that must be done
  from a backend app where your API key can be kept secret. You can also use this client
  for backend/Node.js apps if you only need to make calls that don't require an API key.
  
- [verify-api/backend](https://fixture-ai.github.io/verify-client-js/modules/backend.html) -
  This client is suitable for backend/Node.js apps where your API key can be kept
  secret. It allows you to make all Verify API calls, including everything available
  in the frontend client.

## Basic usage

This client is a universal module (UMD) for both browsers and Node.js, so how you
import it will depend on your module system (or lack thereof). If you're
unsure, import this package as an ECMAScript module (first option shown below).

The examples below show the `verify-client/frontend`, but importing
`verify-client/backend` works the same way.
See [Frontend and backend clients](#Frontend-and-backend-clients).

```javascript
// ECMASCript module (use this for most modern apps)
import { VerifyApi } from 'verify-client/frontend';
const client = new VerifyApi();
```

```javascript
// CommonJS
const { VerifyApi } = require('verify-client/frontend');
const client = new VerifyApi();
```

```javascript
// AMD, RequireJS
require(['verify-client/frontend'], function(VerifyApi){
  const client = new VerifyApi();
});
```

```html
<!-- HTML script tag import -->
<script src="node_modules/verify-client/frontend-browser.min.js"></script>
<script>
  const client = new verifyclient.VerifyApi();
</script>
```

## Client documentation

See the [API client docs](https://fixture-ai.github.io/verify-client-js/index.html)
for a list of all available classes and methods.

## Building from source

The client source code is in the `src/` directory, and it is written in TypeScript.
If you want, you can build the JavaScript clients yourself with npm:

```
npm install
npm run build
```
