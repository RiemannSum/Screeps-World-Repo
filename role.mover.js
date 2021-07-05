var mover = {
	run: function(creep){
		creep.memory.x = 3;
		creep.memory.y = 7;

		creep.moveTo(creep.memory.posX, creep.memory.posY)
	}
}

module.exports = mover;