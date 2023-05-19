/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@shopify/theme-cart/request.js":
/*!*****************************************************!*\
  !*** ./node_modules/@shopify/theme-cart/request.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cart: () => (/* binding */ cart),\n/* harmony export */   cartAdd: () => (/* binding */ cartAdd),\n/* harmony export */   cartAddFromForm: () => (/* binding */ cartAddFromForm),\n/* harmony export */   cartChange: () => (/* binding */ cartChange),\n/* harmony export */   cartClear: () => (/* binding */ cartClear),\n/* harmony export */   cartShippingRates: () => (/* binding */ cartShippingRates),\n/* harmony export */   cartUpdate: () => (/* binding */ cartUpdate)\n/* harmony export */ });\nfunction getDefaultRequestConfig() {\n  return JSON.parse(\n    JSON.stringify({\n      credentials: 'same-origin',\n      headers: {\n        'X-Requested-With': 'XMLHttpRequest',\n        'Content-Type': 'application/json;'\n      }\n    })\n  );\n}\n\nfunction fetchJSON(url, config) {\n  return fetch(url, config).then(function(response) {\n    if (!response.ok) {\n      throw response;\n    }\n    return response.json();\n  });\n}\n\nfunction cart() {\n  return fetchJSON('/cart.js', getDefaultRequestConfig());\n}\n\nfunction cartAdd(id, quantity, properties) {\n  var config = getDefaultRequestConfig();\n\n  config.method = 'POST';\n  config.body = JSON.stringify({\n    id: id,\n    quantity: quantity,\n    properties: properties\n  });\n\n  return fetchJSON('/cart/add.js', config);\n}\n\nfunction cartAddFromForm(formData) {\n  var config = getDefaultRequestConfig();\n  delete config.headers['Content-Type'];\n\n  config.method = 'POST';\n  config.body = formData;\n\n  return fetchJSON('/cart/add.js', config);\n}\n\nfunction cartChange(line, options) {\n  var config = getDefaultRequestConfig();\n\n  options = options || {};\n\n  config.method = 'POST';\n  config.body = JSON.stringify({\n    line: line,\n    quantity: options.quantity,\n    properties: options.properties\n  });\n\n  return fetchJSON('/cart/change.js', config);\n}\n\nfunction cartClear() {\n  var config = getDefaultRequestConfig();\n  config.method = 'POST';\n\n  return fetchJSON('/cart/clear.js', config);\n}\n\nfunction cartUpdate(body) {\n  var config = getDefaultRequestConfig();\n\n  config.method = 'POST';\n  config.body = JSON.stringify(body);\n\n  return fetchJSON('/cart/update.js', config);\n}\n\nfunction cartShippingRates() {\n  return fetchJSON('/cart/shipping_rates.json', getDefaultRequestConfig());\n}\n\n\n//# sourceURL=webpack://block-shopify-framework/./node_modules/@shopify/theme-cart/request.js?");

/***/ }),

/***/ "./node_modules/@shopify/theme-cart/theme-cart.js":
/*!********************************************************!*\
  !*** ./node_modules/@shopify/theme-cart/theme-cart.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addItem: () => (/* binding */ addItem),\n/* harmony export */   addItemFromForm: () => (/* binding */ addItemFromForm),\n/* harmony export */   clearAttributes: () => (/* binding */ clearAttributes),\n/* harmony export */   clearItems: () => (/* binding */ clearItems),\n/* harmony export */   clearNote: () => (/* binding */ clearNote),\n/* harmony export */   getAttributes: () => (/* binding */ getAttributes),\n/* harmony export */   getItem: () => (/* binding */ getItem),\n/* harmony export */   getItemIndex: () => (/* binding */ getItemIndex),\n/* harmony export */   getNote: () => (/* binding */ getNote),\n/* harmony export */   getShippingRates: () => (/* binding */ getShippingRates),\n/* harmony export */   getState: () => (/* binding */ getState),\n/* harmony export */   removeItem: () => (/* binding */ removeItem),\n/* harmony export */   updateAttributes: () => (/* binding */ updateAttributes),\n/* harmony export */   updateItem: () => (/* binding */ updateItem),\n/* harmony export */   updateNote: () => (/* binding */ updateNote)\n/* harmony export */ });\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ \"./node_modules/@shopify/theme-cart/request.js\");\n/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validate */ \"./node_modules/@shopify/theme-cart/validate.js\");\n/**\n * Cart Template Script\n * ------------------------------------------------------------------------------\n * A file that contains scripts highly couple code to the Cart template.\n *\n * @namespace cart\n */\n\n\n\n\n/**\n * Returns the state object of the cart\n * @returns {Promise} Resolves with the state object of the cart (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-cart)\n */\nfunction getState() {\n  return _request__WEBPACK_IMPORTED_MODULE_0__.cart();\n}\n\n/**\n * Returns the index of the cart line item\n * @param {string} key The unique key of the line item\n * @returns {Promise} Resolves with the index number of the line item\n */\nfunction getItemIndex(key) {\n  _validate__WEBPACK_IMPORTED_MODULE_1__.key(key);\n\n  return _request__WEBPACK_IMPORTED_MODULE_0__.cart().then(function(state) {\n    var index = -1;\n\n    state.items.forEach(function(item, i) {\n      index = item.key === key ? i + 1 : index;\n    });\n\n    if (index === -1) {\n      return Promise.reject(\n        new Error('Theme Cart: Unable to match line item with provided key')\n      );\n    }\n\n    return index;\n  });\n}\n\n/**\n * Fetches the line item object\n * @param {string} key The unique key of the line item\n * @returns {Promise} Resolves with the line item object (See response of cart/add.js https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#add-to-cart)\n */\nfunction getItem(key) {\n  _validate__WEBPACK_IMPORTED_MODULE_1__.key(key);\n\n  return _request__WEBPACK_IMPORTED_MODULE_0__.cart().then(function(state) {\n    var lineItem = null;\n\n    state.items.forEach(function(item) {\n      lineItem = item.key === key ? item : lineItem;\n    });\n\n    if (lineItem === null) {\n      return Promise.reject(\n        new Error('Theme Cart: Unable to match line item with provided key')\n      );\n    }\n\n    return lineItem;\n  });\n}\n\n/**\n * Add a new line item to the cart\n * @param {number} id The variant's unique ID\n * @param {object} options Optional values to pass to /cart/add.js\n * @param {number} options.quantity The quantity of items to be added to the cart\n * @param {object} options.properties Line item property key/values (https://help.shopify.com/en/themes/liquid/objects/line_item#line_item-properties)\n * @returns {Promise} Resolves with the line item object (See response of cart/add.js https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#add-to-cart)\n */\nfunction addItem(id, options) {\n  options = options || {};\n\n  _validate__WEBPACK_IMPORTED_MODULE_1__.id(id);\n\n  return _request__WEBPACK_IMPORTED_MODULE_0__.cartAdd(id, options.quantity, options.properties);\n}\n\n/**\n * Add a new line item to the cart from a product form\n * @param {object} form DOM element which is equal to the <form> node\n * @returns {Promise} Resolves with the line item object (See response of cart/add.js https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#add-to-cart)\n */\nfunction addItemFromForm(form) {\n  _validate__WEBPACK_IMPORTED_MODULE_1__.form(form);\n\n  var formData = new FormData(form);\n  _validate__WEBPACK_IMPORTED_MODULE_1__.id(parseInt(formData.get('id'), 10));\n\n  return _request__WEBPACK_IMPORTED_MODULE_0__.cartAddFromForm(formData);\n}\n\n/**\n * Changes the quantity and/or properties of an existing line item.\n * @param {string} key The unique key of the line item (https://help.shopify.com/en/themes/liquid/objects/line_item#line_item-key)\n * @param {object} options Optional values to pass to /cart/add.js\n * @param {number} options.quantity The quantity of items to be added to the cart\n * @param {object} options.properties Line item property key/values (https://help.shopify.com/en/themes/liquid/objects/line_item#line_item-properties)\n * @returns {Promise} Resolves with the state object of the cart (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-cart)\n */\nfunction updateItem(key, options) {\n  _validate__WEBPACK_IMPORTED_MODULE_1__.key(key);\n  _validate__WEBPACK_IMPORTED_MODULE_1__.options(options);\n\n  return getItemIndex(key).then(function(line) {\n    return _request__WEBPACK_IMPORTED_MODULE_0__.cartChange(line, options);\n  });\n}\n\n/**\n * Removes a line item from the cart\n * @param {string} key The unique key of the line item (https://help.shopify.com/en/themes/liquid/objects/line_item#line_item-key)\n * @returns {Promise} Resolves with the state object of the cart (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-cart)\n */\nfunction removeItem(key) {\n  _validate__WEBPACK_IMPORTED_MODULE_1__.key(key);\n\n  return getItemIndex(key).then(function(line) {\n    return _request__WEBPACK_IMPORTED_MODULE_0__.cartChange(line, { quantity: 0 });\n  });\n}\n\n/**\n * Sets all quantities of all line items in the cart to zero. This does not remove cart attributes nor the cart note.\n * @returns {Promise} Resolves with the state object of the cart (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-cart)\n */\nfunction clearItems() {\n  return _request__WEBPACK_IMPORTED_MODULE_0__.cartClear();\n}\n\n/**\n * Gets all cart attributes\n * @returns {Promise} Resolves with the cart attributes object\n */\nfunction getAttributes() {\n  return _request__WEBPACK_IMPORTED_MODULE_0__.cart().then(function(state) {\n    return state.attributes;\n  });\n}\n\n/**\n * Sets all cart attributes\n * @returns {Promise} Resolves with the cart state object\n */\nfunction updateAttributes(attributes) {\n  return _request__WEBPACK_IMPORTED_MODULE_0__.cartUpdate({ attributes: attributes });\n}\n\n/**\n * Clears all cart attributes\n * @returns {Promise} Resolves with the cart state object\n */\nfunction clearAttributes() {\n  return getAttributes().then(function(attributes) {\n    for (var key in attributes) {\n      attributes[key] = '';\n    }\n    return updateAttributes(attributes);\n  });\n}\n\n/**\n * Gets cart note\n * @returns {Promise} Resolves with the cart note string\n */\nfunction getNote() {\n  return _request__WEBPACK_IMPORTED_MODULE_0__.cart().then(function(state) {\n    return state.note;\n  });\n}\n\n/**\n * Sets cart note\n * @returns {Promise} Resolves with the cart state object\n */\nfunction updateNote(note) {\n  return _request__WEBPACK_IMPORTED_MODULE_0__.cartUpdate({ note: note });\n}\n\n/**\n * Clears cart note\n * @returns {Promise} Resolves with the cart state object\n */\nfunction clearNote() {\n  return _request__WEBPACK_IMPORTED_MODULE_0__.cartUpdate({ note: '' });\n}\n\n/**\n * Get estimated shipping rates.\n * @returns {Promise} Resolves with response of /cart/shipping_rates.json (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-shipping-rates)\n */\nfunction getShippingRates() {\n  return _request__WEBPACK_IMPORTED_MODULE_0__.cartShippingRates();\n}\n\n\n//# sourceURL=webpack://block-shopify-framework/./node_modules/@shopify/theme-cart/theme-cart.js?");

/***/ }),

/***/ "./node_modules/@shopify/theme-cart/validate.js":
/*!******************************************************!*\
  !*** ./node_modules/@shopify/theme-cart/validate.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   form: () => (/* binding */ form),\n/* harmony export */   id: () => (/* binding */ id),\n/* harmony export */   key: () => (/* binding */ key),\n/* harmony export */   options: () => (/* binding */ options),\n/* harmony export */   properties: () => (/* binding */ properties),\n/* harmony export */   quantity: () => (/* binding */ quantity)\n/* harmony export */ });\nfunction key(key) {\n  if (typeof key !== 'string' || key.split(':').length !== 2) {\n    throw new TypeError(\n      'Theme Cart: Provided key value is not a string with the format xxx:xxx'\n    );\n  }\n}\n\nfunction quantity(quantity) {\n  if (typeof quantity !== 'number' || isNaN(quantity)) {\n    throw new TypeError(\n      'Theme Cart: An object which specifies a quantity or properties value is required'\n    );\n  }\n}\n\nfunction id(id) {\n  if (typeof id !== 'number' || isNaN(id)) {\n    throw new TypeError('Theme Cart: Variant ID must be a number');\n  }\n}\n\nfunction properties(properties) {\n  if (typeof properties !== 'object') {\n    throw new TypeError('Theme Cart: Properties must be an object');\n  }\n}\n\nfunction form(form) {\n  if (!(form instanceof HTMLFormElement)) {\n    throw new TypeError('Theme Cart: Form must be an instance of HTMLFormElement');\n  }\n}\n\nfunction options(options) {\n  if (typeof options !== 'object') {\n    throw new TypeError('Theme Cart: Options must be an object');\n  }\n\n  if (\n    typeof options.quantity === 'undefined' &&\n    typeof options.properties === 'undefined'\n  ) {\n    throw new Error(\n      'Theme Cart: You muse define a value for quantity or properties'\n    );\n  }\n\n  if (typeof options.quantity !== 'undefined') {\n    quantity(options.quantity);\n  }\n\n  if (typeof options.properties !== 'undefined') {\n    properties(options.properties);\n  }\n}\n\n\n//# sourceURL=webpack://block-shopify-framework/./node_modules/@shopify/theme-cart/validate.js?");

/***/ }),

/***/ "./node_modules/@shopify/theme-currency/currency.js":
/*!**********************************************************!*\
  !*** ./node_modules/@shopify/theme-currency/currency.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatMoney: () => (/* binding */ formatMoney)\n/* harmony export */ });\n/**\n * Currency Helpers\n * -----------------------------------------------------------------------------\n * A collection of useful functions that help with currency formatting\n *\n * Current contents\n * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.\n *\n */\n\nconst moneyFormat = '${{amount}}';\n\n/**\n * Format money values based on your shop currency settings\n * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents\n * or 3.00 dollars\n * @param  {String} format - shop money_format setting\n * @return {String} value - formatted value\n */\nfunction formatMoney(cents, format) {\n  if (typeof cents === 'string') {\n    cents = cents.replace('.', '');\n  }\n  let value = '';\n  const placeholderRegex = /\\{\\{\\s*(\\w+)\\s*\\}\\}/;\n  const formatString = format || moneyFormat;\n\n  function formatWithDelimiters(\n    number,\n    precision = 2,\n    thousands = ',',\n    decimal = '.'\n  ) {\n    if (isNaN(number) || number == null) {\n      return 0;\n    }\n\n    number = (number / 100.0).toFixed(precision);\n\n    const parts = number.split('.');\n    const dollarsAmount = parts[0].replace(\n      /(\\d)(?=(\\d\\d\\d)+(?!\\d))/g,\n      `$1${thousands}`\n    );\n    const centsAmount = parts[1] ? decimal + parts[1] : '';\n\n    return dollarsAmount + centsAmount;\n  }\n\n  switch (formatString.match(placeholderRegex)[1]) {\n    case 'amount':\n      value = formatWithDelimiters(cents, 2);\n      break;\n    case 'amount_no_decimals':\n      value = formatWithDelimiters(cents, 0);\n      break;\n    case 'amount_with_comma_separator':\n      value = formatWithDelimiters(cents, 2, '.', ',');\n      break;\n    case 'amount_no_decimals_with_comma_separator':\n      value = formatWithDelimiters(cents, 0, '.', ',');\n      break;\n  }\n\n  return formatString.replace(placeholderRegex, value);\n}\n\n\n//# sourceURL=webpack://block-shopify-framework/./node_modules/@shopify/theme-currency/currency.js?");

/***/ }),

/***/ "./scripts/components/cart.js":
/*!************************************!*\
  !*** ./scripts/components/cart.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shopify_theme_currency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopify/theme-currency */ \"./node_modules/@shopify/theme-currency/currency.js\");\n/* harmony import */ var _shopify_theme_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/theme-cart */ \"./node_modules/@shopify/theme-cart/theme-cart.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar CartRemoveButton = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(CartRemoveButton, _HTMLElement);\n  var _super = _createSuper(CartRemoveButton);\n  function CartRemoveButton() {\n    var _this;\n    _classCallCheck(this, CartRemoveButton);\n    _this = _super.call(this);\n    _this.addEventListener('click', function (event) {\n      event.preventDefault();\n      _this.closest('cart-items').removeItem(event.currentTarget.dataset.itemKey);\n    });\n    return _this;\n  }\n  return _createClass(CartRemoveButton);\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\ncustomElements.define('cart-remove-button', CartRemoveButton);\nvar QuantitySelector = /*#__PURE__*/function (_HTMLElement2) {\n  _inherits(QuantitySelector, _HTMLElement2);\n  var _super2 = _createSuper(QuantitySelector);\n  function QuantitySelector() {\n    var _this2;\n    _classCallCheck(this, QuantitySelector);\n    _this2 = _super2.call(this);\n    _this2.querySelector('[data-button-minus]').addEventListener('click', _this2.minus.bind(_assertThisInitialized(_this2)));\n    _this2.querySelector('[data-button-plus]').addEventListener('click', _this2.add.bind(_assertThisInitialized(_this2)));\n    return _this2;\n  }\n  _createClass(QuantitySelector, [{\n    key: \"add\",\n    value: function add() {\n      var input = this.querySelector('[name=\"quantity\"]');\n      var inputValue = parseInt(input.value);\n      var newValue = inputValue += 1;\n      input.value = newValue;\n      this.closest('cart-items').updateItem(this.dataset.key, newValue);\n    }\n  }, {\n    key: \"minus\",\n    value: function minus() {\n      var input = this.querySelector('[name=\"quantity\"]');\n      var inputValue = parseInt(input.value);\n      var newValue = inputValue < 0 ? 0 : inputValue -= 1;\n      if (newValue == 0) {\n        this.closest('cart-items').removeItem(this.dataset.key);\n      } else {\n        input.value = newValue;\n        this.closest('cart-items').updateItem(this.dataset.key, newValue);\n      }\n    }\n  }]);\n  return QuantitySelector;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\ncustomElements.define('quantity-selector', QuantitySelector);\nvar CartItems = /*#__PURE__*/function (_HTMLElement3) {\n  _inherits(CartItems, _HTMLElement3);\n  var _super3 = _createSuper(CartItems);\n  function CartItems() {\n    var _this3;\n    _classCallCheck(this, CartItems);\n    _this3 = _super3.call(this);\n    _this3.debouncedRemoveItem = debounce(function (event) {\n      _this3.removeItem(event.currentTarget.dataset.itemKey);\n    }, 300);\n    _this3.listeners();\n    return _this3;\n  }\n  _createClass(CartItems, [{\n    key: \"listeners\",\n    value: function listeners() {\n      if (this.querySelector('form') !== undefined && this.querySelector('form') !== null) {\n        this.querySelector('form').addEventListener('change', this.getSectionInnerHTML.bind(this));\n      }\n    }\n  }, {\n    key: \"enableLoading\",\n    value: function enableLoading() {\n      this.setAttribute(\"aria-busy\", \"true\");\n    }\n  }, {\n    key: \"disableLoading\",\n    value: function disableLoading() {\n      this.setAttribute(\"aria-busy\", \"false\");\n    }\n  }, {\n    key: \"getSectionInnerHTML\",\n    value: function getSectionInnerHTML() {\n      var _this4 = this;\n      this.enableLoading();\n      fetch(\"\".concat(theme.routes.cart_url)).then(function (response) {\n        return response.text();\n      }).then(function (text) {\n        var cart = new DOMParser().parseFromString(text, \"text/html\");\n        _this4.getSectionsToRender().forEach(function (section) {\n          console.log('section: ', section);\n          if (cart.getElementById(section.id) !== undefined && cart.getElementById(section.id) != null) {\n            var html = cart.getElementById(section.id).innerHTML;\n            document.getElementById(section.id).innerHTML = html;\n          }\n        });\n      })[\"catch\"](function (e) {\n        console.error(e);\n      })[\"finally\"](function (e) {\n        _this4.disableLoading();\n      });\n    }\n  }, {\n    key: \"getSectionsToRender\",\n    value: function getSectionsToRender() {\n      return [{\n        id: 'cart-items-container'\n      }, {\n        id: 'cart-prices'\n      }, {\n        id: 'cart-countdown'\n      }];\n    }\n  }, {\n    key: \"removeItem\",\n    value: function removeItem(itemKey) {\n      var _this5 = this;\n      this.enableLoading();\n      _shopify_theme_cart__WEBPACK_IMPORTED_MODULE_1__.removeItem(itemKey).then(function (state) {\n        document.dispatchEvent(Events().itemRemoved._event(state));\n        document.dispatchEvent(Events().cartUpdated._event(state));\n        _this5.getSectionInnerHTML();\n      });\n    }\n  }, {\n    key: \"updateItem\",\n    value: function updateItem(itemKey, quantity) {\n      var _this6 = this;\n      this.enableLoading();\n      _shopify_theme_cart__WEBPACK_IMPORTED_MODULE_1__.updateItem(itemKey, {\n        quantity: quantity\n      }).then(function (state) {\n        var item = state.items.find(function (item) {\n          return item.key === itemKey;\n        });\n        document.dispatchEvent(Events().itemUpdated._event(item));\n        document.dispatchEvent(Events().cartUpdated._event(state));\n        _this6.getSectionInnerHTML();\n      });\n    }\n  }]);\n  return CartItems;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\ncustomElements.define('cart-items', CartItems);\n\n//# sourceURL=webpack://block-shopify-framework/./scripts/components/cart.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/components/cart.js");
/******/ 	
/******/ })()
;