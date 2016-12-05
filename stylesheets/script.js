/* to do on this project:
		show bootstrap grid knowledge
			have images with text under
			have multiple columns
			have everything centered
			use wrap
		use the parralax
			have the body scroll over the top picture
		use border radius to make circles
		use variables in sass
		use nesting in sass
		have the articles link to another page with scrollbar pics
			so make another html page (with allll the links- and make it in terminal
				under stylesheets)
			link it to the styles page
		separate out styles pages in sass separation
	
	In general: to practice using bootstrap and sass.
	
	*/




$(document).ready(function(){
	
	console.log("its a miracle");


	$(".linkDwarves").hover(function(){
	    $(".dwarves").css("background-color", "rgba(0,0,0,.5)");
	    $(".dwarves").css("color", "#fefefe");
	    }, function(){
	    $(".dwarves").css("background-color", "#fefefe");
	    $(".dwarves").css("color", "#000000")
	});

	$(".linkAragorn").hover(function(){
	    $(".king").css("background-color", "rgba(0,0,0,.5)");
	    $(".king").css("color", "#fefefe");
	    }, function(){
	    $(".king").css("background-color", "#fefefe");
	    $(".king").css("color", "#000000")
	});

	firstPic();

	function firstPic(){
	 	$(".side-scroll").click(function(){
	 		console.log('worked');
	 		$(".parallax").css("background-image","url('http://randomwallpapers.net/rivendell-waterfall-woods-forest-houses-architecture-2560x1600-wallpaper42307.jpg')");
	 		function switchPic(){
	 			$(".side-scroll").click(
	 				function(){
	 					console.log('worked again');
	 					$(".parallax").css("background-image","url('http://i.imgur.com/CNeKLa2.jpg')");
	 					firstPic();
	 				});
	 			};
	 		switchPic();
		});


	var widthGimli = $('.gimli').width();
	$('.gimli').css({'height':widthGimli+'px'});
	$('.gimli').css({'border-radius':widthGimli+ 'px'});
	 };

	// var widthAragorn = $('.aragorn').width();
	// $('.aragorn').css({'height':widthAragorn+'px'});
	// $('.aragorn').css({'border-radius':widthAragorn+ 'px'});
	//  };

	// function switchPic(){
	//  	$(".parallax").click(
	//  		function(){
	//  			console.log('worked again');
	//  			$(".parallax").attr("bacground-image","url('http://i.imgur.com/CNeKLa2.jpg')");
	//  			firstPic();
	//  	});
	// };
});