define([], function() {
	__NAVIGATION = function(){
		this.navigationStack = null;
	};
	__NAVIGATION.prototype = {
		navigateForward: function(from, to, animation, parameters){

		},
		navigateBackward: function(from, to, animation, parameters){

		},
		navigateModal: function(from, to, animation, parameters){

		},
		navigateHome: function(from, to, animation, parameters){
			
		}
	};
	return new __NAVIGATION();
});