import React from 'react';
import './CounterC.css';
class CounterC extends React.Component {
    constructor() {
        super()
        this.state = { count: 0 }
        //this.state.count = 0 it means
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.stop = this.stop.bind(this)
    }
    increment() {
        this.setState({ count: this.state.count + 1 })
    }
    decrement() {
        this.setState({ count: this.state.count - 1 })
    }
    stop() {
        this.setState({ count: 0 })
    }

    render() {
        return (
            <div className='counter'>

                <button onClick={this.increment}>+</button>
                <h4>Count:{this.state.count}</h4>
                <button onClick={this.decrement}>-</button>
                <br /> <br /><br />
                <button onClick={this.stop}>Stop & Reset</button>
            </div>
        )
    }

}


export default CounterC;