"use strict";

console.log('App is running');
var app = {
  title: 'Indecision App',
  subtitle: 'Create short decision list to choose from',
  options: []
};
function getTitle(title) {
  if (title) return title;else return 'Notes';
}
function getSubtitle(subtitle) {
  if (subtitle) return /*#__PURE__*/React.createElement("h3", null, subtitle);else return undefined; // similar to not having an else statement    
}

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault(); // avoids full page refresh
  console.log('Form Submitted');
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};
var removeALL = function removeALL() {
  app.options = [];
  render();
};
var makeDecision = function makeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  console.log(option);
};
var appRoot = document.getElementById('app');
var render = function render() {
  var appTemplate = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "title"
  }, getTitle(app.title)), app.subtitle && getSubtitle(app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? /*#__PURE__*/React.createElement("p", null, "Here are your ", app.options.length, " option(s):") : 'No options', " "), /*#__PURE__*/React.createElement("button", {
    onClick: makeDecision
  }, "What should i do?"), /*#__PURE__*/React.createElement("button", {
    onClick: removeALL
  }, "Remove All"), /*#__PURE__*/React.createElement("ol", null, app.options.map(function (option) {
    return /*#__PURE__*/React.createElement("li", {
      key: option
    }, option);
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option",
    placeholder: "Add a note"
  }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
  ReactDOM.render(appTemplate, appRoot);
};

// issue #3
// import { createRoot } from 'react-dom/client';
// const root = createRoot(appRoot); // createRoot(container!) if you use TypeScript
render();
