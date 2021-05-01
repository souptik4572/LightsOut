import React, { Component } from 'react';
import './Board.css';

import LightCell from '../LightCell/LightCell';

class Board extends Component {
    static defaultProps = {
        size: 5
    }
    constructor(props){
        super(props);
        this.state = {
            color: Array.from({ length: this.props.size }).map(() => {
                return Array.from({ length: this.props.size }).map(() => {
                    return '#546e7a';
                })
            })
        }
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle(idx) {
        this.setState(st => {
            const newColor = st.color.map(e => {
                return [...e]
            });
            const currX = Math.floor(idx/10), currY = idx%10;
            const allX = [1, -1, 0, 0], allY = [0, 0, 1, -1];
            for(let i=0; i<4; i++){
                let newX = currX + allX[i], newY = currY + allY[i];
                if(newX >= 0 && newX < this.props.size && newY >= 0 && newY < this.props.size){
                    newColor[newX][newY] = st.color[newX][newY] === '#546e7a' ? '#aa00ff' : '#546e7a';
                }
            }
            newColor[currX][currY] = st.color[currX][currY] === '#546e7a' ? '#aa00ff' : '#546e7a';
            return { color: newColor };
        })
    }
    render() {
        const boardContent = this.state.color.map((e1, idx1) => {
            return e1.map((e2, idx2) => {
                return <LightCell key={10*idx1 + idx2} color={e2} toggle={this.handleToggle} idx={10*idx1 + idx2} />
            })
        });
        return(
            <div className='Board'>
                <p className='Board-title'><span className='Board-fast'>Lights</span><span className='Board-slow'>Out</span></p>
                <div className='Board-layout'>
                    {boardContent}
                </div>
            </div>
        )
    }
}
export default Board;