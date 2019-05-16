/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./webBrowser.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/process/browser.js":
/*!**********************************************************************************************!*\
  !*** /Users/olgamalkova/src/LearnMMORPG/Content/Scripts/app/node_modules/process/browser.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../epicsFlow.js":
/*!***********************!*\
  !*** ../epicsFlow.js ***!
  \***********************/
/*! exports provided: unnest, makeSimpleEvent, makeEvent, makeSimpleCommand, makeCommand, createEpic, createEpicWithScope, matchAnyMsgCondition, createStore, dispatchMsgEffectCreator, daEC, dispatchBatchedMsgsEffectCreator, sendMsgOutsideEpicsEffectCreator, createCondition, createEpicCondition, createUpdater, createSimpleUpdater, createEffectManager, deepCopy, deepEqual, traceToString, storeCreatedEvent, createPluginStateKey, getObjectKeys, createConditionMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unnest", function() { return unnest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSimpleEvent", function() { return makeSimpleEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeEvent", function() { return makeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSimpleCommand", function() { return makeSimpleCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCommand", function() { return makeCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEpic", function() { return createEpic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEpicWithScope", function() { return createEpicWithScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchAnyMsgCondition", function() { return matchAnyMsgCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchMsgEffectCreator", function() { return dispatchMsgEffectCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daEC", function() { return daEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchBatchedMsgsEffectCreator", function() { return dispatchBatchedMsgsEffectCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMsgOutsideEpicsEffectCreator", function() { return sendMsgOutsideEpicsEffectCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCondition", function() { return createCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEpicCondition", function() { return createEpicCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUpdater", function() { return createUpdater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSimpleUpdater", function() { return createSimpleUpdater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEffectManager", function() { return createEffectManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepCopy", function() { return deepCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepEqual", function() { return deepEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traceToString", function() { return traceToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeCreatedEvent", function() { return storeCreatedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPluginStateKey", function() { return createPluginStateKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectKeys", function() { return getObjectKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConditionMatcher", function() { return createConditionMatcher; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var toTrueV = function toTrueV() {
  return true;
};

var extractConditionV = function extractConditionV(c) {
  return c.value;
};

var __DEV__ = process.env !== 'production';

function buildValueSelector(condition) {
  var selectorPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var selector = arguments.length > 2 ? arguments[2] : undefined;

  if (!condition.parentCondition) {
    if (selectorPath.length === 0 && !selector) return function (x) {
      return x;
    };
    return function (x) {
      var value = selectorPath.reduce(function (x, key) {
        return x[key];
      }, x);
      if (selector) return selector(value);
      return value;
    };
  }

  return buildValueSelector(condition.parentCondition, condition.selectorKey ? [condition.selectorKey].concat(_toConsumableArray(selectorPath)) : selectorPath, condition.selector ? condition.selector : selector);
}

var createConditionMatcher = function createConditionMatcher(condition) {
  var valueSelector = buildValueSelector(condition);
  return function (msg) {
    if (condition.msgType === msg.type) {
      return valueSelector(msg);
    }
  };
};

function getFields(condition) {
  var msgType = condition.msgType,
      passive = condition.passive,
      optional = condition.optional,
      resetConditionsByKeyKeys = condition.resetConditionsByKeyKeys,
      resetConditionsByKeyAfterReducerCallKeys = condition.resetConditionsByKeyAfterReducerCallKeys,
      sealed = condition.sealed,
      isEpicCondition = condition.isEpicCondition;
  return {
    msgType: msgType,
    passive: passive,
    optional: optional,
    resetConditionsByKeyKeys: resetConditionsByKeyKeys,
    resetConditionsByKeyAfterReducerCallKeys: resetConditionsByKeyAfterReducerCallKeys,
    parentCondition: condition,
    sealed: sealed,
    isEpicCondition: isEpicCondition
  };
}

var dispatchMsgEffectType = 'dispatch_msg';
var dispatchBatchedMsgsEffectType = 'dispatch_batch_msgs_into_epics'; // dispatch multiple msgs into epic, but notify everybody only once

var sendMsgOutsideEpicsEffectType = 'send_msg_outside_of_epics';

var dispatchMsgEffectCreator = function dispatchMsgEffectCreator(msg) {
  return {
    type: dispatchMsgEffectType,
    msg: msg
  };
};

var dispatchBatchedMsgsEffectCreator = function dispatchBatchedMsgsEffectCreator(batches) {
  return {
    type: dispatchBatchedMsgsEffectType,
    batches: batches
  };
};

var daEC = dispatchMsgEffectCreator;

var sendMsgOutsideEpicsEffectCreator = function sendMsgOutsideEpicsEffectCreator(msg) {
  return {
    type: sendMsgOutsideEpicsEffectType,
    msg: msg
  };
};

var ReducerResult =
/*#__PURE__*/
function () {
  function ReducerResult(state, scope) {
    _classCallCheck(this, ReducerResult);

    this._state = state;
    this._updateReasons = [];
    this._scope = scope;
    this._sideEffects = [];
    this._customEpicChangedEventFields = {};
    this.doNothing = this;
  }

  _createClass(ReducerResult, [{
    key: "sideEffect",
    // TODO make not chainable, throw on mixed and variance
    value: function sideEffect(effect) {
      this._sideEffects.push(effect);

      return this;
    } // update reason will be taken only if updater returned updated state

  }, {
    key: "mapState",
    value: function mapState(updater, updateReason, customEpicChangedEventFields) {
      var nextState = updater(this._state);

      if (nextState !== this._state) {
        if (updateReason) {
          this._updateReasons.push(updateReason);
        }

        if (customEpicChangedEventFields) {
          this._customEpicChangedEventFields = _objectSpread({}, this._customEpicChangedEventFields, customEpicChangedEventFields);
        }
      }

      this._state = nextState;
      return this;
    }
  }, {
    key: "mapScope",
    value: function mapScope(updater) {
      var nextScope = updater(this._scope);
      this._scope = nextScope;
      return this;
    }
  }]);

  return ReducerResult;
}();

function createUpdater(_ref) {
  var given = _ref.given,
      when = _ref.when,
      then = _ref.then;
  var noActiveConditions = true;
  var conditionKeysToConditionUpdaterKeys = [];
  var compulsoryConditionsKeys = [];
  var conditions = given ? _objectSpread({}, Object.keys(given).reduce(function (r, k) {
    return _objectSpread({}, r, _defineProperty({}, k, given[k].toPassive()));
  }, {}), when) : when;
  Object.keys(when).forEach(function (reactsToKey) {
    if (when[reactsToKey].passive) {
      throw new Error("can not use passive condition \"".concat(reactsToKey, "\" in reacts to."));
    }
  });
  Object.keys(conditions).forEach(function (conditionKey) {
    var condition = conditions[conditionKey];
    conditionKeysToConditionUpdaterKeys.push([condition.valueKey, conditionKey]);

    if (!condition.optional) {
      compulsoryConditionsKeys.push(conditionKey);
    }

    if (!condition.passive) {
      noActiveConditions = false;
    }
  });

  if (noActiveConditions) {
    throw new Error('createUpdater requires at least one condition to be active');
  }

  if (given) {
    Object.keys(given).forEach(function (k) {
      if (when[k]) throw new Error("given can not contain same key as reacts to: ".concat(k));
    });
  }

  return {
    conditions: conditions,
    then: then,
    conditionKeysToConditionUpdaterKeys: conditionKeysToConditionUpdaterKeys,
    conditionsKeys: Object.keys(conditions),
    compulsoryConditionsKeys: compulsoryConditionsKeys
  };
}

function createSimpleUpdater(condition, _then) {
  return createUpdater({
    given: {},
    when: {
      value: condition
    },
    then: function then(_ref2) {
      var values = _ref2.values,
          state = _ref2.state,
          scope = _ref2.scope,
          R = _ref2.R,
          sourceMsg = _ref2.sourceMsg;
      return _then({
        value: values.value,
        state: state,
        scope: scope,
        R: R,
        sourceMsg: sourceMsg
      });
    }
  });
}

var EffectManagerResultType =
/*#__PURE__*/
function () {
  function EffectManagerResultType(state) {
    _classCallCheck(this, EffectManagerResultType);

    this._state = state;
    this._msgsToDispatch = [];
    this.doNothing = this;
  }

  _createClass(EffectManagerResultType, [{
    key: "mapState",
    value: function mapState(updater) {
      this._state = updater(this._state);
      return this;
    }
  }, {
    key: "dispatchMsg",
    value: function dispatchMsg(msg, broadcast) {
      this._msgsToDispatch.push({
        msg: msg,
        broadcast: broadcast
      });

      return this;
    }
  }, {
    key: "withEffectPromise",
    value: function withEffectPromise(promise) {
      this._promise = promise;
      return this;
    }
  }]);

  return EffectManagerResultType;
}();

function createEffectManager(_ref3) {
  var initialState = _ref3.initialState,
      initialScope = _ref3.initialScope,
      onEffectRequest = _ref3.onEffectRequest,
      requestType = _ref3.requestType,
      destroyEffects = _ref3.destroyEffects,
      recreateEffects = _ref3.recreateEffects;
  return {
    requestType: requestType,
    initialState: initialState,
    initialScope: initialScope,
    onEffectRequest: onEffectRequest,
    destroyEffects: destroyEffects,
    recreateEffects: recreateEffects,
    _effect: null
  };
}

function getInitialState(_ref4) {
  var initialState = _ref4.initialState;
  return initialState;
}

var isArray = Array.isArray;
var getObjectKeys = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

var isObject = function isObject(o) {
  return o != null && _typeof(o) === 'object';
};

var isEmpty = function isEmpty(o) {
  return getObjectKeys(o).length === 0;
};

var unnest = function unnest(arr) {
  return arr.reduce(function (acc, el) {
    return acc.concat(el);
  }, []);
};

function deepFreeze(o) {
  Object.freeze(o);
  if (o === undefined || o === null) return o;
  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (o.hasOwnProperty(prop) && o[prop] !== null && (_typeof(o[prop]) === 'object' || typeof o[prop] === 'function') && !Object.isFrozen(o[prop])) {
      deepFreeze(o[prop]);
    }
  });
  return o;
}

function findObjDiff(lhs, rhs) {
  if (lhs === rhs) return {};
  if (!isObject(lhs) || !isObject(rhs)) return [lhs, '->', rhs];
  return Object.keys(rhs).reduce(function (acc, key) {
    if (lhs.hasOwnProperty(key)) {
      var difference = findObjDiff(lhs[key], rhs[key]);
      if (isObject(difference) && isEmpty(difference)) return acc;
      return _objectSpread({}, acc, _defineProperty({}, key, difference));
    }

    return acc;
  }, {});
} // only serializible data (no Date/RegEx)


function deepEqual(a, b) {
  if (a === b) return true;

  if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
    var i;
    var length;

    var _key;

    var arrA = isArray(a);
    var arrB = isArray(b);

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false; // eslint-disable-line

      for (i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false; // eslint-disable-line

    var keys = getObjectKeys(a);
    length = keys.length;
    if (length !== getObjectKeys(b).length) return false;

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    }

    for (i = length; i-- !== 0;) {
      _key = keys[i];
      if (!deepEqual(a[_key], b[_key])) return false;
    }

    return true;
  }

  return a !== a && b !== b; // eslint-disable-line
}

function deepCopy(src, _visited, _copiesVisited) {
  if (src === null || _typeof(src) !== 'object') {
    return src;
  }

  if (src instanceof Date) return new Date(src.getTime());
  if (src instanceof RegExp) return new RegExp(src);

  if (_visited === undefined) {
    // eslint-disable-next-line no-param-reassign
    _visited = []; // eslint-disable-next-line no-param-reassign

    _copiesVisited = [];
  }

  var i;
  var len = _visited.length;

  for (i = 0; i < len; i++) {
    if (src === _visited[i]) {
      return _copiesVisited[i];
    }
  }

  if (Object.prototype.toString.call(src) == '[object Array]') {
    var ret = src.slice();

    _visited.push(src); // $FlowFixMe


    _copiesVisited.push(ret);

    var _i = ret.length;

    while (_i--) {
      ret[_i] = deepCopy(ret[_i], _visited, _copiesVisited);
    }

    return ret;
  }

  var proto = Object.getPrototypeOf ? Object.getPrototypeOf(src) : src.__proto__;
  var dest = Object.create(proto);

  _visited.push(src); // $FlowFixMe


  _copiesVisited.push(dest);

  for (var _key2 in src) {
    dest[_key2] = deepCopy(src[_key2], _visited, _copiesVisited);
  }

  return dest;
}

var values = function values(o) {
  return Object.keys(o).map(function (k) {
    return o[k];
  });
};

var last = function last(arr) {
  return arr.slice(-1)[0];
};

var MatchAnyMsgType = '*';

function validateUniqVcet(epics) {
  var allEpicsKeys = Object.keys(epics);
  var allVcet = allEpicsKeys.map(function (k) {
    return epics[k].vcet;
  });
  var vcetsCountMap = allVcet.reduce(function (r, v) {
    if (r[v]) {
      r[v]++;
    } else {
      r[v] = 1;
    }

    return r;
  }, {});
  var duplicatedVcet = Object.keys(vcetsCountMap).filter(function (v) {
    return vcetsCountMap[v] > 1;
  });

  if (duplicatedVcet.length) {
    throw new Error("duplicate vcets:\n".concat(duplicatedVcet.map(function (v) {
      return "Epics ".concat(allEpicsKeys.filter(function (k) {
        return epics[k].vcet === v;
      }).join(', '), " has same vcet ").concat(v);
    }).join('\n')));
  }
}

function getEffectManagersInitialState(effectManagers) {
  if (!effectManagers) {
    return {};
  }

  return Object.keys(effectManagers).reduce(function (state, key) {
    var config = effectManagers[key];
    state[config.requestType] = {
      state: config.initialState,
      scope: deepCopy(config.initialScope),
      pendingEffects: []
    };
    return state;
  }, {});
}

var printUpdater = function printUpdater(u) {
  return "".concat(u.updaterKey, "(").concat([u.updaterEpicStateChange !== undefined ? u.updaterEpicStateChange === nothingChangedButObjectRecreatedWarn ? 'SW' : 'S' : '', u.updaterEpicScopeChange !== undefined ? u.updaterEpicScopeChange === nothingChangedButObjectRecreatedWarn ? 'SCW' : 'SC' : '', u.updaterReqestedEffects !== undefined ? 'E' : '', u.error ? 'ERR' : ''].filter(function (x) {
    return x;
  }).join(','), ")");
};

var printEpicExecutionInfo = function printEpicExecutionInfo(epicExecutionInfo) {
  var updaters = epicExecutionInfo.updaters,
      epicKey = epicExecutionInfo.epicKey;
  if (!updaters) return '';
  var result = updaters.filter(function (u) {
    return u.updaterEpicStateChange !== undefined || u.updaterEpicScopeChange !== undefined || u.updaterReqestedEffects !== undefined || u.error;
  }).map(printUpdater).join('');
  if (!result.length) return '';
  return "".concat(epicKey, "[").concat(result, "]");
};

function traceToString(trace) {
  var executedEpicsFilter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return true;
  };
  var whitespaceLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  // go till you see > 1 executed epics (after calling filter) or > 1 children layers
  // measure length of output at this point, an pass it down, so we print white space in following lines
  var executedEpicsOutputs = trace.executedEpics.filter(executedEpicsFilter).map(function (epicExecutionInfo) {
    return {
      output: printEpicExecutionInfo(epicExecutionInfo),
      epicExecutionInfo: epicExecutionInfo
    };
  }).filter(function (_ref5) {
    var output = _ref5.output;
    return output;
  }); // if executedEpicsOutputs.length > 1 - branching

  if (executedEpicsOutputs.length === 0 && whitespaceLength === 0) {
    return "".concat(trace.triggerMsg.type, " does not have any effect");
  }

  var branches = executedEpicsOutputs.map(function (_ref6) {
    var output = _ref6.output,
        epicExecutionInfo = _ref6.epicExecutionInfo;
    var whitespace = new Array(whitespaceLength).join(' ');
    var isEpicVcet = trace.triggerMsg.type.indexOf('_VCET') !== -1;
    var prevPrefix = "".concat(whitespace).concat(level !== 0 && isEpicVcet ? '' : trace.triggerMsg.type).concat(level !== 0 ? '|' : ' ', "=> ");
    var prefix = "".concat(prevPrefix).concat(output);
    if (!epicExecutionInfo.childrenLayers) return prefix;
    return [prefix].concat(_toConsumableArray(epicExecutionInfo.childrenLayers.map(function (childLayer) {
      return traceToString(childLayer, executedEpicsFilter, prevPrefix.length + 1, level + 1);
    })));
  });
  return unnest
  /* ::<string> */
  (branches).filter(function (x) {
    return x;
  }).join('\n');
}

function mergeUpdaterState(epicUpdaterState, epicUpdaterStateUpdate) {
  var result = {
    valuesFullfilled: epicUpdaterStateUpdate.valuesFullfilled
  };
  return result;
}

function mergeUpdatersState(epicUpdatersState, epicUpdatersStateUpdate) {
  // eslint-disable-line max-len
  return Object.keys(epicUpdatersState).reduce(function (s, updaterKey) {
    var epicUpdterState = epicUpdatersState[updaterKey];
    var epicUpdaterStateUpdate = epicUpdatersStateUpdate[updaterKey];

    if (epicUpdaterStateUpdate === undefined) {
      s[updaterKey] = epicUpdterState;
    } else {
      s[updaterKey] = mergeUpdaterState(epicUpdterState, epicUpdaterStateUpdate);
    }

    return s;
  }, {});
}

function mergeEpic(epicState, epicStateUpdate) {
  return {
    updatersState: mergeUpdatersState(epicState.updatersState, epicStateUpdate.updatersState),
    state: epicStateUpdate.state === undefined ? epicState.state : epicStateUpdate.state,
    scope: epicStateUpdate.scope === undefined ? epicState.scope : epicStateUpdate.scope
  };
}

function mergeEpicsStateWithUpdate(epicsState, epicsStateUpdate) {
  var resultEpicsState = {};

  for (var _key3 in epicsState) {
    // eslint-disable-line
    var state = epicsState[_key3];
    var update = epicsStateUpdate[_key3];
    resultEpicsState[_key3] = update === undefined ? state : mergeEpic(state, update);
  }

  return resultEpicsState;
}

function mergeEffectManagerStateWithUpdate(emState, update) {
  return {
    state: update.state === undefined ? emState.state : update.state,
    pendingEffects: update.pendingEffects === undefined ? emState.pendingEffects : update.pendingEffects,
    scope: emState.scope
  };
}

function mergeEffectManagersStateWithUpdate(effectManagersState, effectManagersStateUpdate) {
  var result = {};

  for (var _key4 in effectManagersState) {
    var state = effectManagersState[_key4];
    var update = effectManagersStateUpdate[_key4];

    if (update === undefined) {
      result[_key4] = state;
    } else {
      result[_key4] = mergeEffectManagerStateWithUpdate(state, update);
    }
  }

  return result;
}

var effectPromiseCompleteAT = 'effect_promise_complete'; // TODO consider having deepCompare option on condition, so condition will be cosidered changed only if it's value changed using deep compare

var findChangedConditions = function findChangedConditions(condition, value, changedConditions, conditionsValues, prevConditionsValues, conditionsValuesUpdate) {
  // $FlowFixMe condition.childrenConditionsWithSelectorOrGuard checked outside
  condition.childrenConditionsWithSelectorOrGuard.forEach(function (childCondition) {
    var valueKey = childCondition.valueKey,
        guard = childCondition.guard;
    var newChildValue;

    if (guard) {
      newChildValue = value;
      if (guard && !guard(value)) return;
      conditionsValuesUpdate[valueKey] = value; // used for next msg, will come in conditionsValues

      changedConditions.push(childCondition);
    } else {
      var _prevChildValue = prevConditionsValues[valueKey];

      var _prevChildValueIsUndefined = _prevChildValue === undefined;

      var prevChildValue = _prevChildValueIsUndefined ? conditionsValues[valueKey] : _prevChildValue;
      var _prevValue = prevConditionsValues[valueKey];

      var _prevValueIsUndefined = _prevValue === undefined;

      var _prevValue2 = _prevValueIsUndefined ? conditionsValues[condition.valueKey] : _prevValue;

      newChildValue = childCondition.selector ? childCondition.selector(value, _prevValue2) : value[childCondition.selectorKey];
      if (prevChildValue === newChildValue && (condition.isEpicCondition || condition.selector)) return; // This hack should be removed from epicsFlow lib (USED only in wsb)

      if (prevChildValue === newChildValue) return;
      prevConditionsValues[valueKey] = conditionsValuesUpdate[valueKey];

      if (_prevChildValueIsUndefined) {
        prevConditionsValues[valueKey] = newChildValue;
      }

      conditionsValuesUpdate[valueKey] = newChildValue;
      changedConditions.push(childCondition);
    }

    if (childCondition.childrenConditionsWithoutSelectorAndGuard) {
      changedConditions.push.apply(changedConditions, _toConsumableArray(childCondition.childrenConditionsWithoutSelectorAndGuard));
    }

    if (!childCondition.childrenConditionsWithSelectorOrGuard) return;
    findChangedConditions(childCondition, newChildValue, changedConditions, conditionsValues, prevConditionsValues, conditionsValuesUpdate);
  });
};

var createEffectManagersByRequestType = function createEffectManagersByRequestType(effectManagers) {
  return Object.keys(effectManagers).reduce(function (m, emk) {
    var effectManager = _objectSpread({}, effectManagers[emk]);

    effectManager.key = emk;

    if (!m[effectManager.requestType]) {
      m[effectManager.requestType] = effectManager;
    } else {
      throw new Error("duplicate effect manager request type ".concat(effectManagers[emk].requestType, " for [").concat(emk, " and ").concat(m[effectManager.requestType].key, "]"));
    }

    return m;
  }, {});
};

var nothingChangedButObjectRecreatedWarn = 'WARN: nothing changed, but new objects with same data was created';

var createExecuteMsg = function createExecuteMsg(_ref7) {
  var trace = _ref7.trace,
      epicsMapByVcet = _ref7.epicsMapByVcet,
      epicKeyByVcet = _ref7.epicKeyByVcet,
      effectManagers = _ref7.effectManagers,
      _dispatch = _ref7.dispatch,
      rootConditionsByMsgType = _ref7.rootConditionsByMsgType;
  var effectManagersByRequestType = createEffectManagersByRequestType(effectManagers);
  var orderOfEpicsVcet = Object.keys(epicsMapByVcet).reduce(function (r, vcet, index) {
    return _objectSpread({}, r, _defineProperty({}, vcet, index));
  }, {});

  var vcetToSortValue = function vcetToSortValue(vcet, currentMsgType, initiatedByEpic) {
    if (vcet === currentMsgType || initiatedByEpic && initiatedByEpic.type === vcet) return -Infinity;
    return orderOfEpicsVcet[vcet];
  };

  var getTraceUpdaters = function getTraceUpdaters(_ref8) {
    var executionLevelTrace = _ref8.executionLevelTrace,
        subVcet = _ref8.subVcet;
    var updaters;
    var exsistingEpicTraceInfo = executionLevelTrace.executedEpics.find(function (t) {
      return t.epicVcet === subVcet;
    });

    if (exsistingEpicTraceInfo) {
      if (exsistingEpicTraceInfo.updaters) {
        updaters = exsistingEpicTraceInfo.updaters;
      } else {
        updaters = [];
        exsistingEpicTraceInfo.updaters = updaters;
      }
    } else {
      updaters = [];
      executionLevelTrace.executedEpics.push({
        epicVcet: subVcet,
        epicKey: epicKeyByVcet[subVcet],
        updaters: updaters
      });
    }

    return updaters;
  };

  var getNextLevelTrace = function getNextLevelTrace(_ref9) {
    var executionLevelTrace = _ref9.executionLevelTrace,
        subVcet = _ref9.subVcet,
        triggerMsg = _ref9.triggerMsg;
    var executedEpic = executionLevelTrace.executedEpics.find(function (e) {
      return e.epicVcet === subVcet;
    });

    if (!executedEpic) {
      throw new Error('Unexpected trace error, please investigate how this happend.');
    } // should never happen, but flow can not check it


    if (!executedEpic.childrenLayers) {
      executedEpic.childrenLayers = [];
    }

    var nextLevelTrace = {
      triggerMsg: triggerMsg,
      executedEpics: []
    };
    executedEpic.childrenLayers.push(nextLevelTrace);
    return nextLevelTrace;
  };

  var isEpicMsg = function isEpicMsg(msg) {
    return !!(msg.type && epicsMapByVcet[msg.type]);
  };

  function executeMsg(_ref10) {
    var msgsChain = _ref10.msgsChain,
        conditionsValues = _ref10.conditionsValues,
        prevConditionsValues = _ref10.prevConditionsValues,
        conditionsValuesUpdate = _ref10.conditionsValuesUpdate,
        epicsState = _ref10.epicsState,
        epicsStateUpdate = _ref10.epicsStateUpdate,
        effectManagersState = _ref10.effectManagersState,
        effectManagersStateUpdate = _ref10.effectManagersStateUpdate,
        lastReducerValuesByEpicVcetUpdaterKey = _ref10.lastReducerValuesByEpicVcetUpdaterKey,
        messagesToSendOutside = _ref10.messagesToSendOutside,
        batchedDispatchBatches = _ref10.batchedDispatchBatches,
        executionLevelTrace = _ref10.executionLevelTrace,
        level = _ref10.level;

    if (level > 100) {
      throw new Error("Unresolvable cyclic chain detected, ".concat(msgsChain.map(function (a) {
        return a.type;
      }).join(' => ')));
    }

    function getEpicStateUpdate(epicVcet) {
      var epicStateUpdate = epicsStateUpdate[epicVcet];

      if (!epicStateUpdate) {
        epicStateUpdate = {
          updatersState: {}
        };
        epicsStateUpdate[epicVcet] = epicStateUpdate; // eslint-disable-line no-param-reassign
      }

      return epicStateUpdate;
    }

    function getUpdaterStateUpdate(epicStateUpdate, updaterState, updaterKey) {
      var updaterStateUpdate = epicStateUpdate.updatersState[updaterKey];

      if (!updaterStateUpdate) {
        epicStateUpdate.updatersState[updaterKey] = updaterStateUpdate = {
          valuesFullfilled: _objectSpread({}, updaterState.valuesFullfilled)
        };
      }

      return updaterStateUpdate;
    }

    var sourceMsg = last(msgsChain);
    var msg = msgsChain[0];
    var rootCondition = rootConditionsByMsgType[msg.type];
    executeRootCondition(rootCondition);
    executeRootCondition(rootConditionsByMsgType[MatchAnyMsgType]);

    function executeRootCondition(rootCondition) {
      if (!rootCondition) return;
      var subscriptions = [];
      conditionsValuesUpdate[rootCondition.valueKey] = msg;

      if (rootCondition.subscriptions) {
        subscriptions.push.apply(subscriptions, _toConsumableArray(rootCondition.subscriptions));
      }

      if (rootCondition.childrenConditionsWithoutSelectorAndGuard) {
        rootCondition.childrenConditionsWithoutSelectorAndGuard.forEach(function (c) {
          if (c.subscriptions) {
            subscriptions.push.apply(subscriptions, _toConsumableArray(c.subscriptions));
          }
        });
      }

      if (rootCondition.childrenConditionsWithSelectorOrGuard) {
        var changedConditions = [];
        findChangedConditions(rootCondition, msg, changedConditions, conditionsValues, prevConditionsValues, conditionsValuesUpdate);
        changedConditions.forEach(function (cac) {
          var cacSub = cac.subscriptions;

          if (cacSub) {
            subscriptions.push.apply(subscriptions, _toConsumableArray(cacSub));
          }
        });
      }

      subscriptions.forEach(function (sub) {
        var epicVcet = sub.epicVcet,
            updaterKey = sub.updaterKey,
            conditionKey = sub.conditionKey;
        var epicStateUpdate = getEpicStateUpdate(epicVcet);
        var epicState = epicsState[epicVcet];
        var updaterState = epicState.updatersState[updaterKey];
        var updaterStateUpdate = getUpdaterStateUpdate(epicStateUpdate, updaterState, updaterKey);
        updaterStateUpdate.valuesFullfilled[conditionKey] = true;
      });
      var activeSubs = subscriptions.filter(function (s) {
        return !s.passive;
      });
      if (!activeSubs.length) return;
      var epicSubs = activeSubs.reduce(function (r, sub) {
        var updaterKey = sub.updaterKey,
            epicVcet = sub.epicVcet;
        var updatersByVcet = r[epicVcet];

        if (!updatersByVcet) {
          r[epicVcet] = updatersByVcet = {};
        }

        var conditionKeysByUpdaterKey = updatersByVcet[updaterKey];

        if (!conditionKeysByUpdaterKey) {
          updatersByVcet[updaterKey] = conditionKeysByUpdaterKey = [];
        }

        conditionKeysByUpdaterKey.push(sub.conditionKey);
        return r;
      }, {});
      var msgType = msg.type;
      var _ref11 = msg,
          initiatedByEpic = _ref11.initiatedByEpic;
      var epicVcetToBeExecuted = Object.keys(epicSubs).sort(function (vcet1, vcet2) {
        return vcetToSortValue(vcet1, msgType, initiatedByEpic) - vcetToSortValue(vcet2, msgType, initiatedByEpic);
      });
      epicVcetToBeExecuted.forEach(function (subVcet) {
        // $FlowFixMe
        if (msg.targetEpicVcetMap && !msg.targetEpicVcetMap[subVcet]) {
          if (trace && executionLevelTrace) {
            executionLevelTrace.executedEpics.push({
              epicVcet: subVcet,
              epicKey: epicKeyByVcet[subVcet],
              epicNotExecutedBecause: "msg.targetEpicVcetMap ".concat(Object.keys(msg.targetEpicVcetMap).join(', '), " does not contain ").concat(subVcet)
            });
          }

          return;
        }

        var updaterSubs = epicSubs[subVcet];
        var epic = epicsMapByVcet[subVcet];
        var epicState = epicsState[subVcet];
        var updateReasons = [];
        var customEpicChangedEventFields = {};
        var allEffects = [];
        var updaterKeysThatChangedState = [];
        var epicStateUpdate = getEpicStateUpdate(subVcet);
        Object.keys(updaterSubs).forEach(function (updaterKey) {
          var changedActiveConditionsKeys = updaterSubs[updaterKey];
          var updater = epic.updaters[updaterKey];
          var conditions = updater.conditions;
          var updaterState = epicState.updatersState[updaterKey];
          var updaterStateUpdate = getUpdaterStateUpdate(epicStateUpdate, updaterState, updaterKey);
          var valuesFullfilled = updaterStateUpdate.valuesFullfilled; // todo put resetAllConditionsBelowThis logic here

          changedActiveConditionsKeys.forEach(function (cck) {
            var resetConditionsByKeyKeys = conditions[cck].resetConditionsByKeyKeys;

            if (resetConditionsByKeyKeys) {
              resetConditionsByKeyKeys.forEach(function (ck) {
                valuesFullfilled[ck] = false;
              });
            }
          });

          if (updater.compulsoryConditionsKeys.some(function (k) {
            return !valuesFullfilled[k];
          })) {
            if (trace && executionLevelTrace) {
              getTraceUpdaters({
                executionLevelTrace: executionLevelTrace,
                subVcet: subVcet
              }).push({
                updaterKey: updaterKey,
                changedActiveConditionsKeys: changedActiveConditionsKeys,
                reducerNotExecutedBecause: "compulsory conditions keys ".concat(updater.compulsoryConditionsKeys.filter(function (k) {
                  return !valuesFullfilled[k];
                }).join(', '), " are not fullifilled")
              });
            }

            return;
          }

          var atLeastOneValueIsDifferent = false;
          var epicUpdaterKey = "".concat(subVcet, ".").concat(updaterKey);
          var lastReducerValues = lastReducerValuesByEpicVcetUpdaterKey[epicUpdaterKey];

          var getEpicStateMsg = function getEpicStateMsg(msg) {
            var epicStateUpdate = (epicsStateUpdate[msg.type] || {}).state;
            return _objectSpread({}, msg, {
              payload: epicStateUpdate === undefined ? epicsState[msg.type].state : epicStateUpdate
            });
          };

          var reducerValues = updater.conditionKeysToConditionUpdaterKeys.reduce(function (v, _ref12) {
            var _ref13 = _slicedToArray(_ref12, 2),
                conditionKey = _ref13[0],
                conditionUpdaterKey = _ref13[1];

            var shouldLookForDifferentValuesFromLastExecution = lastReducerValues && !atLeastOneValueIsDifferent;
            var condition = updater.conditions[conditionUpdaterKey];
            var isEpicCondition = condition.isEpicCondition;

            if (!valuesFullfilled[conditionUpdaterKey]) {
              if (shouldLookForDifferentValuesFromLastExecution && isEpicCondition && lastReducerValues[conditionUpdaterKey] !== undefined) {
                atLeastOneValueIsDifferent = true;
              }

              return v;
            }

            var valueUpdate = condition.msgType === MatchAnyMsgType ? isEpicMsg(msg) ? getEpicStateMsg(msg) : msg : conditionsValuesUpdate[conditionKey];
            var nextValue = v[conditionUpdaterKey] = valueUpdate === undefined ? conditionsValues[conditionKey] : valueUpdate;

            if (shouldLookForDifferentValuesFromLastExecution) {
              if (isEpicCondition) {
                if (lastReducerValues[conditionUpdaterKey] !== nextValue) {
                  atLeastOneValueIsDifferent = true;
                }
              } else if (!condition.selector) {
                // This hack should be removed from epicsFlow lib (USED only in wsb)
                atLeastOneValueIsDifferent = true;
              }
            }

            return v;
          }, {}); // epic value can be changed multiple times for single user action, this ensures that epic subscribers are called only once if nothing is changed from last call

          if (lastReducerValues && !atLeastOneValueIsDifferent && changedActiveConditionsKeys.every(function (ck) {
            return updater.conditions[ck].msgType !== MatchAnyMsgType;
          })) {
            if (trace && executionLevelTrace) {
              getTraceUpdaters({
                executionLevelTrace: executionLevelTrace,
                subVcet: subVcet
              }).push({
                updaterKey: updaterKey,
                changedActiveConditionsKeys: changedActiveConditionsKeys,
                reducerValues: reducerValues,
                reducerNotExecutedBecause: 'It was called before in execution chain and values not changed since then'
              });
            }

            return;
          }

          lastReducerValuesByEpicVcetUpdaterKey[epicUpdaterKey] = reducerValues;
          var prevState = epicStateUpdate.state === undefined ? epicState.state : epicStateUpdate.state;
          var prevScope = epicStateUpdate.scope === undefined ? epicState.scope : epicStateUpdate.scope;

          if (__DEV__) {
            deepFreeze(reducerValues);
            deepFreeze(prevState);
            deepFreeze(prevScope);
          }

          var result;

          try {
            // TODO flow - mark everything passed inside then as $ReadOnly
            result = updater.then({
              values: reducerValues,
              state: prevState,
              scope: prevScope,
              sourceMsg: sourceMsg,
              changedActiveConditionsKeysMap: changedActiveConditionsKeys.reduce(function (m, k) {
                m[k] = true;
                return m;
              }, {}),
              R: new ReducerResult(prevState, prevScope)
            });
          } catch (e) {
            if (trace && executionLevelTrace) {
              var updaters = getTraceUpdaters({
                executionLevelTrace: executionLevelTrace,
                subVcet: subVcet
              });
              var updaterTraceInfo = {
                updaterKey: updaterKey,
                changedActiveConditionsKeys: changedActiveConditionsKeys,
                error: e
              };
              updaterTraceInfo.reducerValues = reducerValues;
              updaters.push(updaterTraceInfo);
            }

            throw e;
          }

          if (__DEV__) {
            if (typeof result._state === 'function') {
              throw Error("".concat(subVcet, "[").concat(updaterKey, "] Function returned as new state of epic"));
            }

            if (typeof result._scope === 'function') {
              throw Error("".concat(subVcet, "[").concat(updaterKey, "] Function returned as new scope of epic"));
            }
          }

          var stateUpdated = prevState !== result._state;
          var scopeUpdated = prevScope !== result._scope;

          if (trace && executionLevelTrace) {
            var _updaters = getTraceUpdaters({
              executionLevelTrace: executionLevelTrace,
              subVcet: subVcet
            });

            var _updaterTraceInfo = {
              updaterKey: updaterKey,
              changedActiveConditionsKeys: changedActiveConditionsKeys
            };

            if (!stateUpdated && !scopeUpdated && !result._sideEffects.length) {
              _updaterTraceInfo.didNothing = true;
            } else {
              _updaterTraceInfo.reducerValues = reducerValues;
            }

            if (stateUpdated) {
              _updaterTraceInfo.epicState = prevState;

              if (_typeof(prevState) === 'object') {
                var updaterEpicStateChange = findObjDiff(prevState, result._state);

                if (!isEmpty(updaterEpicStateChange)) {
                  _updaterTraceInfo.updaterEpicStateChange = updaterEpicStateChange;
                } else {
                  _updaterTraceInfo.updaterEpicStateChange = nothingChangedButObjectRecreatedWarn;
                }
              } else {
                _updaterTraceInfo.updaterEpicStateChange = result._state;
              }
            }

            if (scopeUpdated) {
              _updaterTraceInfo.epicScope = prevScope;
              var updaterEpicScopeChange = findObjDiff(prevScope, result._scope);

              if (!isEmpty(updaterEpicScopeChange)) {
                _updaterTraceInfo.updaterEpicScopeChange = updaterEpicScopeChange;
              } else {
                _updaterTraceInfo.updaterEpicScopeChange = nothingChangedButObjectRecreatedWarn;
              }
            }

            if (result._sideEffects.length > 0) {
              _updaterTraceInfo.updaterReqestedEffects = result._sideEffects;
            }

            _updaters.push(_updaterTraceInfo);
          }

          changedActiveConditionsKeys.forEach(function (cck) {
            var resetConditionsByKeyAfterReducerCallKeys = updater.conditions[cck].resetConditionsByKeyAfterReducerCallKeys;

            if (resetConditionsByKeyAfterReducerCallKeys) {
              resetConditionsByKeyAfterReducerCallKeys.forEach(function (ck) {
                valuesFullfilled[ck] = false;
              });
            }
          });

          if (scopeUpdated) {
            epicStateUpdate.scope = result._scope; // eslint-disable-line no-param-reassign
          }

          if (stateUpdated) {
            updaterKeysThatChangedState.push(updaterKey);
            epicStateUpdate.state = result._state; // eslint-disable-line no-param-reassign

            updateReasons.push.apply(updateReasons, _toConsumableArray(result._updateReasons));
            customEpicChangedEventFields = _objectSpread({}, customEpicChangedEventFields, result._customEpicChangedEventFields); // TODO is this epic has subs to it self, execute them immideately, skipping after update
          }

          var _result = result,
              _sideEffects = _result._sideEffects;

          if (_sideEffects.length) {
            _sideEffects.forEach(function (e) {
              if (e.type === dispatchBatchedMsgsEffectType) {
                batchedDispatchBatches.push.apply(batchedDispatchBatches, _toConsumableArray(e.batches));
              } else {
                allEffects.push(e);
              }
            });
          }

          if (__DEV__) {
            deepFreeze(result._state);
            deepFreeze(result._scope);
          }
        });

        if (updaterKeysThatChangedState.length) {
          var epicChangedEvent = _objectSpread({
            type: subVcet,
            payload: epicStateUpdate.state
          }, customEpicChangedEventFields);

          msgsChain.forEach(function (msg) {
            if (msg.type === subVcet) {
              var urs = msg.updateReasons;

              if (urs) {
                updateReasons.push.apply(updateReasons, _toConsumableArray(urs));
              }
            }
          });
          epicChangedEvent.updateReasons = updateReasons;
          executeMsg({
            msgsChain: [epicChangedEvent].concat(_toConsumableArray(msgsChain)),
            conditionsValues: conditionsValues,
            prevConditionsValues: prevConditionsValues,
            conditionsValuesUpdate: conditionsValuesUpdate,
            epicsState: epicsState,
            epicsStateUpdate: epicsStateUpdate,
            effectManagersState: effectManagersState,
            effectManagersStateUpdate: effectManagersStateUpdate,
            lastReducerValuesByEpicVcetUpdaterKey: lastReducerValuesByEpicVcetUpdaterKey,
            messagesToSendOutside: messagesToSendOutside,
            batchedDispatchBatches: batchedDispatchBatches,
            executionLevelTrace: trace && executionLevelTrace ? getNextLevelTrace({
              executionLevelTrace: executionLevelTrace,
              subVcet: subVcet,
              triggerMsg: epicChangedEvent
            }) : undefined,
            level: level + 1
          });
        }

        if (allEffects.length) {
          allEffects.forEach(function (e) {
            var effectRequestType = e.type;

            switch (effectRequestType) {
              case dispatchMsgEffectType:
                {
                  // we dispatching msg immediately as it may update state of same epic (e1) that requested msg dispatch
                  var dispatchMsgEffect = e;

                  var msgToDispatch = _objectSpread({}, dispatchMsgEffect.msg);

                  msgToDispatch.initiatedByEpic = {
                    updaterKey: e.updaterKey,
                    type: subVcet
                  };
                  executeMsg({
                    msgsChain: [dispatchMsgEffect.msg].concat(_toConsumableArray(msgsChain)),
                    conditionsValues: conditionsValues,
                    prevConditionsValues: prevConditionsValues,
                    conditionsValuesUpdate: conditionsValuesUpdate,
                    epicsState: epicsState,
                    epicsStateUpdate: epicsStateUpdate,
                    effectManagersState: effectManagersState,
                    effectManagersStateUpdate: effectManagersStateUpdate,
                    lastReducerValuesByEpicVcetUpdaterKey: lastReducerValuesByEpicVcetUpdaterKey,
                    messagesToSendOutside: messagesToSendOutside,
                    batchedDispatchBatches: batchedDispatchBatches,
                    executionLevelTrace: trace && executionLevelTrace ? getNextLevelTrace({
                      executionLevelTrace: executionLevelTrace,
                      subVcet: subVcet,
                      triggerMsg: dispatchMsgEffect.msg
                    }) : undefined,
                    level: level + 1
                  });
                  break;
                }

              case sendMsgOutsideEpicsEffectType:
                {
                  var sendMsgOusideOfEpicsEffect = e;
                  messagesToSendOutside.push(sendMsgOusideOfEpicsEffect.msg);
                  break;
                }

              default:
                {
                  var effectManager = effectManagersByRequestType[effectRequestType];
                  var effectManagerStateUpdate = effectManagersStateUpdate[effectRequestType];
                  var effectManagerState = effectManagersState[effectRequestType];
                  var state = effectManagerStateUpdate && effectManagerStateUpdate.state ? effectManagerStateUpdate.state : effectManagerState.state;
                  var isSyncDispatch = true;
                  var result = effectManager.onEffectRequest({
                    effect: e,
                    requesterEpicVcet: subVcet,
                    state: state,
                    scope: effectManagerState.scope,
                    dispatch: function dispatch() {
                      var _arguments = arguments;

                      if (isSyncDispatch) {
                        // Effect managers replying to requirest consitently in async manner, to simplify trace and reasoning
                        setTimeout(function () {
                          return _dispatch.apply(void 0, _toConsumableArray(_arguments));
                        }, 0);
                      } else {
                        _dispatch.apply(void 0, arguments);
                      }
                    },
                    R: new EffectManagerResultType(state)
                  });
                  isSyncDispatch = false;

                  if (result._state !== state) {
                    effectManagersStateUpdate[effectRequestType] = _objectSpread({}, effectManagerStateUpdate, {
                      state: result._state
                    });
                  }

                  result._msgsToDispatch.forEach(function (_ref14) {
                    var msg = _ref14.msg,
                        broadcast = _ref14.broadcast;

                    if (!broadcast) {
                      msg.targetEpicVcetMap = _defineProperty({}, subVcet, true);
                    }

                    executeMsg({
                      msgsChain: [msg].concat(_toConsumableArray(msgsChain)),
                      conditionsValues: conditionsValues,
                      prevConditionsValues: prevConditionsValues,
                      conditionsValuesUpdate: conditionsValuesUpdate,
                      epicsState: epicsState,
                      epicsStateUpdate: epicsStateUpdate,
                      effectManagersState: effectManagersState,
                      effectManagersStateUpdate: effectManagersStateUpdate,
                      lastReducerValuesByEpicVcetUpdaterKey: lastReducerValuesByEpicVcetUpdaterKey,
                      messagesToSendOutside: messagesToSendOutside,
                      batchedDispatchBatches: batchedDispatchBatches,
                      executionLevelTrace: trace && executionLevelTrace ? getNextLevelTrace({
                        executionLevelTrace: executionLevelTrace,
                        subVcet: subVcet,
                        triggerMsg: msg
                      }) : undefined,
                      level: level + 1
                    });
                  });

                  if (result._promise) {
                    var effect = e;
                    effectManagersStateUpdate[effectRequestType] = _objectSpread({}, effectManagerStateUpdate || {}, {
                      state: state,
                      pendingEffects: [].concat(_toConsumableArray(effectManagerStateUpdate && effectManagerStateUpdate.pendingEffects || []), [{
                        effect: effect,
                        promise: result._promise
                      }])
                    });

                    result._promise.then(function () {
                      return _dispatch({
                        type: effectPromiseCompleteAT,
                        effect: effect,
                        effectRequestType: effectRequestType
                      });
                    })["catch"](function (error) {
                      return _dispatch({
                        type: effectPromiseCompleteAT,
                        effect: effect,
                        effectRequestType: effectRequestType,
                        error: error
                      });
                    });
                  }
                }
            }
          });
        }
      });
    }
  }

  return executeMsg;
};

var printExecuteMsgExeption = function printExecuteMsgExeption(_ref15) {
  var trace = _ref15.trace,
      executionLevelTrace = _ref15.executionLevelTrace,
      msg = _ref15.msg,
      e = _ref15.e;

  if (trace) {
    trace(executionLevelTrace);
  } // eslint-disable-next-line no-console


  console.error("error during executing msg ".concat(msg.type), '\nmsg: ', msg, '\ne: ', e, '\nexecutionLevelTrace: ', executionLevelTrace);
};

function computeInitialStates(_ref16) {
  var epicsArr = _ref16.epicsArr,
      warn = _ref16.warn,
      executeMsg = _ref16.executeMsg,
      trace = _ref16.trace;
  var epicsState = epicsArr.reduce(function (state, epic) {
    return _objectSpread({}, state, _defineProperty({}, epic.vcet, {
      updatersState: Object.keys(epic.updaters).reduce(function (s, updaterKey) {
        return _objectSpread({}, s, _defineProperty({}, updaterKey, {
          valuesFullfilled: Object.keys(epic.updaters[updaterKey].conditions).reduce(function (a, ck) {
            return _objectSpread({}, a, _defineProperty({}, ck, false));
          }, {})
        }));
      }, {}),
      state: epic.initialState,
      scope: epic.initialScope
    }));
  }, {});
  var epicsStateUpdate = {};
  var conditionsValues = {};
  var conditionsValuesUpdate = {};
  var effectManagersStateUpdate = {};
  var initialEpicsState = epicsArr.filter(function (epic) {
    return epic.initialState !== undefined;
  }).reduce(function (epicsState, epic) {
    if (epicsStateUpdate[epic.vcet] && epicsStateUpdate[epic.vcet].state) {
      return epicsState;
    }

    var messagesToSendOutside = [];
    var msg = {
      type: epic.vcet,
      payload: epic.initialState
    };
    var batchedDispatchBatches = [];
    var executionLevelTrace = {
      triggerMsg: msg,
      executedEpics: []
    };

    try {
      executeMsg({
        msgsChain: [msg],
        conditionsValues: conditionsValues,
        prevConditionsValues: {},
        conditionsValuesUpdate: conditionsValuesUpdate,
        epicsState: epicsState,
        epicsStateUpdate: epicsStateUpdate,
        effectManagersState: {},
        effectManagersStateUpdate: effectManagersStateUpdate,
        lastReducerValuesByEpicVcetUpdaterKey: {},
        messagesToSendOutside: messagesToSendOutside,
        batchedDispatchBatches: batchedDispatchBatches,
        executionLevelTrace: executionLevelTrace,
        level: 0
      });
    } catch (e) {
      printExecuteMsgExeption({
        trace: trace,
        executionLevelTrace: executionLevelTrace,
        msg: msg,
        e: e
      });
      throw e;
    }

    if (trace) {
      trace(executionLevelTrace);
    }

    if (messagesToSendOutside.length) {
      var _msg = 'epics should not send messages outside on initializing default state. use storeCreatedEvent.condition instead.';
      warn(_msg, messagesToSendOutside);
      throw new Error(_msg);
    }

    if (batchedDispatchBatches.length) {
      var _msg2 = 'epics should not then batched dispatch on initializing default state. use storeCreatedEvent.condition instead.';
      warn(_msg2, batchedDispatchBatches);
      throw new Error(_msg2);
    }

    if (Object.keys(effectManagersStateUpdate).length) {
      var _msg3 = 'effect managers should not be toched during intial state initialization. use storeCreatedEvent.condition instead.';
      warn(_msg3, effectManagersStateUpdate);
      throw new Error(_msg3);
    }

    return mergeEpicsStateWithUpdate(epicsState, epicsStateUpdate);
  }, epicsState);
  return {
    initialEpicsState: initialEpicsState,
    initialCondtionsValues: _objectSpread({}, conditionsValues, conditionsValuesUpdate)
  };
}

var createComputeOutsideState = function createComputeOutsideState(_ref17) {
  var epicsVcetToStateKeyMap = _ref17.epicsVcetToStateKeyMap;
  return function (state) {
    return Object.keys(state).reduce(function (s, vcet) {
      s[epicsVcetToStateKeyMap[vcet]] = state[vcet].state;
      return s;
    }, {});
  };
};

function findRootCondition(condition) {
  if (condition.parentCondition) {
    return findRootCondition(condition.parentCondition);
  }

  return condition;
}

function processConditionsSubscriptions(epics) {
  var rootConditionsByMsgType = {};
  Object.keys(epics).forEach(function (epicKey) {
    var epic = epics[epicKey];
    Object.keys(epic.updaters).forEach(function (updaterKey) {
      var updater = epic.updaters[updaterKey];
      Object.keys(updater.conditions).forEach(function (conditionKey) {
        var condition = updater.conditions[conditionKey];
        var rootCondition = findRootCondition(condition);

        if (!rootConditionsByMsgType[rootCondition.msgType]) {
          rootConditionsByMsgType[rootCondition.msgType] = rootCondition;
        }

        if (!condition.subscriptions) {
          condition.subscriptions = [];
        }

        condition.subscriptions.push({
          epicVcet: epic.vcet,
          updaterKey: updaterKey,
          conditionKey: conditionKey,
          passive: condition.passive
        });
      });
    });
  });
  return rootConditionsByMsgType;
}

function validateResetConditions(epics) {
  Object.keys(epics).forEach(function (epicKey) {
    var epic = epics[epicKey];
    Object.keys(epic.updaters).forEach(function (updaterKey) {
      var updater = epic.updaters[updaterKey];
      Object.keys(updater.conditions).forEach(function (conditionKey) {
        var condition = updater.conditions[conditionKey];

        if (condition.resetConditionsByKeyKeys) {
          condition.resetConditionsByKeyKeys.forEach(function (conditionKeyToReset) {
            if (!updater.conditions[conditionKeyToReset]) {
              throw new Error("".concat(epicKey, ".").concat(updaterKey, ".").concat(conditionKey, " resetConditionsByKeyKeys defined ").concat(conditionKeyToReset, " which is not exist in updater.conditons"));
            }
          });
        }

        if (condition.resetConditionsByKeyAfterReducerCallKeys) {
          condition.resetConditionsByKeyAfterReducerCallKeys.forEach(function (conditionKeyToReset) {
            if (!updater.conditions[conditionKeyToReset]) {
              throw new Error("".concat(epicKey, ".").concat(updaterKey, ".").concat(conditionKey, " resetConditionsByKeyAfterReducerCallKeys defined ").concat(conditionKeyToReset, " which is not exist in updater.conditons"));
            }
          });
        }
      });
    });
  });
}

function validateEpicConditions(epics) {
  var epicsArray = values(epics);
  Object.keys(epics).forEach(function (epicKey) {
    var epic = epics[epicKey];
    Object.keys(epic.updaters).forEach(function (updaterKey) {
      var updater = epic.updaters[updaterKey];
      Object.keys(updater.conditions).forEach(function (conditionKey) {
        var condition = updater.conditions[conditionKey];

        if (epicsArray.some(function (e) {
          return e.vcet === condition.msgType;
        }) && !condition.isEpicCondition) {
          throw new Error("".concat(epicKey, ".").concat(updaterKey, ".").concat(conditionKey, " has epic valueChangedEventType: ").concat(condition.msgType, ", but was created as non epic condition"));
        }

        if (!epicsArray.some(function (e) {
          return e.vcet === condition.msgType;
        }) && condition.isEpicCondition) {
          throw new Error("".concat(epicKey, ".").concat(updaterKey, ".").concat(conditionKey, " was created as epic condition, but there is no epic registered with valueChangedEventType: ").concat(condition.msgType));
        }
      });
    });
  });
}

var globalRootConditionsByMsgType = {};
var globalSelectorsInUse = [];
var globalGuardsInUse = [];

function _createCondition(_ref18, calledFromRoot) {
  var msgType = _ref18.msgType,
      passive = _ref18.passive,
      optional = _ref18.optional,
      selectorKey = _ref18.selectorKey,
      guard = _ref18.guard,
      resetConditionsByKeyKeys = _ref18.resetConditionsByKeyKeys,
      resetConditionsByKeyAfterReducerCallKeys = _ref18.resetConditionsByKeyAfterReducerCallKeys,
      parentCondition = _ref18.parentCondition,
      selector = _ref18.selector,
      sealed = _ref18.sealed,
      isEpicCondition = _ref18.isEpicCondition;

  // skipping parents without selectors or guards, as they are useless during changed conditions computation
  if (parentCondition && !parentCondition.selectorKey && !parentCondition.selector && !parentCondition.guard && parentCondition.parentCondition) {
    // eslint-disable-next-line no-param-reassign
    parentCondition = parentCondition.parentCondition;
  }

  if (selector && globalSelectorsInUse.indexOf(selector) === -1) {
    globalSelectorsInUse.push(selector);
  }

  if (guard && globalGuardsInUse.indexOf(guard) === -1) {
    globalGuardsInUse.push(guard);
  }

  var condition = {
    valueKey: "".concat(parentCondition ? parentCondition.valueKey : msgType).concat(selectorKey ? ".".concat(selectorKey) : '').concat(selector ? ".$$selector".concat(globalSelectorsInUse.indexOf(selector)) : '').concat(guard ? ".$$guard".concat(globalGuardsInUse.indexOf(guard)) : ''),
    parentCondition: parentCondition,
    msgType: msgType,
    passive: passive,
    optional: optional,
    guard: guard,
    resetConditionsByKeyKeys: resetConditionsByKeyKeys,
    resetConditionsByKeyAfterReducerCallKeys: resetConditionsByKeyAfterReducerCallKeys,
    selector: selector,
    isEpicCondition: isEpicCondition,
    toPassive: function toPassive() {
      return _createCondition(_objectSpread({}, getFields(condition), {
        passive: true
      }));
    },
    toOptional: function toOptional() {
      return _createCondition(_objectSpread({}, getFields(condition), {
        optional: true
      }));
    },
    resetConditionsByKey: function resetConditionsByKey(keys) {
      return _createCondition(_objectSpread({}, getFields(condition), {
        resetConditionsByKeyKeys: keys
      }));
    },
    resetConditionsByKeyAfterReducerCall: function resetConditionsByKeyAfterReducerCall(keys) {
      return _createCondition(_objectSpread({}, getFields(condition), {
        resetConditionsByKeyAfterReducerCallKeys: keys
      }));
    },
    // You can have multiple guards for different levels of selectors like this: c.ws().tp().ws().tp()
    withGuard: function withGuard(guard) {
      if (condition.guard) {
        throw new Error("Guards can be applied only once per level. Condition \"".concat(condition.valueKey, "\" already has guard."));
      }

      var childrenConditionsWithSelectorOrGuard = condition.childrenConditionsWithSelectorOrGuard;

      if (childrenConditionsWithSelectorOrGuard) {
        var existingCondition = childrenConditionsWithSelectorOrGuard.find(function (c) {
          return c.guard === guard;
        });
        if (existingCondition) return existingCondition;
      }

      var newCondition = _createCondition(_objectSpread({}, getFields(condition), {
        guard: guard
      }));

      return newCondition;
    }
  };
  condition.to = condition.toOptional;
  condition.wg = condition.withGuard;

  if (!sealed) {
    var withSelectorKey = function withSelectorKey(selectorKey) {
      var childrenConditionsWithSelectorOrGuard = condition.childrenConditionsWithSelectorOrGuard;

      if (childrenConditionsWithSelectorOrGuard) {
        var existingCondition = childrenConditionsWithSelectorOrGuard.find(function (c) {
          return c.selectorKey === selectorKey;
        });
        if (existingCondition) return existingCondition;
      }

      return _createCondition(_objectSpread({}, getFields(condition), {
        selectorKey: selectorKey
      }));
    };

    condition.withSelectorKey = withSelectorKey;
    condition.wsk = condition.withSelectorKey;

    var withSelector = function withSelector(selector) {
      var childrenConditionsWithSelectorOrGuard = condition.childrenConditionsWithSelectorOrGuard;

      if (childrenConditionsWithSelectorOrGuard) {
        var existingCondition = childrenConditionsWithSelectorOrGuard.find(function (c) {
          return c.selector === selector;
        });
        if (existingCondition) return existingCondition;
      }

      return _createCondition(_objectSpread({}, getFields(condition), {
        selector: selector,
        sealed: true
      }));
    };

    condition.withSelector = withSelector;
    condition.ws = condition.withSelector;

    if (selectorKey) {
      condition.selectorKey = selectorKey;
    }
  }

  if (parentCondition) {
    if (condition.selectorKey || condition.selector || condition.guard) {
      if (!parentCondition.childrenConditionsWithSelectorOrGuard) {
        parentCondition.childrenConditionsWithSelectorOrGuard = [];
      }

      parentCondition.childrenConditionsWithSelectorOrGuard.push(condition);
    } else {
      if (!parentCondition.childrenConditionsWithoutSelectorAndGuard) {
        parentCondition.childrenConditionsWithoutSelectorAndGuard = [];
      }

      parentCondition.childrenConditionsWithoutSelectorAndGuard.push(condition);
    }
  }

  if (calledFromRoot) {
    globalRootConditionsByMsgType[msgType] = condition;
  }

  condition.match = createConditionMatcher(condition);
  return condition;
}

function createCondition(msgType) {
  var isEpicCondition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (globalRootConditionsByMsgType[msgType]) {
    return globalRootConditionsByMsgType[msgType];
  }

  return _createCondition({
    msgType: msgType,
    passive: false,
    optional: false,
    resetConditionsByKeyKeys: null,
    resetConditionsByKeyAfterReducerCallKeys: null,
    sealed: false,
    isEpicCondition: isEpicCondition
  }, true);
}

function createEpicConditionReceiveFullMsg(vcet) {
  return createCondition
  /* ::<EpicValueChangedEventType<State>> */
  (vcet, true);
}

function createEpicCondition(vcet) {
  return createEpicConditionReceiveFullMsg(vcet).withSelectorKey('payload');
}

function createEpicWithScope(_ref19) {
  var vcet = _ref19.vcet,
      updaters = _ref19.updaters,
      initialState = _ref19.initialState,
      initialScope = _ref19.initialScope,
      pluginConfig = _ref19.pluginConfig;
  var c = createEpicCondition
  /* ::<S> */
  (vcet);
  return {
    vcet: vcet,
    updaters: updaters,
    initialState: initialState,
    initialScope: initialScope,
    c: c,
    condition: c,
    pluginConfig: pluginConfig
  };
}

function createEpic(_ref20) {
  var vcet = _ref20.vcet,
      updaters = _ref20.updaters,
      initialState = _ref20.initialState,
      pluginConfig = _ref20.pluginConfig;
  return createEpicWithScope({
    vcet: vcet,
    updaters: updaters,
    initialState: initialState,
    initialScope: undefined,
    pluginConfig: pluginConfig
  });
}

var matchAnyMsgCondition = createCondition(MatchAnyMsgType); // TODO put correct annotation

var createPluginStateKey = function createPluginStateKey(key) {
  return "plugin/".concat(key);
};

function createEpicsSubStoresByVcet(epics) {
  return getObjectKeys(epics).reduce(function (result, epicKey) {
    var epic = epics[epicKey];
    result[epic.vcet] = createStore({
      epics: _defineProperty({}, epicKey, epic),
      isSubStore: true
    });
    return result;
  }, {});
}

function createStore(_ref21, hotReload) {
  var epics = _ref21.epics,
      _ref21$effectManagers = _ref21.effectManagers,
      effectManagers = _ref21$effectManagers === void 0 ? {} : _ref21$effectManagers,
      _ref21$plugins = _ref21.plugins,
      plugins = _ref21$plugins === void 0 ? {} : _ref21$plugins,
      debug = _ref21.debug,
      isSubStore = _ref21.isSubStore;

  // eslint-disable-next-line no-console
  var _ref22 = debug === true ? {
    devTools: {
      config: {}
    },
    warn: undefined,
    trace: function trace(e) {
      return console.log(traceToString(e));
    }
  } : debug || {},
      _ref22$warn = _ref22.warn,
      warn = _ref22$warn === void 0 ? function () {
    return null;
  } : _ref22$warn,
      trace = _ref22.trace,
      devToolsConfig = _ref22.devTools;

  var devTools;

  function onEpicsStateChange(epicsState) {
    outsideState = computeOutsideState(epicsState);
    stateChangedSubscribers.forEach(function (sub) {
      return sub(outsideState);
    });
  }

  var batchDispatchIsInProgress = false;
  var messagesAccumulatedDuringBatchDispatch = [];

  var epicsStateChangedCallbackAfterBatchDispatchComplete = function epicsStateChangedCallbackAfterBatchDispatchComplete() {
    return undefined;
  };

  function _dispatch2(msg) {
    var meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    onDispatchSubscribers.forEach(function (sub) {
      return sub(msg);
    });
    msg = _objectSpread({}, msg); // eslint-disable-line no-param-reassign

    var messagesToSendOutside = [];
    var epicsStateUpdate = {};
    var effectManagersStateUpdate = {};

    if (meta.targetEpicVcet) {
      msg.targetEpicVcetMap = meta.targetEpicVcet.reduce(function (m, v) {
        m[v] = true;
        return m;
      }, {});
    }

    var updatedConditionsValues;
    var updatedEpicsState;
    var updatedEffectManagersState;
    var batchedDispatchBatches = [];

    if (msg.type === effectPromiseCompleteAT) {
      var _ref23 = msg,
          effect = _ref23.effect,
          error = _ref23.error,
          effectRequestType = _ref23.effectRequestType;
      var effectManagerState = serviceState.effectManagers[effectRequestType];
      effectManagersStateUpdate[effectRequestType] = _objectSpread({}, effectManagersStateUpdate[effectRequestType], {
        pendingEffects: effectManagerState.pendingEffects.filter(function (pe) {
          return pe.effect !== effect;
        })
      });

      if (error) {
        warn("Effect ".concat(effectRequestType, " error ").concat(error.message, "."), effect, error);
      }
    } else {
      var conditionsValuesUpdate = {};
      var executionLevelTrace = {
        triggerMsg: msg,
        executedEpics: []
      };

      try {
        executeMsg({
          msgsChain: [msg],
          conditionsValues: serviceState.conditions,
          prevConditionsValues: {},
          conditionsValuesUpdate: conditionsValuesUpdate,
          epicsState: serviceState.epics,
          epicsStateUpdate: epicsStateUpdate,
          effectManagersState: serviceState.effectManagers,
          effectManagersStateUpdate: effectManagersStateUpdate,
          lastReducerValuesByEpicVcetUpdaterKey: {},
          messagesToSendOutside: messagesToSendOutside,
          batchedDispatchBatches: batchedDispatchBatches,
          executionLevelTrace: executionLevelTrace,
          level: 0
        });
      } catch (e) {
        printExecuteMsgExeption({
          trace: trace,
          executionLevelTrace: executionLevelTrace,
          msg: msg,
          e: e
        });
        throw e;
      }

      if (trace) trace(executionLevelTrace);

      if (Object.keys(conditionsValuesUpdate).length !== 0) {
        updatedConditionsValues = _objectSpread({}, serviceState.conditions, conditionsValuesUpdate);
      }

      var updatedEpicsTypes = Object.keys(epicsStateUpdate);
      var noBatchDispatchBatches = batchedDispatchBatches.length === 0;

      if (updatedEpicsTypes.length !== 0) {
        updatedEpicsState = mergeEpicsStateWithUpdate(serviceState.epics, epicsStateUpdate);

        if (!batchDispatchIsInProgress && noBatchDispatchBatches) {
          onEpicsStateChange(updatedEpicsState);
        }
      }

      if (batchDispatchIsInProgress || !noBatchDispatchBatches) {
        var _messagesAccumulatedD;

        (_messagesAccumulatedD = messagesAccumulatedDuringBatchDispatch).push.apply(_messagesAccumulatedD, messagesToSendOutside);
      } else {
        messagesToSendOutside.forEach(function (m) {
          return outMsgSubscribers.forEach(function (sub) {
            return sub(m);
          });
        });
      }
    }

    if (Object.keys(effectManagersStateUpdate).length) {
      updatedEffectManagersState = mergeEffectManagersStateWithUpdate(serviceState.effectManagers, effectManagersStateUpdate);
    }

    if (updatedConditionsValues || updatedEpicsState || updatedEffectManagersState) {
      var nextServiceState = {
        epics: updatedEpicsState || serviceState.epics,
        conditions: updatedConditionsValues || serviceState.conditions,
        effectManagers: updatedEffectManagersState || serviceState.effectManagers
      };

      if (devTools && Object.keys(epicsStateUpdate).length) {
        var atLeastOneChange = false;
        Object.keys(epicsStateUpdate).forEach(function (vcet) {
          if (atLeastOneChange) return;
          var epicState = serviceState.epics[vcet];
          var epicStateUpdate = epicsStateUpdate[vcet];

          if (epicStateUpdate.state !== undefined && !deepEqual(epicState.state, epicStateUpdate.state) || epicStateUpdate.scope !== undefined && !deepEqual(epicState.scope, epicStateUpdate.scope) || epicStateUpdate.updatersState !== undefined && !deepEqual(epicState.updatersState, epicStateUpdate.updatersState)) {
            atLeastOneChange = true;
          }
        });

        if (atLeastOneChange) {
          devTools.send(msg, nextServiceState);
        }
      }

      serviceState = nextServiceState;

      if (batchedDispatchBatches.length) {
        batchDispatchIsInProgress = true;
        var _atLeastOneChange = false;
        batchedDispatchBatches.forEach(function (_ref24) {
          var msgs = _ref24.msgs,
              targetEpicVcet = _ref24.targetEpicVcet;
          var epicSubStore = epicsSubStoresByVcet[targetEpicVcet];

          epicSubStore._setState({
            epics: _defineProperty({}, targetEpicVcet, serviceState.epics[targetEpicVcet]),
            conditions: {},
            effectManagers: {}
          });

          msgs.forEach(function (a) {
            return epicSubStore.dispatch(a);
          });
          var currentEpicState = serviceState.epics[targetEpicVcet];
          var newEpicStateState = epicSubStore.getState()[targetEpicVcet];

          _dispatch2({
            type: targetEpicVcet,
            payload: newEpicStateState
          });

          if (currentEpicState.state !== newEpicStateState) {
            serviceState.epics = _objectSpread({}, serviceState.epics, _defineProperty({}, targetEpicVcet, _objectSpread({}, currentEpicState, {
              state: newEpicStateState
            })));
            _atLeastOneChange = true;
          }
        });

        if (_atLeastOneChange || updatedEpicsState) {
          onEpicsStateChange(serviceState.epics);
        }

        messagesAccumulatedDuringBatchDispatch.forEach(function (m) {
          return outMsgSubscribers.forEach(function (sub) {
            return sub(m);
          });
        });
        epicsStateChangedCallbackAfterBatchDispatchComplete();
        batchDispatchIsInProgress = false;
        messagesAccumulatedDuringBatchDispatch = [];

        epicsStateChangedCallbackAfterBatchDispatchComplete = function epicsStateChangedCallbackAfterBatchDispatchComplete() {
          return undefined;
        };
      }
    }
  }

  var pluginInitializationComplete = false;
  getObjectKeys(plugins).forEach(function (pluginKey) {
    var plugin = plugins[pluginKey];
    plugin({
      injectUpdaters: function injectUpdaters(injector) {
        return getObjectKeys(epics).forEach(function (epicKey) {
          var epic = epics[epicKey];
          var updatersMapToInject = injector(epic);
          if (!updatersMapToInject) return;
          var updatersKeysToInject = getObjectKeys(updatersMapToInject);

          if (updatersKeysToInject.length) {
            updatersKeysToInject.forEach(function (k) {
              epic.updaters = _objectSpread({}, epic.updaters, _defineProperty({}, "".concat(pluginKey, "/").concat(k), updatersMapToInject[k]));
            });
          }
        });
      },
      injectEpics: function injectEpics(epicsToInject) {
        // eslint-disable-next-line no-param-reassign
        epics = _objectSpread({}, epics, getObjectKeys(epicsToInject).reduce(function (r, k) {
          return _objectSpread({}, r, _defineProperty({}, createPluginStateKey(k), epicsToInject[k]));
        }, {}));
      },
      getEpics: function getEpics() {
        if (!pluginInitializationComplete) {
          throw new Error('getEpics can not be used during plugin initialization because they are not in the final state yet.');
        }

        return epics;
      },
      getEpicsWithPluginConfig: function getEpicsWithPluginConfig() {
        return getObjectKeys(epics).filter(function (key) {
          return epics[key].pluginConfig;
        }).map(function (key) {
          return _objectSpread({
            key: key
          }, epics[key]);
        });
      }
    });
  });
  epics = deepCopy(epics); // eslint-disable-line no-param-reassign

  var epicsSubStoresByVcet = isSubStore ? {} : createEpicsSubStoresByVcet(epics);

  if (!isSubStore) {
    validateUniqVcet(epics);
    validateResetConditions(epics);
    validateEpicConditions(epics);
  }

  var rootConditionsByMsgType = processConditionsSubscriptions(epics);

  if (__DEV__) {
    deepFreeze(epics);
    deepFreeze(effectManagers);
    deepFreeze(plugins);
  }

  var epicKeyByVcet = getObjectKeys(epics).reduce(function (m, epicKey) {
    return _objectSpread({}, m, _defineProperty({}, epics[epicKey].vcet, epicKey));
  }, {});
  var epicsArr = values(epics);
  var epicsMapByVcet = values(epics).reduce(function (a, e) {
    return _objectSpread({}, a, _defineProperty({}, e.vcet, e));
  }, {});
  var executeMsg = createExecuteMsg({
    trace: trace,
    epicsMapByVcet: epicsMapByVcet,
    epicKeyByVcet: epicKeyByVcet,
    warn: warn,
    effectManagers: effectManagers,
    dispatch: _dispatch2,
    rootConditionsByMsgType: rootConditionsByMsgType
  });
  var epicsVcetToStateKeyMap = Object.keys(epics).reduce(function (r, epicStateKey) {
    r[epics[epicStateKey].vcet] = epicStateKey;
    return r;
  }, {});
  var computeOutsideState = createComputeOutsideState({
    epicsVcetToStateKeyMap: epicsVcetToStateKeyMap
  });

  var _computeInitialStates = computeInitialStates({
    epicsArr: epicsArr,
    warn: warn,
    executeMsg: executeMsg,
    trace: trace
  }),
      initialEpicsState = _computeInitialStates.initialEpicsState,
      initialCondtionsValues = _computeInitialStates.initialCondtionsValues;

  var serviceState = {
    conditions: initialCondtionsValues,
    epics: initialEpicsState,
    effectManagers: getEffectManagersInitialState(effectManagers)
  };
  var outsideState = computeOutsideState(serviceState.epics);

  function _getAllPendingEffectsPromises() {
    return Object.keys(serviceState.effectManagers).reduce(function (pendingEffectsPromises, requestEffectType) {
      pendingEffectsPromises.push.apply(pendingEffectsPromises, _toConsumableArray(serviceState.effectManagers[requestEffectType].pendingEffects.map(function (_ref25) {
        var promise = _ref25.promise,
            effect = _ref25.effect;
        return {
          promise: promise,
          requestEffectType: requestEffectType,
          effect: effect
        };
      })));
      return pendingEffectsPromises;
    }, []);
  }

  var stateChangedSubscribers = [];
  var onDispatchSubscribers = [];
  var outMsgSubscribers = [];

  if (debug && devToolsConfig && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect(_objectSpread({}, devToolsConfig, {
      name: 'service'
    }));
    devTools.subscribe(function (message) {
      if (message.type === 'DISPATCH' && message.state) {
        serviceState = JSON.parse(message.state);
        onEpicsStateChange(serviceState.epics);
      }
    });
    devTools.init(serviceState);
  }

  if (!isSubStore && !hotReload) {
    _dispatch2(storeCreatedEvent.create());
  }

  var storeReplacement;
  var initialState = serviceState;

  var doForEachEffectManager = function doForEachEffectManager(fn) {
    var effectManagersByRequestType = createEffectManagersByRequestType(effectManagers);
    Object.keys(effectManagersByRequestType).forEach(function (effectRequestType) {
      var effectManager = effectManagersByRequestType[effectRequestType];
      var _serviceState$effectM = serviceState.effectManagers[effectRequestType],
          state = _serviceState$effectM.state,
          scope = _serviceState$effectM.scope;
      fn({
        effectManager: effectManager,
        state: state,
        scope: scope
      });
    });
  };

  return {
    _getServiceState: function _getServiceState() {
      if (storeReplacement) return storeReplacement._getServiceState();
      return serviceState;
    },
    _getNextStateForMsgWithoutUpdatingStoreState: function _getNextStateForMsgWithoutUpdatingStoreState(msg) {
      if (storeReplacement) {
        return storeReplacement._getNextStateForMsgWithoutUpdatingStoreState(msg);
      }

      var epicsStateUpdate = {};
      var conditionsValuesUpdate = {};
      var effectManagersStateUpdate = {};
      executeMsg({
        msgsChain: [msg],
        conditionsValues: serviceState.conditions,
        prevConditionsValues: {},
        conditionsValuesUpdate: conditionsValuesUpdate,
        epicsState: serviceState.epics,
        epicsStateUpdate: epicsStateUpdate,
        effectManagersState: serviceState.effectManagers,
        effectManagersStateUpdate: effectManagersStateUpdate,
        lastReducerValuesByEpicVcetUpdaterKey: {},
        messagesToSendOutside: [],
        batchedDispatchBatches: [],
        executionLevelTrace: undefined,
        level: 0
      });
      var updatedEpicsTypes = Object.keys(epicsStateUpdate);

      if (updatedEpicsTypes.length !== 0) {
        var updatedEpicsState = mergeEpicsStateWithUpdate(serviceState.epics, epicsStateUpdate);
        computeOutsideState(updatedEpicsState);
      }

      return computeOutsideState(serviceState.epics);
    },
    _setState: function _setState(_serviceState) {
      if (storeReplacement) {
        storeReplacement._setState(_serviceState);
      } else {
        serviceState = _serviceState;
        outsideState = computeOutsideState(serviceState.epics);
      }
    },
    destroyEffects: function destroyEffects() {
      if (storeReplacement) {
        storeReplacement.destroyEffects();
      } else {
        doForEachEffectManager(function (_ref26) {
          var effectManager = _ref26.effectManager,
              state = _ref26.state,
              scope = _ref26.scope;
          effectManager.destroyEffects({
            state: state,
            scope: scope
          });
        });
      }
    },
    recreateEffects: function recreateEffects() {
      if (storeReplacement) {
        storeReplacement.recreateEffects();
      } else {
        doForEachEffectManager(function (_ref27) {
          var effectManager = _ref27.effectManager,
              state = _ref27.state,
              scope = _ref27.scope;
          effectManager.recreateEffects({
            state: state,
            scope: scope
          });
        });
      }
    },
    replaceConfig: function replaceConfig(creaceEpicsStoreConfig) {
      var currentState = storeReplacement ? storeReplacement._getServiceState() : serviceState;
      storeReplacement = createStore(creaceEpicsStoreConfig, true);

      storeReplacement._setState(currentState);

      stateChangedSubscribers.forEach(function (sub) {
        return storeReplacement.subscribe(sub);
      });
      outMsgSubscribers.forEach(function (sub) {
        return storeReplacement.subscribeOutMsg(sub);
      }); // TODO dispose side effects
    },
    resetToInitialState: function resetToInitialState() {
      serviceState = initialState;
    },
    dispatch: function dispatch(a, meta) {
      if (storeReplacement) {
        return storeReplacement.dispatch(a, meta);
      }

      return _dispatch2(a);
    },
    getState: function getState() {
      if (storeReplacement) {
        return storeReplacement.getState();
      }

      return outsideState;
    },
    getAllPendingEffectsPromises: function getAllPendingEffectsPromises() {
      if (storeReplacement) {
        return storeReplacement.getAllPendingEffectsPromises();
      }

      return _getAllPendingEffectsPromises();
    },
    subscribe: function subscribe(subscriber) {
      if (storeReplacement) {
        storeReplacement.subscribe(subscriber);
      }

      stateChangedSubscribers.push(subscriber);
      return function () {
        stateChangedSubscribers = stateChangedSubscribers.filter(function (s) {
          return s !== subscriber;
        });
      };
    },
    subscribeOnDispatch: function subscribeOnDispatch(subscriber) {
      if (storeReplacement) {
        storeReplacement.subscribeOnDispatch(subscriber);
      }

      onDispatchSubscribers.push(subscriber);
      return function () {
        onDispatchSubscribers = onDispatchSubscribers.filter(function (sub) {
          return sub !== subscriber;
        });
      };
    },
    // subscribe to messages that can be send from epics to 3rd party
    subscribeOutMsg: function subscribeOutMsg(sub) {
      if (storeReplacement) {
        storeReplacement.subscribeOutMsg(sub);
      }

      outMsgSubscribers.push(sub);
    },
    warn: warn
  };
}

function makeMsg(msgType) {
  var create = function create(extraFields) {
    return _objectSpread({
      type: msgType
    }, extraFields);
  };

  var condition = createCondition(msgType);
  return {
    create: create,
    condition: condition,
    match: createConditionMatcher(condition),
    type: msgType
  };
}

function makeSimpleMsg(msgType) {
  var create = function create() {
    return {
      type: msgType
    };
  };

  var condition = createCondition(msgType);
  return {
    create: create,
    condition: condition,
    match: createConditionMatcher(condition),
    type: msgType
  };
}

var makeSimpleEvent = makeSimpleMsg;
var makeEvent = makeMsg;
var makeSimpleCommand = makeSimpleMsg;
var makeCommand = makeMsg;
var storeCreatedEvent = makeSimpleEvent('@STORE_CREATED');

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../requestAnimationFrameEM.js":
/*!*************************************!*\
  !*** ../requestAnimationFrameEM.js ***!
  \*************************************/
/*! exports provided: requestAnimationFrameEC, cancelAnimationFrameEC, animationFrame, requestAnimationFrameEM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrameEC", function() { return requestAnimationFrameEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationFrameEC", function() { return cancelAnimationFrameEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationFrame", function() { return animationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrameEM", function() { return requestAnimationFrameEM; });
/* harmony import */ var _epicsFlow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./epicsFlow */ "../epicsFlow.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var animationFrame = Object(_epicsFlow__WEBPACK_IMPORTED_MODULE_0__["makeEvent"])('ANIMATION_FRAME');
var requestType = 'request_animation_frame_effect';

var requestAnimationFrameEC = function requestAnimationFrameEC() {
  return {
    type: requestType,
    cmd: 'REQUEST'
  };
};

var cancelAnimationFrameEC = function cancelAnimationFrameEC() {
  return {
    type: requestType,
    cmd: 'CANCEL'
  };
};

var requestAnimationFrameEM = Object(_epicsFlow__WEBPACK_IMPORTED_MODULE_0__["createEffectManager"])({
  requestType: requestType,
  initialState: {
    requestsByEpicVcet: {}
  },
  initialScope: {
    resolvePromiseByEpicVcet: {}
  },
  onEffectRequest: function onEffectRequest(_ref) {
    var effect = _ref.effect,
        requesterEpicVcet = _ref.requesterEpicVcet,
        state = _ref.state,
        scope = _ref.scope,
        dispatch = _ref.dispatch,
        R = _ref.R;

    if (effect.cmd === 'REQUEST') {
      var rafId;
      var promise = new Promise(function (resolve) {
        var resolvePromise = function resolvePromise() {
          delete scope.resolvePromiseByEpicVcet[requesterEpicVcet];
          resolve();
        };

        rafId = window.requestAnimationFrame(function () {
          dispatch(animationFrame.create({
            dateNow: Date.now()
          }), {
            targetEpicVcet: [requesterEpicVcet]
          });
          resolvePromise();
        });
        scope.resolvePromiseByEpicVcet[requesterEpicVcet] = resolvePromise;
      });
      return R.withEffectPromise(promise).mapState(function () {
        return _objectSpread({}, state, {
          requestsByEpicVcet: _objectSpread({}, state.requestsByEpicVcet, _defineProperty({}, requesterEpicVcet, rafId))
        });
      });
    } else if (effect.cmd === 'CANCEL') {
      window.cancelAnimationFrame(state.requestsByEpicVcet[requesterEpicVcet]);
      scope.resolvePromiseByEpicVcet[requesterEpicVcet]();
      return R.mapState(function () {
        return _objectSpread({}, state, {
          requestsByEpicVcet: _objectSpread({}, state.requestsByEpicVcet, _defineProperty({}, requesterEpicVcet, null))
        });
      });
    }

    return R.doNothing;
  },
  destroyEffects: function destroyEffects() {
    /* TODO */
  },
  recreateEffects: function recreateEffects() {
    /* TODO */
  }
});


/***/ }),

/***/ "./webBrowser.js":
/*!***********************!*\
  !*** ./webBrowser.js ***!
  \***********************/
/*! exports provided: browserStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserStore", function() { return browserStore; });
/* harmony import */ var _epicsFlow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../epicsFlow */ "../epicsFlow.js");
/* harmony import */ var _webBrowserStoreConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webBrowserStoreConfig */ "./webBrowserStoreConfig.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



if (global.UNode) throw new Error('browser store disabled in unreal.js');
var browserStore = Object(_epicsFlow__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_webBrowserStoreConfig__WEBPACK_IMPORTED_MODULE_1__["browserStoreConfig"]);

var sendMsgToUnrealJs = function sendMsgToUnrealJs(msg) {
  window.location = window.location.href.substring(0, window.location.href.indexOf('#') + 1) + encodeURIComponent(JSON.stringify(msg));
};

var browserInitialState = browserStore.getState();
var prevAppState = browserInitialState;
sendMsgToUnrealJs({
  type: 'INITIAL_STATE',
  initialState: browserInitialState
});

function isNotHashMap(o) {
  return _typeof(o) !== 'object' || Array.isArray(o);
}

function getObjectsDiff(o1, o2) {
  if (isNotHashMap(o2) || isNotHashMap(o1)) {
    if (o2 !== o1) {
      return o2;
    }

    return undefined;
  }

  var result = {};
  Object.keys(o2).forEach(function (o2k) {
    var diff = getObjectsDiff(o1, o2);

    if (diff !== undefined) {
      result[o2k] = 1;
    }
  });
}

browserStore.subscribe(function (appState) {
  var diff = diffJson(prevAppState, appState);
  prevAppState = appState;
  sendMsgToUnrealJs({
    type: 'STATE_UPDATED',
    diff: diff
  });
});
// eslint-disable-next-line import/group-exports

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./webBrowserStoreConfig.js":
/*!**********************************!*\
  !*** ./webBrowserStoreConfig.js ***!
  \**********************************/
/*! exports provided: browserStoreConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserStoreConfig", function() { return browserStoreConfig; });
/* harmony import */ var _epicsFlow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../epicsFlow */ "../epicsFlow.js");
/* harmony import */ var _requestAnimationFrameEM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../requestAnimationFrameEM */ "../requestAnimationFrameEM.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var coreEpic = Object(_epicsFlow__WEBPACK_IMPORTED_MODULE_0__["createEpic"])({
  vcet: 'CORE_VCET',
  initialState: {
    count: 2
  },
  updaters: {
    storeCreated: Object(_epicsFlow__WEBPACK_IMPORTED_MODULE_0__["createUpdater"])({
      given: {},
      when: {
        _: _epicsFlow__WEBPACK_IMPORTED_MODULE_0__["storeCreatedEvent"].condition
      },
      then: function then(_ref) {
        var R = _ref.R;
        return R.sideEffect(Object(_requestAnimationFrameEM__WEBPACK_IMPORTED_MODULE_1__["requestAnimationFrameEC"])());
      }
    }),
    incCounter: Object(_epicsFlow__WEBPACK_IMPORTED_MODULE_0__["createUpdater"])({
      given: {},
      when: {
        _: _requestAnimationFrameEM__WEBPACK_IMPORTED_MODULE_1__["animationFrame"].condition
      },
      then: function then(_ref2) {
        var R = _ref2.R;
        return R.mapState(function (state) {
          return _objectSpread({}, state, {
            count: state.count + 1
          });
        }).sideEffect(Object(_requestAnimationFrameEM__WEBPACK_IMPORTED_MODULE_1__["requestAnimationFrameEC"])());
      }
    })
  }
});
var browserStoreConfig = {
  epics: {
    core: coreEpic
  },
  effectManagers: {
    requestAnimationFrameEM: _requestAnimationFrameEM__WEBPACK_IMPORTED_MODULE_1__["requestAnimationFrameEM"]
  }
};


/***/ })

/******/ });