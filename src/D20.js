import React, { Component } from 'react';
import './D20.css'
// test
class D20 extends Component {

    render() {
        return (
            <div>
                <i class="fas fa-dice-d20">
                    <print class='num'>
                        {Math.floor(Math.random() * 20)+1}
                    </print>
                </i>
            </div>
        )
    }
}

export default D20;