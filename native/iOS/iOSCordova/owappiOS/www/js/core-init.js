define(["utils","app"], function(Utils,App) {
	__CORE = function(){
		this.App = App;		
    	this.App.init();
	};
	__CORE.prototype = {};
	return new __CORE();
});