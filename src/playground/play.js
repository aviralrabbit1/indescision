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

const onFormSubmit = (e) => {
    e.preventDefault(); // avoids full page refresh
    console.log('Form Submitted');

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
}

var appTemplate = (
    <>
        <h1 id="title">{getTitle(app.title)}</h1>
        {app.subtitle && getSubtitle(app.subtitle)}
        <p>{app.options.length > 0 ? 'Here are the notes:': 'No notes'} </p>
        <p>Number of options: {app.options.length}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" placeholder="Add a note" />
            <button>Add Option</button>
        </form>
    </>
);

var appRoot = document.getElementById('app');

// issue #3
// import { createRoot } from 'react-dom/client';
// const root = createRoot(appRoot); // createRoot(container!) if you use TypeScript

ReactDOM.render(appTemplate, appRoot);
