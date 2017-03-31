import React , { Component, PropTypes} from 'react';
import styles from './Card.css';

class Card extends Component{
    constructor(){
        super();
    }
    render(){
        return <div className={styles.cardWrapper}>
            {this.props.children}
        </div>
    }
}
export default Card;