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
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Session": () => (/* reexport */ Session),
  "VerifyApi": () => (/* binding */ frontend_VerifyApi)
});

;// CONCATENATED MODULE: ./src/base.ts
/** @internal */
var HEADER_JSON = { 'Content-Type': 'application/json' };
/**
 * Session model
 */
var Session = /** @class */ (function () {
    function Session(id, status, score) {
        this.id = id;
        this.status = status;
        this.score = score;
    }
    return Session;
}());

/**
 * Verify API wrapper that helps make Verify API calls.
 */
var VerifyApi = /** @class */ (function () {
    function VerifyApi(baseUrl, enableLogging) {
        if (baseUrl === void 0) { baseUrl = 'https://api.fixture.ai'; }
        if (enableLogging === void 0) { enableLogging = false; }
        this._baseUrl = 'https://api.fixture.ai';
        this._log = false;
        this._baseUrl = baseUrl || this._baseUrl;
        this._log = !!enableLogging;
    }
    /**
     * Enables or disabled logging for API calls.
     * @param enabled
     * @returns {VerifyApi}
     */
    VerifyApi.prototype.enableLogging = function (enabled) {
        this._log = enabled;
        return this;
    };
    /**
     * Updates a session with personal info.
     */
    VerifyApi.prototype.updateSessionInfo = function (sessionId, info) {
        var _this = this;
        return fetch(this._baseUrl + "/session/" + sessionId, {
            method: 'PUT',
            body: JSON.stringify(info),
            headers: HEADER_JSON
        })
            .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            _this._log && console.debug("Updated session info " + sessionId, info);
        });
    };
    /**
     * Verifies a session with an otp (one time password).
     */
    VerifyApi.prototype.verifySessionOtp = function (sessionId, otp) {
        var _this = this;
        return fetch(this._baseUrl + "/session/" + sessionId + "/verify", {
            method: 'PATCH',
            body: JSON.stringify({ otp: otp }),
            headers: HEADER_JSON
        })
            .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            _this._log && console.debug("Verified session " + sessionId + " with otp " + otp);
        });
    };
    return VerifyApi;
}());


;// CONCATENATED MODULE: ./src/frontend.ts
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
 *
 */
var frontend_VerifyApi = /** @class */ (function (_super) {
    __extends(VerifyApi, _super);
    function VerifyApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VerifyApi;
}(VerifyApi));


/******/ 	return __webpack_exports__;
/******/ })()
;
});