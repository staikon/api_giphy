var domready = function(){
	var _url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC"

$.get(_url, function(data){
	console.log(data);
	console.log(data.data[0].images.downsized);



	var img = data.data[0].images.downsized.url;
	$('#gif img').attr('src', img);


});

}

$(document).ready(domready);