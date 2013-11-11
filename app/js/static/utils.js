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
		},
		owa: {
			isOWAEnabled : true,
			write : function(msg){
				Utils.log.owa.isOWAEnabled ? console.log(msg) : '';	
			},
			warn : function(msg){
				Utils.log.owa.isOWAEnabled ? console.warn(msg) : '';	
			},
			error : function(msg, handler){
				Utils.log.owa.isOWAEnabled ? console.error(msg,handler) : '';
			}
		}
	}
};
var Utils = new __Utils();