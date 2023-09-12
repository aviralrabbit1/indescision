console.log('App is running');

var app = {
    title: 'Notes App',
    subtitle: 'Create short notes',
    options: [],
}

function getTitle(title) {
    if(title) return title;
    else return 'Notes';    
}
function getSubtitle(subtitle) {
    if(subtitle) return <h3>{subtitle}</h3>;
    else return undefined; // similar to not having an else statement    
}

const onFormSubmit = (e) => {
    e.preventDefault(); // avoids full page refresh
    console.log('Form Submitted');

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

const removeALL = () => {
    app.options = [];
    render();
}

var appRoot = document.getElementById('app');

const render = () => {
    var appTemplate = (
        <>
            <h1 id="title">{getTitle(app.title)}</h1>
            {app.subtitle && getSubtitle(app.subtitle)}
            <p>{app.options.length > 0 ? 'Here are the notes:': 'No notes'} </p>
            <p>Number of options: {app.options.length}</p>
            <button onClick={removeALL}>Remove All</button>
            <ol>
                {
                app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" placeholder="Add a note" />
                <button>Add Option</button>
            </form>
        </>
    );
    ReactDOM.render(appTemplate, appRoot);
}

// issue #3
// import { createRoot } from 'react-dom/client';
// const root = createRoot(appRoot); // createRoot(container!) if you use TypeScript
render();
