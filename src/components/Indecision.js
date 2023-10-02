import React from 'react'
import AddOptions from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

export default class Indecision extends React.Component {
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
