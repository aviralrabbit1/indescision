"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
  function Indecision() {
    _classCallCheck(this, Indecision);
    return _super.apply(this, arguments);
  }
  _createClass(Indecision, [{
    key: "render",
    value: function render() {
      var title = 'Indecision app';
      var subTitle = 'Create short decision list to choose from';
      var options = ['first', 'second'];
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        title: title,
        subTitle: subTitle
      }), /*#__PURE__*/React.createElement(Action, null), /*#__PURE__*/React.createElement(Options, {
        options: options
      }), /*#__PURE__*/React.createElement(AddOptions, null));
    }
  }]);
  return Indecision;
}(React.Component);
var Header = /*#__PURE__*/function (_React$Component2) {
  _inherits(Header, _React$Component2);
  var _super2 = _createSuper(Header);
  function Header() {
    _classCallCheck(this, Header);
    return _super2.apply(this, arguments);
  }
  _createClass(Header, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, this.props.title), /*#__PURE__*/React.createElement("h3", null, this.props.subTitle));
    }
  }]);
  return Header;
}(React.Component);
var Action = /*#__PURE__*/function (_React$Component3) {
  _inherits(Action, _React$Component3);
  var _super3 = _createSuper(Action);
  function Action() {
    _classCallCheck(this, Action);
    return _super3.apply(this, arguments);
  }
  _createClass(Action, [{
    key: "handleClick",
    value: function handleClick() {
      alert('handleClick');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        onClick: this.handleClick
      }, "What should i do?"));
    }
  }]);
  return Action;
}(React.Component);
var AddOptions = /*#__PURE__*/function (_React$Component4) {
  _inherits(AddOptions, _React$Component4);
  var _super4 = _createSuper(AddOptions);
  function AddOptions() {
    _classCallCheck(this, AddOptions);
    return _super4.apply(this, arguments);
  }
  _createClass(AddOptions, [{
    key: "addOption",
    value: function addOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      if (option) {
        alert('option');
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
        onSubmit: this.addOption
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "option"
      }), /*#__PURE__*/React.createElement("button", null, "Add Options")));
    }
  }]);
  return AddOptions;
}(React.Component);
var Options = /*#__PURE__*/function (_React$Component5) {
  _inherits(Options, _React$Component5);
  var _super5 = _createSuper(Options);
  function Options(props) {
    var _this;
    _classCallCheck(this, Options);
    _this = _super5.call(this, props);
    _this.removeAll = _this.removeAll.bind(_assertThisInitialized(_this)); // resetting the context here instead of inline
    return _this;
  }
  _createClass(Options, [{
    key: "removeAll",
    value: function removeAll() {
      console.log(this.props.options); // here, this doesn't refer to class instance
      alert('removeAll');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        onClick: this.removeAll
      }, "Remove All"), /*#__PURE__*/React.createElement("p", null, "You have ", this.props.options.length > 0 ? this.props.options.length : 'no', " options:"),
      // this.props.options.map((option, index) => <p key={option}>{option} </p>)
      this.props.options.map(function (option, index) {
        return /*#__PURE__*/React.createElement(Option, {
          key: option,
          optionText: option
        });
      }));
    }
  }]);
  return Options;
}(React.Component);
var Option = /*#__PURE__*/function (_React$Component6) {
  _inherits(Option, _React$Component6);
  var _super6 = _createSuper(Option);
  function Option() {
    _classCallCheck(this, Option);
    return _super6.apply(this, arguments);
  }
  _createClass(Option, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.props.optionText);
    }
  }]);
  return Option;
}(React.Component);
ReactDOM.render( /*#__PURE__*/React.createElement(Indecision, null), document.getElementById('app'));
