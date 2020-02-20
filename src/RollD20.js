import React, { Component } from 'react';
import D20 from './D20';
import './RollD20.css';

class RollD20 extends Component {

    constructor(props){
        super(props)
        this.state = {rolling: false}
    }

    roll() {
        const D20Num = Math.floor(Math.random() * 20) + 1;
        this.setState({D20Result: D20Num});
    }

    render() {
        return (
            <div className='RollD20'>
                <div className='RollD20-Container'>
                    < D20 rolling={this.state.rolling}/>
                </div>
                <button disabled={this.state}>
                    {this.state.rolling ? 'Rolling...' : 'Roll Dice'}
                </button>
            </div>
        )
    }
}

export default RollD20;
