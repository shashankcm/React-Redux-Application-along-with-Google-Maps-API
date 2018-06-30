/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "bundle/" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([364,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//import constants from '../constants'
//import { TurboClient } from '../utils'


exports.default = {

	addItem: function addItem(item) {
		console.log('Item in Action', item);
		return {
			type: 'ITEM_ADDED',
			data: item
		};
	}

	// fetchUsers: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.getRequest('user', params, constants.USERS_RECEIVED))
	// 	}
	// },

	// addUser: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.postRequest('user', params, constants.USER_CREATED))
	// 	}
	// },

	// // Unlike addUser, register() also maintains a session for login state. After calling 
	// // TurboClient.createUser(), the new user is logged in as well:
	// register: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.createUser(params, constants.USER_CREATED))
	// 	}
	// },

	// loginUser: (credentials) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.login(credentials, constants.CURRENT_USER_RECEIVED))
	// 	}
	// },

	// currentUser: () => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED))
	// 	}
	// }

};

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _presentation = __webpack_require__(80);

var _reactRedux = __webpack_require__(55);

var _redux = __webpack_require__(53);

var _actions = __webpack_require__(144);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Results = function (_React$Component) {
    _inherits(Results, _React$Component);

    function Results(props) {
        _classCallCheck(this, Results);

        var _this = _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this, props));

        _this.state = {
            item: {
                //name: '',
                //price: ''
                position: { lat: 40.7034017, lng: -73.9896719 }
            }
        };
        _this.updateItem = _this.updateItem.bind(_this);
        _this.addItem = _this.addItem.bind(_this);
        return _this;
    }

    _createClass(Results, [{
        key: 'updateItem',
        value: function updateItem(e) {
            e.preventDefault();
            var updated = Object.assign({}, this.state.item);
            updated[e.target.name] = e.target.value;
            this.setState({
                item: updated
            });
        }
    }, {
        key: 'addItem',
        value: function addItem() {
            console.log('ADD ITEM', JSON.stringify(this.state.item));
            var newItem = Object.assign({}, this.state.item);
            //{id: 1, key: '1',  price: 100,  defaultAnimation: 2,  label: 'Shashank Gupta',  position:{lat: 40.7224017, lng: -73.9896719}},
            newItem['id'] = this.props.item.all.length;
            newItem['key'] = this.props.item.all.length.toString();
            newItem['defaultAnimation'] = 2;

            this.props.addItem(newItem);
        }
    }, {
        key: 'render',
        value: function render() {
            var items = this.props.item.all || [];
            //console.log(this.state);
            return _react2.default.createElement(
                'div',
                { className: 'container-fluid' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    items.map(function (item, i) {
                        return _react2.default.createElement(_presentation.Item, { key: item.id, item: item });
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-4' },
                        _react2.default.createElement(
                            'div',
                            { className: 'card' },
                            _react2.default.createElement(
                                'div',
                                { className: 'content' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'footer' },
                                    _react2.default.createElement(
                                        'h3',
                                        null,
                                        'Add Item'
                                    ),
                                    _react2.default.createElement('input', { onChange: this.updateItem, type: 'text', name: 'label', style: localStyle.input, className: 'form-control', placeholder: 'Name' }),
                                    _react2.default.createElement('input', { onChange: this.updateItem, type: 'text', name: 'price', style: localStyle.input, className: 'form-control', placeholder: 'Price' }),
                                    _react2.default.createElement('hr', null),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'stats' },
                                        _react2.default.createElement(
                                            'button',
                                            { onClick: this.addItem, className: 'btn btn-success' },
                                            ' Add Item'
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Results;
}(_react2.default.Component);

var localStyle = {
    input: {
        border: '1px solid #ddd',
        marginBottom: 12
    }
};

var stateToProps = function stateToProps(state) {
    return {
        item: state.item
    };
};

var dispatchToProps = function dispatchToProps(dispatch) {
    // return bindActionCreators({
    //     //addItem: (item) => dispatch(actions.addItem(item))
    //     addItem: actions.addItem
    // }, dispatch)
    return {
        addItem: function addItem(item) {
            return dispatch(_actions2.default.addItem(item));
        }
    };
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Results);

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _presentation = __webpack_require__(80);

var _reactRedux = __webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
    _inherits(Search, _React$Component);

    function Search(props) {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

        _this.state = {
            map: null
        };
        return _this;
    }

    _createClass(Search, [{
        key: 'centerChanged',
        value: function centerChanged(center) {
            console.log('Map Moved:', JSON.stringify(center));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var items = this.props.item.all || [];
            return _react2.default.createElement(
                'div',
                { className: 'sidebar-wrapper', style: { height: 960 } },
                _react2.default.createElement(_presentation.Map, { onMapReady: function onMapReady(map) {
                        if (_this2.state.map != null) return;
                        console.log('OnMapReady: ' + JSON.stringify(map.getCenter()));
                        _this2.setState({
                            map: map
                        });
                    },
                    locationChanged: this.centerChanged.bind(this),
                    markers: items,
                    zoom: 14,
                    center: { lat: 40.7224017, lng: -73.9896719 },
                    containerElement: _react2.default.createElement('div', { style: { height: 100 + '%' } }),
                    mapElement: _react2.default.createElement('div', { style: { height: 100 + '%' } })
                })
            );
        }
    }]);

    return Search;
}(_react2.default.Component);

var stateToProps = function stateToProps(state) {
    return {
        item: state.item
    };
};
exports.default = (0, _reactRedux.connect)(stateToProps)(Search);

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Results = exports.Search = undefined;

var _Search = __webpack_require__(146);

var _Search2 = _interopRequireDefault(_Search);

var _Results = __webpack_require__(145);

var _Results2 = _interopRequireDefault(_Results);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Search = _Search2.default;
exports.Results = _Results2.default;

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGoogleMaps = __webpack_require__(342);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // don't forget google maps import:
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC44mPpaMNvENXryYjHBHzjST1UMnYlARk"></script>

var Map = function (_Component) {
	_inherits(Map, _Component);

	function Map() {
		_classCallCheck(this, Map);

		var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this));

		_this.state = {
			map: null
		};
		return _this;
	}

	_createClass(Map, [{
		key: 'mapMoved',
		value: function mapMoved() {
			// console.log('mapMoved: '+JSON.stringify(this.state.map.getCenter()))
			if (this.props.locationChanged != null) this.props.locationChanged(this.state.map.getCenter());
		}
	}, {
		key: 'zoomChanged',
		value: function zoomChanged() {
			// console.log('zoomChanged: '+this.state.map.getZoom())

		}
	}, {
		key: 'mapLoaded',
		value: function mapLoaded(map) {
			if (this.state.map != null) return;

			this.props.onMapReady(map);
			this.setState({
				map: map
			});
		}
	}, {
		key: 'handleMarkerClick',
		value: function handleMarkerClick(marker) {
			if (this.props.markerClicked != null) this.props.markerClicked(marker, this.state.map);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var markers = this.props.markers || [];

			return _react2.default.createElement(
				_reactGoogleMaps.GoogleMap,
				{
					ref: this.mapLoaded.bind(this),
					onDragEnd: this.mapMoved.bind(this),
					onZoomChanged: this.zoomChanged.bind(this),
					defaultZoom: this.props.zoom,
					defaultCenter: this.props.center },
				markers.map(function (marker, index) {
					return _react2.default.createElement(_reactGoogleMaps.Marker, _extends({
						key: index,
						clickable: true,
						icon: marker.icon,
						label: marker.label,
						title: marker.key,
						onClick: _this2.handleMarkerClick.bind(_this2, marker)
					}, marker));
				})
			);
		}
	}]);

	return Map;
}(_react.Component);

exports.default = (0, _reactGoogleMaps.withGoogleMap)(Map);

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
        //    {id: 1, key: '1',  defaultAnimation: 2,  label: 'Shashank Gupta',  position:{lat: 40.7224017, lng: -73.9896719}},
        var item = props.item;
        return _react2.default.createElement(
                "div",
                { className: "col-lg-3 col-sm-6" },
                _react2.default.createElement(
                        "div",
                        { className: "card" },
                        _react2.default.createElement(
                                "div",
                                { className: "content" },
                                _react2.default.createElement(
                                        "div",
                                        { className: "row" },
                                        _react2.default.createElement(
                                                "div",
                                                { className: "col-xs-5" },
                                                _react2.default.createElement(
                                                        "div",
                                                        { className: "icon-big icon-warning text-center" },
                                                        _react2.default.createElement("i", { className: "ti-server" })
                                                )
                                        ),
                                        _react2.default.createElement(
                                                "div",
                                                { className: "col-xs-7" },
                                                _react2.default.createElement(
                                                        "div",
                                                        { className: "numbers" },
                                                        _react2.default.createElement(
                                                                "p",
                                                                null,
                                                                item.label
                                                        ),
                                                        "$",
                                                        item.price
                                                )
                                        )
                                ),
                                _react2.default.createElement(
                                        "div",
                                        { className: "footer" },
                                        _react2.default.createElement("hr", null),
                                        _react2.default.createElement(
                                                "div",
                                                { className: "stats" },
                                                _react2.default.createElement("i", { className: "ti-reload" }),
                                                " Updated now"
                                        )
                                )
                        )
                )
        );
};

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
        return _react2.default.createElement(
                "footer",
                { className: "footer" },
                _react2.default.createElement(
                        "div",
                        { className: "container-fluid" },
                        _react2.default.createElement(
                                "nav",
                                { className: "pull-left" },
                                _react2.default.createElement(
                                        "ul",
                                        null,
                                        _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                        "a",
                                                        { href: "http://www.creative-tim.com" },
                                                        "Creative Tim"
                                                )
                                        ),
                                        _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                        "a",
                                                        { href: "http://blog.creative-tim.com" },
                                                        "Blog"
                                                )
                                        ),
                                        _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                        "a",
                                                        { href: "http://www.creative-tim.com/license" },
                                                        "Licenses"
                                                )
                                        )
                                )
                        ),
                        _react2.default.createElement(
                                "div",
                                { className: "copyright pull-right" },
                                "\xA9 2018, made with ",
                                _react2.default.createElement("i", { className: "fa fa-heart heart" }),
                                " by ",
                                _react2.default.createElement(
                                        "a",
                                        { href: "http://www.creative-tim.com" },
                                        "Creative Tim"
                                )
                        )
                )
        );
};

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
        return _react2.default.createElement(
                "nav",
                { className: "navbar navbar-default" },
                _react2.default.createElement(
                        "div",
                        { className: "container-fluid" },
                        _react2.default.createElement(
                                "div",
                                { className: "navbar-header" },
                                _react2.default.createElement(
                                        "button",
                                        { type: "button", className: "navbar-toggle" },
                                        _react2.default.createElement(
                                                "span",
                                                { className: "sr-only" },
                                                "Toggle navigation"
                                        ),
                                        _react2.default.createElement("span", { className: "icon-bar bar1" }),
                                        _react2.default.createElement("span", { className: "icon-bar bar2" }),
                                        _react2.default.createElement("span", { className: "icon-bar bar3" })
                                ),
                                _react2.default.createElement(
                                        "a",
                                        { className: "navbar-brand", href: "#" },
                                        "Welcome to ONLINE MARKET"
                                )
                        ),
                        _react2.default.createElement(
                                "div",
                                { className: "collapse navbar-collapse" },
                                _react2.default.createElement(
                                        "ul",
                                        { className: "nav navbar-nav navbar-right" },
                                        _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                        "a",
                                                        { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                                                        _react2.default.createElement("i", { className: "ti-panel" }),
                                                        _react2.default.createElement(
                                                                "p",
                                                                null,
                                                                "Stats"
                                                        )
                                                )
                                        ),
                                        _react2.default.createElement(
                                                "li",
                                                { className: "dropdown" },
                                                _react2.default.createElement(
                                                        "a",
                                                        { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                                                        _react2.default.createElement("i", { className: "ti-bell" }),
                                                        _react2.default.createElement(
                                                                "p",
                                                                { className: "notification" },
                                                                "5"
                                                        ),
                                                        _react2.default.createElement(
                                                                "p",
                                                                null,
                                                                "Notifications"
                                                        ),
                                                        _react2.default.createElement("b", { className: "caret" })
                                                ),
                                                _react2.default.createElement(
                                                        "ul",
                                                        { className: "dropdown-menu" },
                                                        _react2.default.createElement(
                                                                "li",
                                                                null,
                                                                _react2.default.createElement(
                                                                        "a",
                                                                        { href: "#" },
                                                                        "Notification 1"
                                                                )
                                                        ),
                                                        _react2.default.createElement(
                                                                "li",
                                                                null,
                                                                _react2.default.createElement(
                                                                        "a",
                                                                        { href: "#" },
                                                                        "Notification 2"
                                                                )
                                                        ),
                                                        _react2.default.createElement(
                                                                "li",
                                                                null,
                                                                _react2.default.createElement(
                                                                        "a",
                                                                        { href: "#" },
                                                                        "Notification 3"
                                                                )
                                                        ),
                                                        _react2.default.createElement(
                                                                "li",
                                                                null,
                                                                _react2.default.createElement(
                                                                        "a",
                                                                        { href: "#" },
                                                                        "Notification 4"
                                                                )
                                                        ),
                                                        _react2.default.createElement(
                                                                "li",
                                                                null,
                                                                _react2.default.createElement(
                                                                        "a",
                                                                        { href: "#" },
                                                                        "Another notification"
                                                                )
                                                        )
                                                )
                                        ),
                                        _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                        "a",
                                                        { href: "#" },
                                                        _react2.default.createElement("i", { className: "ti-settings" }),
                                                        _react2.default.createElement(
                                                                "p",
                                                                null,
                                                                "Settings"
                                                        )
                                                )
                                        )
                                )
                        )
                )
        );
};

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _presentation = __webpack_require__(80);

var _containers = __webpack_require__(147);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'wrapper' },
                _react2.default.createElement(
                    'div',
                    { className: 'sidebar', 'data-background-color': 'white', 'data-active-color': 'danger' },
                    _react2.default.createElement(_containers.Search, null)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'main-panel' },
                    _react2.default.createElement(_presentation.Nav, null),
                    _react2.default.createElement(
                        'div',
                        { className: 'content' },
                        _react2.default.createElement(_containers.Results, null)
                    ),
                    _react2.default.createElement(_presentation.Footter, null)
                )
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var initialState = {
    all: [{ id: 1, key: '1', price: 100, defaultAnimation: 2, label: 'Shashank Gupta', position: { lat: 40.7224017, lng: -73.9896719 } }, { id: 2, key: '2', price: 200, defaultAnimation: 2, label: 'Robert Samonte', position: { lat: 40.7124017, lng: -73.9896719 } }, { id: 3, key: '3', price: 300, defaultAnimation: 2, label: 'Amanda Willson', position: { lat: 40.7334017, lng: -73.9896719 } }]
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var updated = Object.assign({}, state);
    switch (action.type) {
        case 'ITEM_ADDED':
            console.log('ITEM ADDED:', JSON.stringify(action.data));
            var all = Object.assign([], updated.all);
            all.push(action.data);
            updated['all'] = all;

            return updated;

        default:
            return updated;
    }
};

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample constants for typical actions.
	You may want to extends these to the other data
	types for your project (e.g. BLOG_POST_CREATED, BLOG_POST_UPDATED, etc)
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

exports.default = {

	USERS_RECEIVED: 'USERS_RECEIVED',
	USER_CREATED: 'USER_CREATED',
	USER_LOGGED_IN: 'USER_LOGGED_IN',
	CURRENT_USER_RECEIVED: 'CURRENT_USER_RECEIVED'

};

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(351);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is a sample reducer or user management. If you remove 
	and use your own reducers, remember to update the store 
	file (../stores/index.js) with your reducers.
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var initialState = {
	all: null,
	currentUser: null // signed in user
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	var newState = Object.assign({}, state);

	switch (action.type) {

		case _constants2.default.CURRENT_USER_RECEIVED:
			newState['currentUser'] = action.data;
			return newState;

		case _constants2.default.USERS_RECEIVED:
			newState['all'] = action.data;
			return newState;

		case _constants2.default.USER_CREATED:
			var array = newState.all ? Object.assign([], newState.all) : [];
			array.unshift(action.data);
			newState['all'] = array;
			return newState;

		default:
			return state;
	}
};

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.userReducer = exports.itemReducer = undefined;

var _userReducer = __webpack_require__(352);

var _userReducer2 = _interopRequireDefault(_userReducer);

var _itemReducer = __webpack_require__(350);

var _itemReducer2 = _interopRequireDefault(_itemReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Export your reducers here
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

exports.itemReducer = _itemReducer2.default;
exports.userReducer = _userReducer2.default;

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(53);

var _reduxThunk = __webpack_require__(354);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(353);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store;
exports.default = {

	configure: function configure(initialState) {
		// initialState can be null

		var reducers = (0, _redux.combineReducers)({ // insert reducers here
			user: _reducers.userReducer,
			item: _reducers.itemReducer
		});

		if (initialState) {
			store = (0, _redux.createStore)(reducers, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));

			return store;
		}

		store = (0, _redux.createStore)(reducers, (0, _redux.applyMiddleware)(_reduxThunk2.default));

		return store;
	},

	currentStore: function currentStore() {
		return store;
	}
};

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(82);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _stores = __webpack_require__(356);

var _stores2 = _interopRequireDefault(_stores);

var _reactRedux = __webpack_require__(55);

var _Home = __webpack_require__(347);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _react2.default.createElement(
	_reactRedux.Provider,
	{ store: _stores2.default.configure(null) },
	_react2.default.createElement(_Home2.default, null)
);

_reactDom2.default.render(app, document.getElementById('root'));

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Map = exports.Item = exports.Footter = exports.Nav = undefined;

var _Nav = __webpack_require__(346);

var _Nav2 = _interopRequireDefault(_Nav);

var _Footter = __webpack_require__(345);

var _Footter2 = _interopRequireDefault(_Footter);

var _Item = __webpack_require__(344);

var _Item2 = _interopRequireDefault(_Item);

var _Map = __webpack_require__(343);

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Nav = _Nav2.default;
exports.Footter = _Footter2.default;
exports.Item = _Item2.default;
exports.Map = _Map2.default;

/***/ })

/******/ });
//# sourceMappingURL=app.map