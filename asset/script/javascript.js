var data, 
	interval, 
	isPlaying = false,
	counter_gif = 0;

var s = document.getElementById('submit');
var stopBtn = document.getElementById('mgm');

var getGifs = function(query){
	$.get('http://api.giphy.com/v1/gifs/search?q='+ query +'&api_key=dc6zaTOxFJmzC', function(res){
		data = res.data;
		console.log(data);

		isPlaying = true;

		counter_gif = 0;
		clearInterval(interval);


		nextGif();
		interval = setInterval(nextGif, 2000);

	});
};

function nextGif(){
	if(counter_gif === data.length-1){
		clearInterval(interval);
		return;
	}	

	var _gif = data[counter_gif];
	counter_gif++;

	console.log(counter_gif);

	$('#mgm').attr('src', _gif.images.downsized.url);
}




function playPause(){

	if (isPlaying == true){
		clearInterval(interval);
		isPlaying = false;
	}
	else {
		isPlaying = true;
		clearInterval(interval);
		interval = setInterval(nextGif, 2000);

	}

}

function enter(k) {
	if (k.keyCode === 13) {
		gifilm();
	}
}

function gifilm() {
	c = document.getElementById('input').value;
	res = c.replace(" ","+");
	getGifs(c);
}

stopBtn.addEventListener("click", playPause);
s.addEventListener("click",gifilm);
document.addEventListener('keyup', enter);

$(document).ready(gifilm);




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










