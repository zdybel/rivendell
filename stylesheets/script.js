$(document).ready(function(){
	
	console.log("its a miracle");

	firstPic();

	function firstPic(){
	 	$(".parallax").click(function(){
	 		console.log('worked');
	 		$(".parallax").css("background-image","url('http://randomwallpapers.net/rivendell-waterfall-woods-forest-houses-architecture-2560x1600-wallpaper42307.jpg')");
	 		function switchPic(){
	 			$(".parallax").click(
	 				function(){
	 					console.log('worked again');
	 					$(".parallax").css("background-image","url('http://i.imgur.com/CNeKLa2.jpg')");
	 					firstPic();
	 				});
	 			};
	 		switchPic();
		});
	 };

	// function switchPic(){
	//  	$(".parallax").click(
	//  		function(){
	//  			console.log('worked again');
	//  			$(".parallax").attr("bacground-image","url('http://i.imgur.com/CNeKLa2.jpg')");
	//  			firstPic();
	//  	});
	// };
});