$(document).ready(function(){
	
	// waypoints
	$(".js-sticky").waypoint(function(direction){
		if(direction=="down"){
			$("nav").addClass("sticky");
		}else{
			$("nav").removeClass("sticky");
		}
	});
	
	// mixitup
	var mixer = mixitup('.mixfilter');
	
});