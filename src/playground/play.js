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

let count = 0;
const addOne = () => console.log('addOne');
const minuOne = () => console.log('minuOne');
const reset = () => console.log('reset');
const template = (
    <div>
        <h2>Count: {count} </h2>
        <button id="decrementor" className="button" onClick={minuOne}>-1</button>
        <button id="reset" className="button" onClick={reset}>reset</button>
        <button id="incrementor" className="button" onClick={addOne}>+1</button>
        {/* <button id="inline" className="button" onClick={() =>{
            console.log('inline function')
        }}>inline</button> */}
    </div>
)

console.log(template);

var appRoot = document.getElementById('app');

// issue #3
// import { createRoot } from 'react-dom/client';
// const root = createRoot(appRoot); // createRoot(container!) if you use TypeScript

ReactDOM.render(template, appRoot);
