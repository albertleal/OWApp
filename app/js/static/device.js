define([], function() {
	__DEVICE = function(){
		this.isWeb = false;
		this.isMobile = false;
		this.isTablet = true;

		this.operativeSistem ="";
		this.browser="";
		this.browser.version="";
		
		this.name="";
	};
	__DEVICE.prototype = {
		init : function(){
			Utils.log.owa.write('Device init');
		}
	};
	return new __DEVICE();
});