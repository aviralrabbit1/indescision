console.log('App is running');

var app = {
    title: 'Notes App',
    subtitle: 'Create short notes',
    options: ['first', 'second'],
}

function getTitle(title) {
    if(title) return title;
    else return 'Notes';    
}
function getSubtitle(subtitle) {
    if(subtitle) return <h3>{subtitle}</h3>;
    else return undefined; // similar to not having an else statement    
}

var appTemplate = (
    <>
        <h1 id="title">{getTitle(app.title)}</h1>
        {app.subtitle && getSubtitle(app.subtitle)}
        <p>{app.options.length > 0 ? 'Here are the notes:': 'No notes'} </p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </>
);

var user = {
    name : 'Aviral Verma',
    age : 26,
    location : 'Mirzapur'
}

// JSX javascript XML
var template = (
    <>
        <h1 id="someID">JSX is rendering, Change is now reflected</h1>
        <h3>Some info</h3>
        <ol>
            <li>{user.name.toUpperCase()}</li>
            {(user.age && user.age >=18 ) && <li>age: {user.age}</li>}
            <li>Software Developer</li>
            <li>Location: {user.location?user.location:'Banglore'}</li>
        </ol>
    </>
);


var appRoot = document.getElementById('app');

// issue #3
// import { createRoot } from 'react-dom/client';
// const root = createRoot(appRoot); // createRoot(container!) if you use TypeScript

ReactDOM.render(appTemplate, appRoot);
