console.log('App is running');

var user = {
    name : 'Aviral Verma',
    Age : 26,
    location : 'Mirzapur'
}

// JSX javascript XML
var template = (
    <>
        <h1 id="someID">JSX is rendering, Change is now reflected</h1>
        <h3>Some info</h3>
        <ol>
            <li>{user.name.toUpperCase()}</li>
            <li>age: {user.Age}</li>
            <li>Software Developer</li>
            <li>Location: {user.location}</li>
        </ol>
    </>
);


var appRoot = document.getElementById('app');

// issue #3
// import { createRoot } from 'react-dom/client';
// const root = createRoot(appRoot); // createRoot(container!) if you use TypeScript

ReactDOM.render(template, appRoot);
