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
						user: "harvester1"
					},
					two: {
						exists: false,
						pos: {x: null, y: null},
						user: null
					},
					three: {
						exists: false,
						pos: {x: null, y: null},
						user: null
					},
					four: {
						exists: false,
						pos: {x: null, y: null},
						user: null
					},
					five: {
						exists: false,
						pos: {x: null, y: null},
						user: null
					},
					six: {
						exists: false,
						pos: {x: null, y: null},
						user: null
					},
					seven: {
						exists: false,
						pos: {x: null, y: null},
						user: null
					},
					eight: {
						exists: false,
						pos: {x: null, y: null},
						user: null
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
			p(e.pos.x + " " + e.pos.y);
		} 
	}
	// p(exists)
}

let isTaken = data => {

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

