
console.log("asdasd")

let e = _.filter(Game.spawns['Spawn1'].room.find(FIND_SOURCES));
// console.log(e.length)

let findLocations = obj => {
	let area = Game.rooms.sim.lookAtArea(obj.pos.x-1, obj.pos.y-1, obj.pos.x+1, obj.pos.y+1);
	console.log(area.length)
}

let terrain = obj => {
	//Return array of all room terrain
	let range = Game.rooms.sim.getTerrain();
	let openSlots = 0;

	//Itterate over sources for open slots
	for(let i = 0; i < 3; i++){
		for(let j = 0; j < 3; j++){
			if(range.get(obj.pos.x - 1 + i % 3, obj.pos.y - 1 + j % 3) == 0){
				// openSlots++;
				//You wont remember how this works anyways
				Game.rooms.sim.createConstructionSite(obj.pos.x - 1 + i % 3, obj.pos.y - 1 + j % 3, STRUCTURE_ROAD)
			}
		}
	}
	
}

module.exports.loop = function(){
	// console.log(e[0].pos.x + " " + e[0].pos.y)
	// console.log(e[0].pos.top)

	// findLocations(e[0])
	// let t = Game.rooms.sim.getTerrain();
	// console.log(t.get(e[0].pos.x+1, e[0].pos.y+1))
	// console.log(t.get(32,13))

	terrain(e[3]);
	// console.log(room.name)
}