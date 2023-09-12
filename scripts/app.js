console.log('App is running');

// var template = <h1 id="someID">JSX is rendering</h1>;
var template = /*#__PURE__*/React.createElement(
    "p", 
    {   id: "someId"    }, 
    "JSX is rendering");

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
