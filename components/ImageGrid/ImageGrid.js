import React , {Component, PropTypes} from 'react';
import styles from './ImageGrid.css';

import Grid from '../Grid';
import GridItem from '../GridItem';
import Image from '../Image';

class ImageGrid extends Component{
    constructor(){
        super();
        this.gridData = [
            {
                img:"http://s7d9.scene7.com/is/image/JCPenney//DP0513201417071120M?$department_main$",
                text:"curtains & drapes",
                id:1
            },
            {
                img:"http://s7d9.scene7.com/is/image/JCPenney//DP1218201317211584M?$department_main$",
                text:"Blinds & shades",
                id:2
            }
            ,{
                img:"http://s7d9.scene7.com/is/image/JCPenney//DP0228201323371605M?$department_main$",
                text:"Custom blinds & shades",
                id:3
            }
            ,{
                img:"http://s7d9.scene7.com/is/image/JCPenney//0900631B81DA4E5DM?$department_main$",
                text:"curtain rods & hardware",
                id:4
            }
            ,{
                img:"http://s7d9.scene7.com/is/image/JCPenney//DP1212201317291824M?$department_main$",
                text:"valances",
                id:5
            }
            ,{
                img:"http://s7d9.scene7.com/is/image/JCPenney//DP0410201317023238M?$department_main$",
                text:"blackout & energy efficient",
                id:6
            },
            {
                img:"http://s7d9.scene7.com/is/image/JCPenney//DP0402201317024752M?$department_main$",
                text:"sheer curtains",
                id:7
            },
            {
                img:"http://s7d9.scene7.com/is/image/JCPenney//DP0401201317012846M?$department_main$",
                text:"kitchen curtains",
                id:8
            }
        ]
    }
    render(){
        return <div>
            <div>
                {
                    this.gridData.map(function (i ,v) {
                        <div>
                            <Image src={i.image} alt={i.text} key={i.id}/>
                            <div>{i.text}</div>
                        </div>
                    })
                }
            </div>
        </div>
    }
}

export default ImageGrid;