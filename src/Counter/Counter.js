import { render } from '@testing-library/react'
import React, { Component } from 'react'
import './CounterStyle.css'

class Counter extends Component {
    constructor() {
        super()

        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
    }

    state = {
        count: 0
    }

    increase() {
        this.setState({
            count: this.state.count += 1
        })
    }

    decrease() {
        this.setState({
            count: this.state.count -= 1
        })
    }

    render() {
        return (
            <div className='Container'>
                <button className='buttons' onClick={this.increase}>increase</button>
                <p className='p-tag'>{this.state.count}</p>
                <button className='buttons' onClick={this.decrease}>decrease</button>
            </div>
        )
    }
}

export default Counter