import React, { Component } from 'react';
import D20 from './D20';
import './RollD20.css';

class RollD20 extends Component {
    render() {
        return (
            <div className='RollD20'>
                <div className='RollD20-Container'>
                    < D20 />
                </div>
            </div>
        )
    }
}

export default RollD20;
