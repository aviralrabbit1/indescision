class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minuOne = this.minuOne.bind(this);
        this.reset = this.reset.bind(this);
    }
    // var count = 0;
    addOne = () => {
        // count++;
        console.log('addOne');
    }
    minuOne = () => {
        // count--;
        console.log('minuOne');
    }
    reset = () => {
        // count = 0;
        console.log('reset');
    }
    render() {
        return (
            <div>
                <h1>Count: </h1>
                <button onClick={this.minuOne}>-1</button>
                <button onClick={this.reset}>reset</button>
                <button onClick={this.addOne}>+1</button>
            </div>
        );
    };
}

ReactDOM.render(<Counter/>, document.getElementById('app'));