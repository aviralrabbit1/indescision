"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _AddOption = _interopRequireDefault(require("../components/AddOption"));
var _Option = _interopRequireDefault(require("../components/Option"));
var _Header = _interopRequireDefault(require("../components/Header"));
var _Action = _interopRequireDefault(require("../components/Action"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Indecision = /*#__PURE__*/function (_React$Component) {
  _inherits(Indecision, _React$Component);
  var _super = _createSuper(Indecision);
  function Indecision(props) {
    var _this;
    _classCallCheck(this, Indecision);
    _this = _super.call(this, props);
    _this.deleteOptions = _this.deleteOptions.bind(_assertThisInitialized(_this));
    _this.deleteOption = _this.deleteOption.bind(_assertThisInitialized(_this));
    _this.makeDecision = _this.makeDecision.bind(_assertThisInitialized(_this));
    _this.addOption = _this.addOption.bind(_assertThisInitialized(_this));
    _this.state = {
      // options: props.options
      options: []
    };
    return _this;
  }
  _createClass(Indecision, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var json = localStorage.getItem('options');
      var options = JSON.parse(json);
      if (options) {
        this.setState(function () {
          return {
            options: options
          };
        });
      }
      console.log('componend did mount, fetching data'); // only for class based component
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // we can check what changed
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
        console.log('component did update, saving data (after state or props value change)');
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('component will unmount, (when a component disappears)');
    }
  }, {
    key: "deleteOptions",
    value: function deleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "deleteOption",
    value: function deleteOption(option) {
      var _this2 = this;
      // console.log(option);
      this.setState(function () {
        return {
          options: _this2.state.options.filter(function (optionToRemove) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: "makeDecision",
    value: function makeDecision() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      console.log(option);
    }
  }, {
    key: "addOption",
    value: function addOption(option) {
      if (!option) {
        return 'Enter valid value';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'Option already exists!';
      }
      this.setState(function (prevState) {
        // prevState.options.push(option); // will manipulate the prevState, so not good
        return {
          options: prevState.options.concat(option) // adds without manipulating
        };
      });
      // console.log('add option')
    }
  }, {
    key: "render",
    value: function render() {
      var subTitle = 'Create short decision list to choose from';
      // const options = ['first', 'second']; // takes preference
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
        subTitle: subTitle
      }), /*#__PURE__*/_react["default"].createElement(_Action["default"], {
        hasOptions: this.state.options.length > 0,
        makeDecision: this.makeDecision
      }), /*#__PURE__*/_react["default"].createElement(Options, {
        options: this.state.options,
        deleteOptions: this.deleteOptions,
        hasOptions: this.state.options.length > 0,
        deleteOption: this.deleteOption
      }), /*#__PURE__*/_react["default"].createElement(AddOptions, {
        addOption: this.addOption
      }));
    }
  }]);
  return Indecision;
}(_react["default"].Component); // Indecision.defaultProps = {
//     options: []
// }
var Options = function Options(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    disabled: !props.hasOptions,
    onClick: props.deleteOptions
  }, "Remove All"), /*#__PURE__*/_react["default"].createElement("p", null, "You have ", props.options.length > 0 ? props.options.length : 'no', " options:"),
  // this.props.options.map((option, index) => <p key={option}>{option} </p>)
  props.options.map(function (option, index) {
    return /*#__PURE__*/_react["default"].createElement(_Option["default"], {
      key: option,
      optionText: option,
      deleteOption: props.deleteOption
    });
  }));
};
_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(Indecision, null), document.getElementById('app'));
