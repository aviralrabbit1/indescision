console.log('App is running');

var username = 'Aviral Verma';
var userAge = 26;
var userLocation = 'Mirzapur';

// JSX javascript XML
var template = (
    <>
        <h1 id="someID">JSX is rendering, Change is now reflected</h1>
        <h3>Some info</h3>
        <ol>
            <li>{username.toUpperCase()}</li>
            <li>age: {userAge}</li>
            <li>Software Developer</li>
            <li>Location: {userLocation}</li>
        </ol>
    </>
);


var appRoot = document.getElementById('app');

// issue #3
// import { createRoot } from 'react-dom/client';
// const root = createRoot(appRoot); // createRoot(container!) if you use TypeScript

ReactDOM.render(template, appRoot);
