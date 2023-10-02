import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from '../components/AddOption'
import Option from '../components/Option'

class Indecision extends React.Component {
    constructor(props){
        super(props);
        this.deleteOptions = this.deleteOptions.bind(this);
        this.deleteOption = this.deleteOption.bind(this);
        this.makeDecision = this.makeDecision.bind(this);
        this.addOption = this.addOption.bind(this);
        this.state = {
            // options: props.options
            options: []
        };
    }
    componentDidMount(){
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options){
            this.setState(() => ({options})); 
        }
        console.log('componend did mount, fetching data'); // only for class based component
    }
    componentDidUpdate(prevProps, prevState){
        // we can check what changed
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('component did update, saving data (after state or props value change)');
        }
    }
    componentWillUnmount(){
        console.log('component will unmount, (when a component disappears)');
    }
    deleteOptions(){
        this.setState(() => ({ options: [] }));
    }
    deleteOption(option){
        // console.log(option);
        this.setState(() => ({
            options: this.state.options.filter((optionToRemove) => optionToRemove!== option)
        }))
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
                <Header subTitle={subTitle} />
                <Action hasOptions={this.state.options.length > 0 }
                    makeDecision={this.makeDecision} 
                />
                <Options options={this.state.options}
                    deleteOptions={this.deleteOptions}
                    hasOptions={this.state.options.length > 0 }
                    deleteOption={this.deleteOption} 
                />
                <AddOptions addOption={this.addOption} />
            </div>
        )
    }
}

// Indecision.defaultProps = {
//     options: []
// }

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h3>{props.subTitle}</h3>}
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



const Options = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.deleteOptions} >Remove All</button>
            <p>You have {props.options.length > 0 ? props.options.length : 'no'} options:</p>
            {
                // this.props.options.map((option, index) => <p key={option}>{option} </p>)
                props.options.map((option, index) => (
                <Option key={option} optionText={option}
                deleteOption={props.deleteOption} />
                ))
            }
        </div>
    );
};

ReactDOM.render(<Indecision/>, document.getElementById('app'));
