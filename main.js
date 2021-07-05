require('prototype.creep');
let harvester = require('role.harvester')

//Find all sources in the room 
let e = _.filter(Game.spawns['Spawn1'].room.find(FIND_SOURCES));
// console.log(e.length)

let findLocations = sourceArray => {
	let arr = [];
	//Create an array for each source
	for(let i = 0; i < e.length; i++){
		arr.push(terrain(e[i]));
	}
	//Set value to numberof open slots per source
	// for(let i = 0; i < arr.length; i++){
	// 	arr[i] = terrain(e[i]);
	// }

	return arr;
}

let terrain = obj => {
	//Return array of all room terrain
	let range = Game.rooms.sim.getTerrain();
	let openSlots = 0;

	//Itterate over sources for open slots
	for(let i = 0; i < 3; i++){
		for(let j = 0; j < 3; j++){
			if(range.get(obj.pos.x - 1 + i % 3, obj.pos.y - 1 + j % 3) == 0){
				//Count number of open spots around the source
				openSlots++;
				//You wont remember how this works anyways
				// Game.rooms.sim.createConstructionSite(obj.pos.x - 1 + i % 3, obj.pos.y - 1 + j % 3, STRUCTURE_ROAD)
			}
		}
	}
	// console.log("Open Slots: " + openSlots);
	return openSlots;
	
}

let getLocation = energy => {
	// console.log(energy.Id)
	let range = Game.rooms.sim.getTerrain();
	for(let i = 0; i < 3; i++){
		for(let j = 0; j < 3; j++){
			if(range.get(energy.pos.x - 1 + i % 3, energy.pos.y - 1 + j % 3) == 0){
				// console.log(energy.pos.x + i + " " + energy.pos.y + j);
				let openX = energy.pos.x - i + 1;
				let openY = energy.pos.y - j + 1;
				console.log(openX + " " + openY);
			}
		}
	}
}

module.exports.loop = function(){

	//Erase unused creep memory
	for(let name in Memory.creeps){
		if(Game.creeps[name] == undefined){
			delete Memory.creeps[name];
		}
	}

	for(let name in Game.creeps){
		Game.creeps[name].runRole();
	}

	// console.log(e[1].pos.x + " " + e[1].pos.y)
	// for(let name in Game.creeps){
	// 	let creep = Game.creeps[name];
	// 	if(creep.memory.role == 'harvester'){
	// 		harvester.run(creep);
	// 	}
	// }

	// console.log(e[0].id)
	// console.log(e[0].pos.x + " " + e[0].pos.y)
	// console.log(e[0].pos.top)

	// findLocations(e[0])
	// let t = Game.rooms.sim.getTerrain();
	// console.log(t.get(e[0].pos.x+1, e[0].pos.y+1))
	// console.log(t.get(32,13))

	// terrain(e[3]);
	let sources = findLocations(e);
	getLocation(e[2]);

	// console.log(e[0].pos.y)
	// console.log(sources.length)
	// console.log(e[3].pos.x + " " + e[3].pos.y)

	// Game.spawns['Spawn1'].spawnCreep([WORK, MOVE], 
	// 	'mover' + Game.time, 
	// 	{memory: {role: 'mover', posX: 3, posY: 9}})

	let harvesterArr = [];
	for(let i = 0; i < sources.length; i++){
		harvesterArr.push([])
		for(let j = 0; j < sources[i]; j++){
			harvesterArr[i].push(null);
		}
	}
	let state = 0;

	switch(state){
		case 0:
			//we need to make harvesters
			// console.log(harvesterArr.length)
			//Select a source to comit to harvester memory
			let targetSource = 0;


			for(let i = 0; i < harvesterArr.length; i++){
				for(let j = 0; j < harvesterArr[i].length; j++){
					if(harvesterArr[i][j] == null){
						// console.log(i + " " + j)
						harvesterArr[i][j] = Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 
							'harvester' + Game.time, 
							{memory: {role: 'harvester', sourceId: e[targetSource].id}});
						// console.log(targetSource);
					}
					else{
						targetSource++;
					}
				}
			}
			break
		case 1:
			//we need to make builders
			break

		default:
			//idgaf what you do
			console.log("how the fuck did you end up here") //Commit this
			break
	}
}