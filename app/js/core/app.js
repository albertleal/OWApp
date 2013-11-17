define(["config","session","device","navigation", "animation"], 
	function(Config, Session, Device, Navigation, Animation) {
	__APP= function(){
		this.Config = Config;
		this.Device = Device;
		this.Session = Session;
		this.Navigation = Navigation;
		this.Animation = Animation;
		this.redirect = null;
	};
	__APP.prototype = {
		init: function(){
			OWAUtils.log.owa.write('App init');
			Device.init();
			Config.init();
			Session.init();
			//if redirection, redirect
			this.navigateToInitialPage;
		},
		navigateToInitialPage: function(){
			if(this.Config.enableRedirection && this.redirect != null){

			}else{
				Navigation.navigateHome();
			}
		},
	};
	return new __APP();
});