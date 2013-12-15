define([], function() {
	__NAVIGATION = function(){
		this.navigationStack = null;
		this.modalDissmissID = null;
	};
	__NAVIGATION.prototype = {
		pageAnimation:{
			push:{
				left: function(form, to, isForward, isForward){

					},
					right: function(form, to, isForward, isForward){

					},
					withHeader:{
						left: function(form, to, isForward, isForward){

						},
						right: function(form, to, isForward, isForward){

						}
					}
			},
			modal:{
				full: function(withid, withContent){
					$("#modalLayer").append(
						"<div class='modalElement full' id='"+withid+"''>"+withContent+"</div>"
					);
				},
				center: function(withid, withContent){
					$("#modalLayer").append(
						"<div class='modalElement center' id='"+withid+"''>"+withContent+"</div>"
					);
				},
				dismiss: function(withid){
					console.log(withid);
					$('.modalElement#'+withid).addClass("sensual");
					$("body").removeClass("modalLayer");
					OWACore.App.Animation.modalDissmissID= withid;
					
					setTimeout(function(){
						var id = OWACore.App.Animation.modalDissmissID;
						$('.modalElement#'+id).remove();
					},200);//time depends on "sensual" animation duration
					
					
				},
				push:{
					left: function(form, to, isForward, isForward){

					},
					right: function(form, to, isForward, isForward){

					},
					withHeader:{
						left: function(form, to, isForward, isForward,  modalID){

						},
						right: function(form, to, isForward, isForward,  modalID){

						}
					}
				},
			},
			popOver:{
				center: function(withid, withContent){
					$("#popOverLayer").append(
						"<div class='popOverElement' id='"+withid+"''>"+withContent+"</div>"
					);
				},
				dismiss: function(withid){
					$('.popOverElement#'+withid).remove();
					$("body").removeClass("popOverLayer");
				}
			}
		}
	};
	return new __NAVIGATION();
});