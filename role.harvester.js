var harvester = {
	run: function(creep){

		// creep.room.createConstructionSite(creep.pos.x, creep.pos.y, 'road');

		if(creep.store.getFreeCapacity() > 0){
			creep.memory.sourceId = creep.pos.findClosestByRange(FIND_SOURCES).id;
			const source = Game.getObjectById(creep.memory.sourceId);
			if(creep.harvest(source) == ERR_NOT_IN_RANGE){
				creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
			}
		}
		else{
			var targets = creep.room.find(FIND_STRUCTURES, {
	          filter: (structure) => {
	            return (structure.structureType == STRUCTURE_EXTENSION ||
	              structure.structureType == STRUCTURE_SPAWN) &&
	              structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
	          }
	        });
			if(targets.length > 0){
				for(let i in targets){
					if(creep.transfer(targets[i], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
						creep.moveTo(targets[i], {visualizePathStyle: {stroke: '#ffaa00'}});
					}
				}
			}
		}
	}
}

module.exports = harvester;
