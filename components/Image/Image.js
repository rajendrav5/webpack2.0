import React , {Component, PropTypes} from 'react';
import styles from './Image.css';

class Image extends Component{
    constructor(){
        super();
    }
    render(){
        return <img
            src={this.props.src}
            className={this.props.class}
            alt={this.props.alt}
            width={this.props.width}
            height={this.props.height}
        />
    }
}

export default Image;