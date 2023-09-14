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
  function Indecision(props) {
    var _this;
    _classCallCheck(this, Indecision);
    _this = _super.call(this, props);
    _this.deleteOptions = _this.deleteOptions.bind(_assertThisInitialized(_this));
    _this.deleteOption = _this.deleteOption.bind(_assertThisInitialized(_this));
    _this.makeDecision = _this.makeDecision.bind(_assertThisInitialized(_this));
    _this.addOption = _this.addOption.bind(_assertThisInitialized(_this));
    _this.state = {
      options: props.options
    };
    return _this;
  }
  _createClass(Indecision, [{
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
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        subTitle: subTitle
      }), /*#__PURE__*/React.createElement(Action, {
        hasOptions: this.state.options.length > 0,
        makeDecision: this.makeDecision
      }), /*#__PURE__*/React.createElement(Options, {
        options: this.state.options,
        deleteOptions: this.deleteOptions,
        deleteOption: this.deleteOption
      }), /*#__PURE__*/React.createElement(AddOptions, {
        addOption: this.addOption
      }));
    }
  }]);
  return Indecision;
}(React.Component);
Indecision.defaultProps = {
  options: []
};
var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, props.title), props.subTitle && /*#__PURE__*/React.createElement("h3", null, props.subTitle));
};
Header.defaultProps = {
  title: 'Indecision App'
};
var Action = function Action(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    disabled: !props.hasOptions,
    onClick: props.makeDecision
  }, "What should i do?"));
};
var AddOptions = /*#__PURE__*/function (_React$Component2) {
  _inherits(AddOptions, _React$Component2);
  var _super2 = _createSuper(AddOptions);
  function AddOptions(props) {
    var _this3;
    _classCallCheck(this, AddOptions);
    _this3 = _super2.call(this, props);
    _this3.addOption = _this3.addOption.bind(_assertThisInitialized(_this3)); // binding the method
    _this3.state = {
      error: undefined
    };
    return _this3;
  }
  _createClass(AddOptions, [{
    key: "addOption",
    value: function addOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.addOption(option);
      this.setState(function () {
        return {
          error: error
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error, " "), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.addOption
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "option"
      }), /*#__PURE__*/React.createElement("button", null, "Add Options")));
    }
  }]);
  return AddOptions;
}(React.Component);
var Options = function Options(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: props.deleteOptions
  }, "Remove All"), /*#__PURE__*/React.createElement("p", null, "You have ", props.options.length > 0 ? props.options.length : 'no', " options:"),
  // this.props.options.map((option, index) => <p key={option}>{option} </p>)
  props.options.map(function (option, index) {
    return /*#__PURE__*/React.createElement(Option, {
      key: option,
      optionText: option,
      deleteOption: props.deleteOption
    });
  }));
};
function Option(props) {
  return /*#__PURE__*/React.createElement("div", null, props.optionText, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      return props.deleteOption(props.optionText);
    }
  }, "Delete"));
};
ReactDOM.render( /*#__PURE__*/React.createElement(Indecision, null), document.getElementById('app'));
