$(document).on('ready',function(){
    setInterval(whaka,500);
  });
	
	
			var score=0;



	function whaka(){
		var mole = $(".mole").toArray();
		var elemlength = mole.length;
		var randomnum = Math.floor(Math.random()*elemlength);
		var randomitem = mole[randomnum];
		//$(randomitem).css("display", "block").addClass("active");
		$(randomitem).removeClass("explode").toggle().toggleClass("active");
	}
	
	
$(document).ready(function(){

	//$("#container").css( 'cursor', 'url(mallet.png), auto' );

	$(".mole").click(function() {
	//alert("!! whaka !!");
	score = score+1;
	
	$(".score span").html(score);
	
		if ($(this).hasClass("active")) {
			$(this).addClass("explode").delay( 800 ).hide(0);
		}
	});
	
});



