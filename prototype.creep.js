var roles = {
	//import all creep roles here
	harvester: require('role.harvester'),
	mover: require('role.mover')
};

// Creep.prototype.runRole = () => roles[this.memory.role].run(this);
Creep.prototype.runRole = 
	function(){
		roles[this.memory.role].run(this);
	}

// Creep.prototype.suicide = () = creep.say("RIP"); //not sure if thisll work

