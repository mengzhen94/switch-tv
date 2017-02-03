//'https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2?callback=?'
	/*$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+ channels[0] + '?callback=?', function(data) {
  		console.log(data);
  	});*/
/*if(data.stream !== null) {
  				//console.log(data.stream.game);
  				//console.log(data.stream.channel.display_name);
  				//console.log(data.stream.channel.logo);
}*/
//url : https://www.twitch.tv/esl_sc2
  			//var url = data.stream != null ? data.stream.channel.url : "#";
//var name = data.stream != null ? data.stream.channel.display_name : "Closed";
/*
			<div>
				<img src="" alt="logo" class="logo">
				<a href="" class="name"></a>
				<
			</div>
*/
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

function getChannel(){

	channels.forEach(function(channel){
		$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+ channel + '?callback=?', function(data) {
  			//console.log(data);
  			var name = channel;
  			//console.log(name);
  			var logo = data.stream != null ? data.stream.channel.logo : "https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_image-9021dccf9399929e-300x300.jpeg/alt=";
  			//console.log(logo);
  			var game = data.stream != null ? data.stream.channel.game : "No Game";
  			//console.log(game);
  			var status = data.stream != null ? "Online" : "Offline";
  			//console.log(status);
  			var url = "https://www.twitch.tv/" + name;
  			//console.log(url);
  			if(data.stream != null){
  				var each_html = '<div class="row ' + 
          					status + '"><div id="icon" class="col-xs-2 col-sm-1"><img class="logo" src=' 
  							+ logo + ' alt="logo"></div><div id="name" class="col-xs-10 col-sm-3"><a href='
  			 				+ url + ' target="_blank ">' + name + '</a></div><div class="col-xs-10 col-sm-7" id="streaming"> GAME : ' 
  			 				+ game + ', <span class="hidden-xs">STATUS:    '  
  			 				+ status + '</span></div></div>';
  				$("#display").prepend(each_html);
  			}else{

  				var each_html = '<div class="row ' + 
          					status + '"><div id="icon" class="col-xs-2 col-sm-1"><img class="logo" src=' 
  							+ logo + ' alt="logo"></div><div id="name" class="col-xs-10 col-sm-3"><a href='
  			 				+ url + ' target="_blank ">' + name + '</a></div><div class="col-xs-10 col-sm-7" id="streaming">CLOSED</div></div>';
  				$("#display").append(each_html);
  			}
  			
  			

  		});
	});
}

$(document).ready(function() {
  getChannel();
  $(".selector").on('click',function(){
  	$(".selector").removeClass("active");
  	$(this).addClass("active");
  	var status = $(this).attr("id");
  	//console.log(status);
  	if(status === "all") $(".Offline ,.Online").removeClass("hidden");
  	else if(status === "Offline"){
  		$(".Offline").removeClass("hidden");
  		$(".Online").addClass("hidden");
  	}else{
  		$(".Online").removeClass("hidden");
  		$(".Offline").addClass("hidden");
  	}
  });
});




