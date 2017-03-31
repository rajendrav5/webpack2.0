import React , {Component, PropTypes} from 'react';
import styles from './ProductList.css';

import ProductCard from '../../jcp-shared/ProductCard';

class ProductList extends Component{
    constructor(){
        super();
        this.productList = [
            {
                image : "http://s7d9.scene7.com/is/image/JCPenney/DP0908201617430787M.tif?$gallery$",
                price : "$14.99",
                originalPrice : "44",
                id: 1
            },
            {
                image : "http://s7d9.scene7.com/is/image/JCPenney/DP1024201620363090C.tif?$gallery$",
                price : "$14.99",
                originalPrice : "44",
                id: 2
            },
            {
                image : "http://s7d9.scene7.com/is/image/JCPenney/DP0816201620323546C.tif?$gallery$",
                price : "$14.99",
                originalPrice : "44",
                id: 3
            },
            {
                image : "http://s7d9.scene7.com/is/image/JCPenney/DP0905201617112988M.tif?$gallery$",
                price : "$14.99",
                originalPrice : "44",
                id: 4
            },
            {
                image:"http://s7d9.scene7.com/is/image/JCPenney/DP0811201617224082M.tif?$gallery$",
                price:"$9 - $14",
                originalPrice: "$36",
                id:5
            },
            {
                image:"http://s7d9.scene7.com/is/image/JCPenney/DP0921201620435078C.tif?$gallery$",
                price:"$9 - $14",
                originalPrice: "$36",
                id:6
            },
            {
                image:"http://s7d9.scene7.com/is/image/JCPenney/DP0927201617213506M.tif?$gallery$",
                price:"$9 - $14",
                originalPrice: "$36",
                id:7
            },
            {
                image:"http://s7d9.scene7.com/is/image/JCPenney/DP0830201620460570C.tif?$gallery$",
                price:"$9 - $14",
                originalPrice: "$36",
                id:8
            }
        ]
    }

    render(){
        return <section>
                <div className={styles.wrapper}>
                    <ul className={styles.gridTiles}>
                        {
                            this.productList.map(function(i,v){
                                return <ProductCard image={i.image} price={i.price} originalPrice={i.originalPrice} key={i.id} />
                            })
                        }
                    </ul>
                </div>
        </section>
    }
}

export default ProductList;