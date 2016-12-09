import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import JCSelect from './components/JSelect';
//import App from './containers/App'
//import configureStore from './store/configureStore'

//const store = configureStore()
// let optData = [
// 				{display:"India",val:"ind"},
// 				{display:"Austrlia",val:"aus"},
// 				{display:"Asia Pacific",val:"APAC"},
// 				{display:"Dallas",val:"ds"},
// 				{display:"Dallass",val:"dsasdf"}
// ];
//

simport ProductList from './components/ProductList';
//<ProductList />
const renderer = () => {
	render(
		,
		document.getElementById('root')
	);
};
renderer();

if(module && module.hot){
	module.hot.accept('./components/ProductList',renderer);
}