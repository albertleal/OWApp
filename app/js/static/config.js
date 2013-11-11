define([], function() {
	__CONFIG = function(){
		this.development = false;
		this.isLogEnabled = true;
	};
	__CONFIG.prototype = {
		init : function(){
			Utils.log.isEnabled = this.isLogEnabled;
			Utils.log.owa.write('Config init');
		}
	};
	return new __CONFIG();
});