


$(window).load(function() {
	
	// activate the loading image on window load
		$(".loading").fadeOut(300); 
		
		// activate the alerts on window load
		// $(".alert").show(800);	
});

$(document).ready(function(){

	

	// close the alerts on click of close button
	$(".close").click(function(){
		$(this).closest(".alert").hide(500);	
	})
	
});