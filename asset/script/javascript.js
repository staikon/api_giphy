var data, 
	interval, 
	counter = 0;
var s = document.getElementById('submit');

var getGifs = function(query){
	$.get('http://api.giphy.com/v1/gifs/search?q='+ query +'&api_key=dc6zaTOxFJmzC', function(res){
		data = res.data;

		counter = 0;
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

function enter(k) {
	if (k.keyCode === 13) {
		gifilm();
	}
}

var gifilm = function () {
	c = document.getElementById('input').value;
	res = c.replace(" ","+");
	getGifs(c);
}

s.addEventListener("click",gifilm);
document.addEventListener('keyup', enter);

//$(document).ready(gifilm);




$(document).ready(function(){
        $('#facebook').mouseover(function(){
        $('#facebook').attr('src', './Images/Facebook_replace.png');
    });
        $('#facebook').mouseout(function(){
        $('#facebook').attr('src', './Images/Facebook.png');
    });
});

$(document).ready(function(){
        $('#linkedin').mouseover(function(){
        $('#linkedin').attr('src', './Images/Linkedin_replace.png');
    });

        $('#linkedin').mouseout(function(){
        $('#linkedin').attr('src', './Images/Linkedin.png');
    });
})

$(document).ready(function(){
        $('#github').mouseover(function(){
        $('#github').attr('src', './Images/Github_replace.png');
    });

        $('#github').mouseout(function(){
        $('#github').attr('src', './Images/Github.png');
    });
})

$(document).ready(function(){
        $('#instagram').mouseover(function(){
        $('#instagram').attr('src', './Images/Instagram_replace.png');
    });

        $('#instagram').mouseout(function(){
        $('#instagram').attr('src', './Images/Instagram.png');
    });
})



var naruto = document.getElementById('naruto');
var compteur = 0;
var liens_naruto = ["https://media.giphy.com/media/hMAhEUs3fwEbC/giphy.gif",
                    "https://media.giphy.com/media/ii8IXS5efvHoc/giphy.gif",
                    "https://media.giphy.com/media/khSY1zJTTu9Py/giphy.gif",
                    "https://media.giphy.com/media/JXe5usjKfuzLi/giphy.gif",
                    "https://media.giphy.com/media/XBzKr2y8ml62Q/giphy.gif",
                    "https://media.giphy.com/media/s9cpk9XyM9f4k/giphy.gif",
                    "https://media.giphy.com/media/o2xt2tGDKrf2w/giphy.gif"];

function nexNar(){
    // counter 
    // src > img suivante counter +1 
    console.log('Le compteur est à:', compteur);
    compteur++   
    $('#mgm').attr('src', liens_naruto[compteur]);

    if (compteur === liens_naruto.length) {
        compteur = 0;
        console.log('I have rebegin');
    }
};

function newDoc() {
    console.log('salut');
    interval = setInterval(nexNar, 4000);
    $('html, body').animate({scrollTop:0}, 'slow');
    $('#mgm').attr('src', liens_naruto[0]);
    
};
function player(){
    var audio = document.getElementById("audio");
    audio.play();
                 }
naruto.addEventListener('click', newDoc);
naruto.addEventListener('click', player);