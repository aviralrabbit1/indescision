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
    handleClick(){
        alert('handleClick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick} >What should i do?</button>
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
    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this); // resetting the context here instead of inline
    }
    removeAll(){
        console.log(this.props.options); // here, this doesn't refer to class instance
        alert('removeAll');
    }
    render() {
        return (
            <div>
                <button onClick={this.removeAll} >Remove All</button>
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
