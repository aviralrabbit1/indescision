class Indecision extends React.Component {
    constructor(props){
        super(props);
        this.deleteOptions = this.deleteOptions.bind(this);
        this.makeDecision = this.makeDecision.bind(this);
        this.state = {
            options: ['first', 'second', 'third']
        };
    }
    deleteOptions(){
        this.setState({
            options: []
        });
    }
    makeDecision(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(option);
    }
    render() {
        const title = 'Indecision app';
        const subTitle = 'Create short decision list to choose from';
        // const options = ['first', 'second']; // takes preference
        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action hasOptions={this.state.options.length > 0 }
                makeDecision={this.makeDecision} />
                <Options options={this.state.options}
                deleteOptions={this.deleteOptions} />
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
                <button disabled={!this.props.hasOptions} 
                onClick={this.props.makeDecision} >What should i do?</button>
            </div>
        )
    }
}

class AddOptions extends React.Component {
    addOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if(option) {
            alert('option');
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addOption}>
                    <input type="text" name="option" />
                    <button>Add Options</button>
                </form>
            </div>
        )
    }
}

class Options extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.removeAll = this.removeAll.bind(this); // resetting the context here instead of inline
    // }
    // removeAll(){
    //     console.log(this.props.options); // here, this doesn't refer to class instance
    //     alert('removeAll');
    // }
    render() {
        return (
            <div>
                <button onClick={this.props.deleteOptions} >Remove All</button>
                <p>You have {this.props.options.length > 0 ? this.props.options.length : 'no'} options:</p>
                {
                    // this.props.options.map((option, index) => <p key={option}>{option} </p>)
                    this.props.options.map((option, index) => <Option key={option} optionText={option} />)
                }
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

ReactDOM.render(<Indecision/>, document.getElementById('app'));
