import React , { Component , PropTypes} from 'react';
import styles from './LazyHero.css';
import {on, off} from '../../Utils/events';

export default class LazyHero extends Component{
  /****
    USAGE OF LAZYHERO COMPONENT IS STRICTLY PROHIBITED ON SERVER SIDE RENDER.
  ****/
 	constructor() {
 		super();
    this.scrollEventCB = this.scrollEventCB.bind(this);
    this.state = {
        componentMounted: false,
    }
 	}
  /*
    props:
    resize ? does this affect my flow : done
    unmountIfInViewDefaultview: dont want to process even if it loads in initial view and works only on scroll:done
    callback for coming into the view in certain px: done
    placeholder loader component until the original component processes, if not show a default loader in place
    defaultHeight : defaultMount at 0 + window.innerHeight
  */

  componentDidMount() {
    on(window, 'scroll', this.scrollEventCB);
    on(window, 'resize', this.scrollEventCB);
  }

  scrollEventCB (ref) {
      if(this.rootNode) {
          if((parseInt(this.rootNode.getBoundingClientRect().top) - window.innerHeight) < 0) {
              if (this.props.callBackOnMount) this.props.callBackOnMount();
              off(window, 'scroll',this.scrollEventCB);
              this.setState({
                componentMounted: true,
              });
          };
      }
  }
 	render() {
    // console.log(this.props.children.find('ProductCard'));
 	  return(
	        <div ref={(node) => {this.rootNode = node;}}>
       			  {
                do{
                    if(this.state.componentMounted === false) {
                        <div>Loading.....</div>
                    }else{
                        {this.props.children}
                    }
                }
              }
       		</div>
          );
	}
}
