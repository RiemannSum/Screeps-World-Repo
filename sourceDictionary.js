let p = data => console.log(data);

let c = {
	memory: {first: 1,
			 second: 2,
			 third: 3}
};

// let sources = {
// 	nodes: {
// 		one: {
// 			pos: {x: 1, y: 2},
// 			id: "first"
// 		},
// 		two: {
// 			pos: {x: 12, y: 35},
// 			id: "second"
// 		}
// 	}
// }

//make an array of harvesters
let hArr = [
	{
		name: 'h1',
		alive: true,
		sourceId: null
	},
	{
		name: 'h2',
		alive: true,
		sourceId: null
	}
];

// p(hArr[0].sourceId)

//find which ones do not have a sourceId assigned
let getIdle = arr => {
	for(let i = 0; i < arr.length; i++){
		// p(arr[i].sourceId)
		if(arr[i].sourceId == null){
			// p(arr[i].name)
			return arr[i];
		}
	}
}

getIdle(hArr);

//Dictionary of room sources
let sources = {
	nodes: {
		nodeOne: {
			pos: {x: 35, y: 2},
			slots: {
				amount: 1,
				openSlots: {
					one: {
						exists: true,
						pos: {x: 34, y: 2},
						user: null,
						sourceId: 1
					},
					two: {
						exists: false,
						pos: {x: null, y: null},
						user: null,
						sourceId: 1
					},
					three: {
						exists: false,
						pos: {x: null, y: null},
						user: null,
						sourceId: 1
					},
					four: {
						exists: false,
						pos: {x: null, y: null},
						user: null,
						sourceId: 1
					},
					five: {
						exists: false,
						pos: {x: null, y: null},
						user: null,
						sourceId: 1
					},
					six: {
						exists: false,
						pos: {x: null, y: null},
						user: null,
						sourceId: 1
					},
					seven: {
						exists: false,
						pos: {x: null, y: null},
						user: null,
						sourceId: 1
					},
					eight: {
						exists: false,
						pos: {x: null, y: null},
						user: null,
						sourceId: 1
					},
				}
			}
		}
	}
}

let retExist = s => {
	let exists = 0;
	let open = s.nodes.nodeOne.slots.openSlots;
	let n = Object.keys(open)[0];
	for(let i = 0; i < Object.keys(open).length; i++){
		let e = Object.values(open)[i];
		if(e.exists){
			// p(e.pos.x + " " + e.pos.y);
			isTaken(e)
		} 
	}
	// p(exists)
}

let isTaken = (location) => {
	// p(location)
	let idle = getIdle(hArr);
	// p(idle.name)
	idle.sourceId = location.sourceId;
	location.user = idle.name;
	p(location.user)
	p(idle.sourceId);
}

retExist(sources)

// p(Object.keys(sources.nodes.nodeOne.slots.openSlots)[0])
// p(Object.keys(sources.nodes.nodeOne.slots.openSlots).length)

// let s = sources.nodes.nodeOne.slots;
// p(s.length)

// let [a] = Object.keys(sources)
// // p(sources.nodes(a))
// // p(a)

// console.log(a)
// console.log(sources.nodes.nodeOne.slots["one"])
// let [a] = Object.keys(sources);
// console.log(a)

// console.log(sources[a]);
// let [b] = Object.keys(a)
// console.log(b)

// console.log(sources.nodes.nodeOne.slots)

let getAmount = s => {
	// return s.nodes.nodeOne.slots.amount;
	let exists = 0;
	for(let e in s.nodes.nodeOne.slots.openSlots){
		// if(e.exists){
		// 	exists++;
		// }
		// console.log(Object.values(e))
		console.log(e[0])
	}
	// return exists

}

// console.log(getAmount(sources))
// getAmount(sources)

