class Indecision extends React.Component {
    constructor(props){
        super(props);
        this.deleteOptions = this.deleteOptions.bind(this);
        this.makeDecision = this.makeDecision.bind(this);
        this.addOption = this.addOption.bind(this);
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
    addOption(option){
        if(!option){
            return 'Enter valid value';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'Option already exists!';
        }
        this.setState((prevState) => {
            // prevState.options.push(option); // will manipulate the prevState, so not good
            return {
                options: prevState.options.concat(option)  // adds without manipulating
            };
        });
        // console.log('add option')
    }
    render() {
        const subTitle = 'Create short decision list to choose from';
        // const options = ['first', 'second']; // takes preference
        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action hasOptions={this.state.options.length > 0 }
                makeDecision={this.makeDecision} />
                <Options options={this.state.options}
                deleteOptions={this.deleteOptions} />
                <AddOptions addOption={this.addOption} />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subTitle}</h3>
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision App'
};

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} 
            onClick={props.makeDecision} >What should i do?</button>
        </div>
    )
}

class AddOptions extends React.Component {
    constructor(props){
        super(props);
        this.addOption = this.addOption.bind(this); // binding the method
        this.state = {
            error: undefined
        };
    }
    addOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);
        
        this.setState(() => {
            return {
                error
            };
        });
    }
    render() {
        return (
            <div>
                { this.state.error && <p>{this.state.error} </p> }
                <form onSubmit={this.addOption}>
                    <input type="text" name="option" />
                    <button>Add Options</button>
                </form>
            </div>
        )
    }
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.deleteOptions} >Remove All</button>
            <p>You have {props.options.length > 0 ? props.options.length : 'no'} options:</p>
            {
                // this.props.options.map((option, index) => <p key={option}>{option} </p>)
                props.options.map((option, index) => <Option key={option} optionText={option} />)
            }
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    );
};

ReactDOM.render(<Indecision/>, document.getElementById('app'));
