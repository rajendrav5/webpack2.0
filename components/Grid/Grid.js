import React , {Components, PropTypes} from 'react';
import styles from './Grid.css';

class Grid extends Component{
    constructor(){
        super();
    }
    render(){
        return <section className={styles.gridWrapper}>
            {this.props.children}
        </section>
    }
}

export default Grid;
