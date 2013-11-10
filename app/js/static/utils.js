__Utils= function(){

};
__Utils.prototype = {
	log: {
		isEnabled : true,
		write : function(msg){
			Utils.log.isEnabled ? console.log(msg) : '';	
		},
		warn : function(msg){
			Utils.log.isEnabled ? console.warn(msg) : '';	
		},
		error : function(msg, handler){
			Utils.log.isEnabled ? console.error(msg,handler) : '';
		}
	}
};
var Utils = new __Utils();