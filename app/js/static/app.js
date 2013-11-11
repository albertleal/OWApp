define(["config","session","device"], function(Config, Session, Device) {
	__APP= function(){
		this.mobileOS = "";
	};
	__APP.prototype = {
		init: function(){
			Utils.log.owa.write('App init');
			Device.init();
			Config.init();
			Session.init();
			//if redirection, redirect
		}
	};
	return new __APP();
});