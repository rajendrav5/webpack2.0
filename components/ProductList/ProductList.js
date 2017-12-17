import React , {Component, PropTypes} from 'react';
import styles from './ProductList.css';

import ProductCard from '../../jcp-shared/ProductCard';
import ReactDOM from 'react-dom';
import LazyLoad from '../LazyHero';

class ProductList extends Component{
    constructor(){

        super();

        this.productList = [
            {
                image : "http://s7d9.scene7.com/is/image/JCPenney/DP0908201617430787M.tif?$gallery$",
                price : "$14.99",
                originalPrice : "44",
                id: 1
            }
        ];
    }

    componentWillMount(){
        console.log('componentWill be Mounted');
    }

    componentDidMount(){
        console.log('Component Mounted');
    }

    test = () => {
        console.log('just to test');
    }

    buttonClick = () => {
        this.setState({
            productList:[
                {
                    image : "http://dummyimage.com/203x203",
                    price : "$56.56",
                    originalPrice : "56",
                    id: 1
                }
            ]
        });
    }

    render(){
        const i = 0;
        return <section>
                    <div>{'Yo yo'}</div>
                    <div>this is a second componet</div>
                        <ProductCard image={this.productList[0].image} price={i.price} originalPrice={i.originalPrice} key={i.id} />
                        <ProductCard image={this.productList[0].image} price={i.price} originalPrice={i.originalPrice} key={i.id} />
                        <LazyLoad test="second" callBackOnMount={this.test}>
                          <ProductCard image={this.productList[0].image} price={i.price} originalPrice={i.originalPrice} key={i.id} />
                        </LazyLoad>
                        <div onClick={this.test} className={styles.test}>Tes ts tset sets</div>
                        <div onClick={this.test} className={styles.test}>Tes ts tset sets</div>
                        <div onClick={this.test} className={styles.test}>Tes ts tset sets</div>
                        <div onClick={this.test} className={styles.test}>Tes ts tset sets</div>
                        <div onClick={this.test} className={styles.test}>Tes ts tset sets</div>
                        <div onClick={this.test} className={styles.test}>Tes ts tset sets</div>
                        <LazyLoad test="first">
                          <ProductCard image={this.productList[0].image} price={i.price} originalPrice={i.originalPrice} key={i.id} />
                        </LazyLoad>
                </section>
    }
}

export default ProductList;
