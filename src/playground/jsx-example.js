console.log('App is running');

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

ReactDOM.render(template, appRoot);
