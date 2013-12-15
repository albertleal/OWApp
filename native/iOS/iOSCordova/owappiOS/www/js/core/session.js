define(["OWASession"], function(OWASession) {
	__SESSION= function(){
		this.userid = "";
	};
	__SESSION.prototype = {
		init: function(){
			OWAUtils.log.owa.write('Session init');
			OWASession.init();
		},
		checkCredentials : function(credentials){
			//credentials contains a key value, so the plugin can read and validate
			OWASession.checkCredentials(credentials);
		}
	};
	return new __SESSION();
});