
let p = data => console.log(data);
// let p1 = () => console.log(1)
// let p2 = () => console.log(2);

let printKeys = obj => {
	for(let element in obj){
		p(element, obj[element]);
	}
}


//----------------------------Counting Functions----------------------
let getLength = obj => {
	return Object.keys(obj).length;
}


let totalElements = obj => {
	//Count total amount of elements in a dictionary
	let count = 0;

	//Iterate over dictionary input
	for(let i = 0; i < getLength(obj); i++){

		//Check if there is a nested dictionary
		if(typeof Object.values(obj)[i] === 'object'){

			//Get nested dictionary key
			let array = Object.keys(obj)[i];

			//recursivly count nested dictionaries
			count = count + totalElements(obj[array])
		}
		count = count + 1;
	}
	//return total amount of elements
	return count;
}

//----------------------------Searching Functions----------------------

let findValue = (obj, val) => {
	//Finds and returns the location of a value
	//Values are the right part of an element
	for(let i = 0; i < getLength(obj); i++){
		p(Object.values(obj)[i])
	}
}

let findKey = (obj, val) => {
	//Finds and returns the location of a key
	//keys are the left part of an element
	p(Object.keys(obj)[0])
	let str = "";
	for(let i = 0; i < getLength(obj); i++){
		if(Object.keys(obj)[i] === val){
			return str + "." + Object.keys(obj)[i];
		}
		if(typeof Object.values(obj)[i] === 'object'){
			let array = Object.keys(obj)[i];
			return str + "." + findKey(obj[array], val);
		}
	}

	return str;


	// let str = "";
	// let match = false;
	// let iter = 0;
	// while(!match){
	// 	if(Object.keys(obj)[iter] === val){
	// 		match = true;
	// 	}
	// 	else{
	// 		iter = iter + 1;
	// 	}
	// }

	// if(!match){
	// 	findKey
	// }

	// return str + "." + Object.keys(obj)[iter];



/**
	let str = "";
	for(let i = 0; i < getLength(obj); i++){
		// p(Object.keys(obj)[i])
		if(Object.keys(obj)[i] === val){
			// p(Object.keys(obj)[i])
			// return obj[i];
			return str + "." + Object.keys(obj)[i];
		}
	}
	for(let i = 0; i < getLength(obj); i++){

	}

	return str;

	**/
}


let getKeyByValue = (obj, val) => {
	return Object.keys(obj).find(key => obj[key] === val);
}

let getValueByKey = (obj, val) => {
	// return Object.values(obj).find(key => obj[key] === val);
	return obj[val];
}



//Export all functions
//Then import this file in the target executable
module.exports = {
	p,
	printKeys,
	getLength,
	totalElements,
	findValue,
	findKey,
	getKeyByValue,
	getValueByKey
}