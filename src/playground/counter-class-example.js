class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minuOne = this.minuOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        }
    }
    // var count = 0;
    addOne = () => {
        this.setState(() => {
            return {
                count: this.state.count + 1
            }
        })
        console.log('addOne');
    }
    minuOne = () => {
        this.setState(() => {
            return {
                count: this.state.count - 1
            }
        })
        console.log('minuOne');
    }
    reset = () => {
        this.setState(() => {
            return {
                count: 0
            }
        })
        console.log('reset');
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.minuOne}>-1</button>
                <button onClick={this.reset}>reset</button>
                <button onClick={this.addOne}>+1</button>
            </div>
        );
    };
}

ReactDOM.render(<Counter/>, document.getElementById('app'));