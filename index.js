import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import App from './containers/App';
// import configureStore from './store/configureStore';
import ProductList from './components/ProductList';
import LazyHero from './components/LazyHero';

const renderer = () => {
	render(
		<div>
        	<ProductList />
		</div>
		,
		document.getElementById('root')
	);
};

renderer();

if(module && module.hot){
	module.hot.accept('./components/ProductList',renderer);
  	module.hot.accept('./components/LazyHero',renderer);
}
