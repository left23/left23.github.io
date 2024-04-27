	
	$( document ).ready(function() {
		console.log( "document loaded" );
			
		$( "#slideOne" ).addClass("active");


		$( "#next" ).click(function() {
			$( "#slideOne" ).slideToggle('slow');
			$( "#slideTwo" ).slideToggle('slow');
			$( "#next" ).hide('slow');
		});

	
	});
