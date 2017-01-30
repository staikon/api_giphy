var data, 
	interval, 
	counter = 0;
var s = document.getElementById('button');

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

function enter(k) {
	if (k.keyCode === 13) {
		domready();
	}
}

var domready = function () {
	c = document.getElementById('test').value;
	res = c.replace(" ","+");
	getGifs(c);
}

s.addEventListener("click",domready);
document.addEventListener('keyup', enter);

$(document).ready(domready);




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













