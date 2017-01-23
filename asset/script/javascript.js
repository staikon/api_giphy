var data, 
	interval, 
	counter = 0;

var getGifs = function(query){
	$.get('http://api.giphy.com/v1/gifs/search?q='+ query +'&api_key=dc6zaTOxFJmzC', function(res){
		data = res.data;

		clearInterval(interval);

		nextGif();
		interval = setInterval(nextGif, 2000);
	});
};

var nextGif = function(){
	if(counter === data.length-1){
		clearInterval(interval);
		return;
	}	

	var _gif = data[counter];
	counter++;

	console.log(_gif.images.downsized.url);

	$('#mgm').attr('src', _gif.images.downsized.url);
}

var domready = function () {
	getGifs('pingu');
}

$(document).ready(domready);









































