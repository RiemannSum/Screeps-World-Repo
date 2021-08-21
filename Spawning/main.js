let repo = require('./repo');
let df = require('./dictionaryFunctions');

let p = data => console.log(data);

let dict = {
	name: 't',
	val: 2,
	t: 'a',
	arr: {
		v1: 'one',
		v2: 'two',
		v3: 'three'
	},
	outer: {
		middle: {
			inner: 'test'
		}
	}
}

// df.findValue(dict, 'name')

let e = df.findKey(dict, 'v1')
p(e)




// let v = 'name'
// p(dict[v])
// p(Object.values(dict.v))

// p(df.getKeyByValue(dict, 'one'))
// p(df.getValueByKey(dict, 'name'));


// let count = df.totalElements(dict);
// p(count)
// p(typeof Object.values(dict)[2])


// let n = Object.keys(dict)[2]

// let o = dict[n];
// df.printKeys(o)



// df.printKeys(dict.arr)

// p(df.getLength(dict))













// let p = data => console.log(data);

// let repo = require('./repo');

// // p(repo.level[1].name);

// let getKeyByValues = (obj, val) => {
// 	return Object.keys(obj).find(key => obj[key] === val);
// }

// // p(repo.level)
// // p(typeof getKeyByValues(repo, 'two'))

// // p(Object.values(repo)[1])



// //----------------
// //testing stuff

// // let d1 = {a:1, b:2, c:3}
// // p(Object.keys(d1))



// // Object.keys(person).forEach((key) => {
// // 	p(person[key]);
// // });


// //----------------------------------------------------------------
// //testing stuff

// let search = (target) => {
// 	Object.keys(target).forEach((key) => p(target[key]));
// }

// let person = {
// 	name: 'bob',
// 	age: 49
// }

// // search(person)

// let s = (target, key) => {
// 	p(Object.keys(target)[key]);
// };

// // s(person, 0)

// // p(Object.keys(person).length)

// // p(person[0])


// //iterate over keys and print key names
// for(var e in person){
// 	p(e, person[e])
// }

// p(person["name"])


// let repo = require('./repo');
// import {p, printKeys} from './dictionaryFunctions';

// df.p(123)