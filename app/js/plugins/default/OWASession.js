define([ 'OWAStorage'],function(OWAStorage) {
	__OWASession = function(){
		//do nothing
	};
	__OWASession.prototype = {
		init : function(){
			Utils.log.owa.write('OWASession init');
		},
		checkCredentials : function(credentials) {
			Utils.log.owa.write('OWASession checkCredentials');
			Utils.log.owa.write(credentials);
		}
	};
	return new __OWASession();
});