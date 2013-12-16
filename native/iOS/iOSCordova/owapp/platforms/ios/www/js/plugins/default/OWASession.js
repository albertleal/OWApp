define([ 'OWAStorage'],function(OWAStorage) {
	__OWASession = function(){
		//do nothing
	};
	__OWASession.prototype = {
		init : function(){
			OWAUtils.log.owa.write('OWASession init');
		},
		checkCredentials : function(credentials) {
			OWAUtils.log.owa.write('OWASession checkCredentials');
			OWAUtils.log.owa.write(credentials);
		}
	};
	return new __OWASession();
});