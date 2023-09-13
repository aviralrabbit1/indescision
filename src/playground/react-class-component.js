class Indecision extends React.Component {
    render() {
        const title = 'Indecision app';
        const subTitle = 'Create short decision list to choose from';
        const options = ['first', 'second'];
        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action/>
                <Options options={options} />
                <AddOptions/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subTitle}</h3>
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
                <p>You have {this.props.options.length > 0 ? this.props.options.length : 'no'} options:</p>
                {
                    // this.props.options.map((option, index) => <p key={option}>{option} </p>)
                    this.props.options.map((option, index) => <Option key={option} optionText={option} />)
                }
                <Option/>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
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

ReactDOM.render(<Indecision/>, document.getElementById('app'));
