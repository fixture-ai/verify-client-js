(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["verifyclient"] = factory();
	else
		root["verifyclient"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 204:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = self.fetch || (self.fetch = __webpack_require__(869).default || __webpack_require__(869));


/***/ }),

/***/ 869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})}
//# sourceMappingURL=unfetch.module.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Session": () => (/* reexport */ Session),
  "VerifyApi": () => (/* binding */ frontend_VerifyApi)
});

// EXTERNAL MODULE: ./node_modules/isomorphic-unfetch/browser.js
var browser = __webpack_require__(204);
;// CONCATENATED MODULE: ./src/base.ts

/** @internal */
var HEADER_JSON = { 'Content-Type': 'application/json' };
/**
 * Session model
 */
var Session = /** @class */ (function () {
    /**
     * Creates a new session instance.
     *
     * @param id The unique id of the session
     * @param status The current status of the session
     * @param score The score of the session (if status is "completed")
     */
    function Session(id, status, score) {
        this.id = id;
        this.status = status;
        this.score = score;
    }
    return Session;
}());

/**
 * Session status
 */
var Status;
(function (Status) {
    Status["pending"] = "pending";
    Status["processing"] = "processing";
    Status["completed"] = "completed";
    Status["failed"] = "failed";
})(Status || (Status = {}));
/**
 * Base Verify API client that helps make Verify API calls.
 */
var VerifyApi = /** @class */ (function () {
    /**
     * Creates a new instance of the client.
     *
     * @param baseUrl Optional API url (if you're using our mock API tool,
     *        for example)
     * @param enableLogging Whether to enable logging or not
     */
    function VerifyApi(baseUrl, enableLogging) {
        if (baseUrl === void 0) { baseUrl = 'https://api.fixture.ai'; }
        if (enableLogging === void 0) { enableLogging = false; }
        this._baseUrl = 'https://api.fixture.ai';
        this._log = false;
        this._baseUrl = baseUrl || this._baseUrl;
        this._log = !!enableLogging;
    }
    /**
     * Enables or disables logging for API calls.
     *
     * @param enabled Whether to enable or disable logging
     * @returns {VerifyApi}
     */
    VerifyApi.prototype.enableLogging = function (enabled) {
        this._log = enabled;
        return this;
    };
    /**
     * Updates a session with a user's personal info.
     *
     * @param sessionId The unique id of the session
     * @param info The user's personal info for the session
     * @returns {Promise<void>}
     */
    VerifyApi.prototype.updateSessionInfo = function (sessionId, info) {
        var _this = this;
        return fetch(this._baseUrl + "/session/" + sessionId, {
            method: 'PUT',
            body: JSON.stringify(info),
            headers: HEADER_JSON
        }).then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            _this._log && console.debug("Updated session info " + sessionId, info);
        });
    };
    /**
     * Verifies a session with an otp (one-time password).
     *
     * @param sessionId The unique id of the session
     * @param otp The one-time-password that was emailed to the user
     * @returns {Promise<OtpResult>}
     */
    VerifyApi.prototype.verifySessionOtp = function (sessionId, otp) {
        var _this = this;
        return fetch(this._baseUrl + "/session/" + sessionId + "/verify", {
            method: 'PATCH',
            body: JSON.stringify({ otp: otp }),
            headers: HEADER_JSON
        }).then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            _this._log && console.debug("Verified session " + sessionId + " with otp " + otp);
            return response.json();
        });
    };
    return VerifyApi;
}());


;// CONCATENATED MODULE: ./src/frontend.ts
/**
 * The frontend client is primarily for frontend/browser apps and allows you to
 * make all the API calls that can be made without an API key. Specifically, you
 * cannot make calls to create or retrieve a session with this client because
 * that must be done from a backend app where your API key can be kept secret
 * (see {@link backend.VerifyApi | backend client}).
 *
 * You can use this client for backend/Node.js apps if you only need to make
 * calls that don't require an API key.
 *
 * @module
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * Frontend Verify API client for using the Verify API.
 *
 * This client is primarily for frontend/browser apps and allows you to make all
 * the API calls that can be made without an API key. Specifically, you cannot
 * make calls to create or retrieve a session with this client because that must
 * be done from a backend app where your API key can be kept secret
 * (see {@link backend.VerifyApi | backend client}).
 *
 * You can use this client for backend/Node.js apps if you only need to make
 * calls that don't require an API key.
 */
var frontend_VerifyApi = /** @class */ (function (_super) {
    __extends(VerifyApi, _super);
    function VerifyApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VerifyApi;
}(VerifyApi));


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});