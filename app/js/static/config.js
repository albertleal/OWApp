__CONFIG = function(){
	this.development = false;
	this.isLogEnabled = true;
};
__CONFIG.prototype = {
	init : function(){
		Utils.log.isEnabled = this.isLogEnabled;
		Utils.log.write('Config init');
	}
};
var Config = new __CONFIG();