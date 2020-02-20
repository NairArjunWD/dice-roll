import React, { Component } from 'react';
import './D20.css'

class D20 extends Component {

    render() {
        return (
            <div>
                <i class="fas fa-dice-d20">
                    <print class='num'>
                        {Math.floor(Math.random() * 20)}
                    </print>
                </i>
            </div>
        )
    }
}

export default D20;