define([], function() {
	__DEVICE = function(){
		this.isWeb = false;
		this.isMobile = false;
		this.isTablet = false;
		this.isTv = false;
		this.userAgent = null;
	};
	__DEVICE.prototype = {
		init : function(){

			OWAUtils.log.owa.write('Device init');
			this.userAgent = navigator.userAgent;
			this.OS.init(this);
			this.Browser.init(this);
			this.Screen.init(this);
		},
		OS: {
			OSName : null,
			OSVersion : null,
			init : function(App){

				console.log(App.userAgent);

				this.OSName = "default";
				this.OSVersion = "1";

				if ((App.userAgent.indexOf("iPhone")!=-1) || (App.userAgent.indexOf("iPad")!=-1)) this.OSName="ios";
				if (App.userAgent.indexOf("Android")!=-1) this.OSName="android";
				if (App.userAgent.indexOf("Windows Phone")!=-1) this.OSName="windowsphone";

				console.log(this.OSName);

			}
		},
		Screen: {
			screenWidth : null,
			screenHeight : null,
			screenProportion : null,
			init : function (App){
				this.setScreenDimensions();

				$(window).on("resize",function(){
					OWACore.App.Device.Screen.setScreenDimensions();
				});
			}, 
			setScreenDimensions : function(){
				this.screenWidth = $(window).width();
				this.screenHeight = $(window).height();
				this.screenProportion = 
					this.screenHeight > this.screenWidth 
					? "portrait" : "landscape";
			}
		},
		Browser: {
			browserName : null,
			browserVersion : null, 
			browserFamily : null,
			browserCapabilities : null,
			init : function (App){
				browserName = "Safari";
				browserVersion = "7.0";
				browserFamily = "Webkit";
				browserCapabilities = {
					cssAnimations : true, 
					asyncLoads : true,
					integratedPDF : true
				}
				
			}
		}
	};
	return new __DEVICE();
});