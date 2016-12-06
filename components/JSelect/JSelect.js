import React , {Component,PropTypes} from 'react';
import styles from './JSelect.css';

class JSelect extends Component{

	ComponentWillRecieveProps(){

	}
	optionChanged(){
		alert('Are you sure to change this ...!!');
	}
	render(){
		return <div>
		Yo
			<select className={styles.first} onChange={this.optionChanged} data='raj'>
				 {this.props.options.map(function(i,v){
				 	return <option value={i.val} key={i.val} className={styles['first']}>{i.display}</option>
				 })}
			</select>
		</div>
	}
}

export default JSelect;