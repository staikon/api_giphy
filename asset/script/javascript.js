var domready = function(){
	var _url = "http://api.giphy.com/v1/gifs/search?q=space&api_key=dc6zaTOxFJmzC"

	$.get(_url, function(data){
		list_gif(data.data);
	});
}

var list_gif = function(gifs){
	for (var i = 0; i<gifs.length; i++) {
		var _g = gifs[i];

		console.log(_g)

		// if _g.images doesn't exist
		if(!_g.images) return;
		
		var _tpl = [
			'<li>',
				'<img src="' + _g.images.downsized.url + '"/>',
			'</li>'
		].join('');

		$('#gif ul').append(_tpl);
	}
}

$(document).ready(domready);