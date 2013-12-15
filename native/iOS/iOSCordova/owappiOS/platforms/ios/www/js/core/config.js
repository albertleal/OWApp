define([], function() {
	__CONFIG = function(){
		this.development = false;
		this.isLogEnabled = true;
	};
	__CONFIG.prototype = {
		init : function(){
			OWAUtils.log.isEnabled = this.isLogEnabled;
			OWAUtils.log.owa.write('Config init');
		}
	};
	return new __CONFIG();
});