define(["config","session","device"], function(Config, Session, Device) {
	__APP= function(){
		this.Config = Config;
		this.Device = Device;
		this.Session = Session;
	};
	__APP.prototype = {
		init: function(){
			OWAUtils.log.owa.write('App init');
			Device.init();
			Config.init();
			Session.init();
			//if redirection, redirect
		}
	};
	return new __APP();
});