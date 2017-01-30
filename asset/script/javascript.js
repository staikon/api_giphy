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




var arlene2 = ["url 1", "url 2", "url 3"];
var counter = 0;

$(document).ready(function(){

})

$(document).ready(function(){
        $('#facebook').mouseover(function(){
        $('#facebook').attr('src', 'Images/fb_replace.png');
    });
        $('#facebook').mouseout(function(){
        $('#facebook').attr('src', 'Images/fb.png');
    });
});

$(document).ready(function(){
        $('#linkedin').mouseover(function(){
        $('#linkedin').attr('src', 'Images/linkedin_replace.png');
    });

        $('#linkedin').mouseout(function(){
        $('#linkedin').attr('src', 'Images/linkedin.png');
    });
})

$(document).ready(function(){
        $('#twitter').mouseover(function(){
        $('#twitter').attr('src', 'Images/twitter_replace.png');
    });

        $('#twitter').mouseout(function(){
        $('#twitter').attr('src', 'Images/twitter.png');
    });
})


















