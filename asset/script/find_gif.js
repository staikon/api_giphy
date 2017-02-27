var domready = function(){
	var _url = "http://api.giphy.com/v1/gifs/search?q=naruto/offset=2&api_key=dc6zaTOxFJmzC"

	//je nomme les gifs
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
		
		// je fait un template
		var _tpl = [
			'<li>',
				//J'OUBLIE PAS DE FERMER LA BALISE
				'<img src="' + _g.images.downsized.url + '"/>',
			'</li>'
		].join('');

		$('#gif ul').append(_tpl);
	}
}

$(document).ready(domready);