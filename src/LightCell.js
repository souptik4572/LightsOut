import React, { Component } from 'react';
import './LightCell.css';

class LightCell extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.props.toggle(this.props.idx);
    }
    render() {
        return(
            <div className='LightCell' style={{backgroundColor: this.props.color}} onClick={this.toggle} ></div>
        )
    }
}

export default LightCell;