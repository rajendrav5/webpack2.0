console.log('Hello world I am from 1.js');
function one(){
	console.log('i am from 1.js');
}

export default {
	one : one
};

export function oneByTwo(){
	console.log('i am from one by two');
}

export function oneByThree(){
	console.log('i am from one by three');	
}