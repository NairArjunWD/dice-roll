import React, { Component } from 'react';
import './D20.css'

class D20 extends Component {

    render() {
        return (
            <div>
                <i className={`fas fa-dice-d20 ${this.props.rolling && 'shaking'}`}>
                    <print class='num'>
                        {Math.floor(Math.random() * 20)+1}
                    </print>
                </i>
            </div>
        )
    }
}

export default D20;