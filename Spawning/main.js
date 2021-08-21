let p = data => console.log(data);

let repo = require('./repo');

// p(repo.level[1].name);

let getKeyByValues = (obj, val) => {
	return Object.keys(obj).find(key => obj[key] === value);
}