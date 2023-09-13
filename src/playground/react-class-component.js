class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision App</h1>
                <h3>Create short decision list to choose from</h3>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should i do?</button>
            </div>
        )
    }
}
class AddOptions extends React.Component {
    render() {
        return (
            <div>
                <button>Add Options</button>
            </div>
        )
    }
}
class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Option</p>
            </div>
        )
    }
}

const jsx = (
    <div>
        <Header/>
        <Action/>
        <Options/>
        <AddOptions/>
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'));
