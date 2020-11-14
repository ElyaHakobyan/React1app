import React, { Component } from 'react'

class Animal extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.cat}</li>
                    <li>{this.props.dog}</li>
                    <li>{this.props.fish}</li>
                </ul>
            </div>
        )
    }
}

export default Animal;