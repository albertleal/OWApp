__Utils= function(){
};
__Utils.prototype = {
	test : function(){
		return OWACore.App.Device.OS.mobileOSName;
	},
	log: {
		isEnabled : true,
		write : function(msg){
			this.isEnabled ? console.log(msg) : '';	
		},
		warn : function(msg){
			this.isEnabled ? console.warn(msg) : '';	
		},
		error : function(msg, handler){
			this.isEnabled ? console.error(msg,handler) : '';
		},
		owa: {
			isOWAEnabled : true,
			write : function(msg){
				this.isOWAEnabled ? console.log(msg) : '';	
			},
			warn : function(msg){
				this.isOWAEnabled ? console.warn(msg) : '';	
			},
			error : function(msg, handler){
				this.isOWAEnabled ? console.error(msg,handler) : '';
			}
		}
	}
};
var OWAUtils = new __Utils();