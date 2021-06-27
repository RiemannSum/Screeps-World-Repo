var roles = {
	//import all creep roles here
}

Creep.prototype.runRole = () => roles[this.memory.role].run(this);