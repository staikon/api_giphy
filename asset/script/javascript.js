<<<<<<< HEAD
/*var domready = function(){
    var _url = "http://api.giphy.com/v1/gifs/search?q=pingu&api_key=dc6zaTOxFJmzC"

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

$(document).ready(domready);*/
=======
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



































>>>>>>> devremi




<<<<<<< HEAD
var arlene2 = ["url 1", "url 2", "url 3"];
var counter = 0;

$(document).ready(function(){

})
=======


>>>>>>> devremi
