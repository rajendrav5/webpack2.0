import React , {Component, PropTypes} from 'react';
import styles from './ProductCard.css';
import { Link } from 'react-router';

import Card from '../Card';
import Image from '../Image';


class ProductCard extends Component{
    constructor(){
        super();
    }

    state = {
        productData: [],
    }

    componentDidMount(){
        console.log('Product Cart mounted');
        // This is a place holder to make an ajax call and set data into state.
        this.setState({
            productData:[{
                image : "http://s7d9.scene7.com/is/image/JCPenney/DP0908201617430787M.tif?$gallery$",
                price : "$14.99",
                originalPrice : "44",
                id: 1
            }]
        })
    }
    componentWillReceiveProps(){
        console.log('props changed');
    }

    render(){
        return <li className={styles.galleryProduct}>
                    <Card>
                        <div>
                            <Link href="/liz-claiborne-34-sleeve-crew-neck-pullover-sweater/prod.jump?ppId=ppr5007162237&amp;Ntt=&amp;Ns=featured&amp;N=&amp;page=1">Navigate to product page</Link>
                            <div className={styles.imgBlock}>
                                <Image src={this.props.image} alt="Liz Claiborne 3/4 Sleeve Crew Neck Pullover Sweater - Liz Claiborne 3/4 Sleeve Crew Neck Pullover Sweater" width="100%" height="100%" />
                            </div>
                            <div className={styles.detailsWrapper}>
                                <div >
                                    <h6 className={styles.title}>
                                        <a className={styles.titleLink} href="/liz-claiborne-34-sleeve-crew-neck-pullover-sweater/prod.jump?ppId=ppr5007162237&amp;Ntt=&amp;Ns=featured&amp;N=&amp;page=1">Liz Claiborne 3/4 Sleeve Crew Neck Pullover Sweater</a>
                                    </h6>
                                    <ul className={styles.swatches}>
                                        <li className={styles.swatchesInfo}>
                                            <Image src="http://m.jcpenney.com/b/assets/img/swatches-info.svg" />
                                            <span className={styles.swatchText}>2 Colors Available</span>
                                        </li>
                                    </ul>
                                    <div className={styles.pricing}>
                                        <p className={styles.price}>
                                            <span>${this.props.price} </span>
                                            <span> SALE</span>
                                        </p>
                                        <p className={styles.strike}>Original ${this.props.originalPrice}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </li>

    }
}

export default ProductCard;
