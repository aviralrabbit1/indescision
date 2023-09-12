console.log('App is running');

var app = {
    title: 'Notes App',
    subtitle: 'Create short notes',
    options: ['first', 'second'],
}

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
    console.log('addOne');
}
const minuOne = () => {
    count--;
    renderCounterApp();
    console.log('minuOne');
}
const reset = () => {
    count = 0;
    renderCounterApp();
    console.log('reset');
}

var appRoot = document.getElementById('app');

const renderCounterApp = () => {

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

    ReactDOM.render(template, appRoot);
}

// console.log(template);

renderCounterApp();

// issue #3
// import { createRoot } from 'react-dom/client';
// const root = createRoot(appRoot); // createRoot(container!) if you use TypeScript
