import React , {Component, PropTypes } from 'react';
import styles from './GridItem.css';

class GridItem extends Component{
    constructor(){
        super();
    }
    render(){
        return <div>
            {this.props.children}
        </div>
    }
}

export default GridItem;

