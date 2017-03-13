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

<<<<<<< HEAD
stopBtn.addEventListener("click", playPause);
s.addEventListener("click",gifilm);

document.addEventListener('keyup', enter);



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

              /* CODE TO PLAY GIF WHEN YOU CLICK ON NARUTO */

var naruto = document.getElementById('naruto');
var compteur_naruto = 0;
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
    console.log('Le compteur est à:', compteur_naruto);
    compteur_naruto++
    $('#mgm').attr('src', liens_naruto[compteur_naruto]);

    if (compteur_naruto === liens_naruto.length) {
        compteur_naruto = 0;
        console.log('I have rebegin');
    }
};

function manga_naruto() {
    console.log('salut');
    interval = setInterval(nexNar, 4000);
    $('html, body').animate({scrollTop:0}, 'slow');
    $('#mgm').attr('src', liens_naruto[0]);
    
};
function player(){
    var audio = document.getElementById("audio");
    audio.play();
                 }
naruto.addEventListener('click', manga_naruto);
naruto.addEventListener('click', player);


                /* CODE TO PLAY GIF WHEN YOU CLICK ON STAR WARS */

var star = document.getElementById('star-wars');
var compteur_star = 0;
var liens_stars_wars = ["https://media.giphy.com/media/exwlj8Tzb0l6E/giphy.gif",
                        "https://media.giphy.com/media/jd6TVgsph6w7e/giphy.gif",
                        "https://media.giphy.com/media/ylyUQnqAdMNs4QITOE/giphy.gif",
                        "https://media.giphy.com/media/111hK9JV6d4pwI/giphy.gif",
                        "https://media.giphy.com/media/9gISqB3tncMmY/giphy.gif",
                        "https://media.giphy.com/media/xTiTntOKF6uzXbMX28/giphy.gif",
                        "https://media.giphy.com/media/gDBb286qDqqfm/giphy.gif",
                        "https://media.giphy.com/media/9Hvms9ErNz4bK/giphy.gif"];

function Nexwars(){
    // counter 
    // src > img suivante counter +1 
    console.log('Le compteur est à:', compteur_star);
    compteur_star++   
    $('#mgm').attr('src', liens_stars_wars[compteur_star]);

    if (compteur_star === liens_stars_wars.length) {
        compteur_star = 0;
        console.log('I have rebegin');
    }
};

function manga_starwars() {
    console.log('salut');
    interval = setInterval(Nexwars, 4000);
    $('html, body').animate({scrollTop:0}, 'slow');
    $('#mgm').attr('src', liens_stars_wars[0]);
    
};
function player2(){
    var audio = document.getElementById("audio2");
    audio.play();
}
star.addEventListener('click', manga_starwars);
star.addEventListener('click', player2); 


               /* CODE TO PLAY GIF WHEN YOU CLICK ON DBZ */

var dragon = document.getElementById('dbz');
var compteur_dbz = 0;
var liens_dbz = ["https://media.giphy.com/media/plvKNr6jkJyx2/giphy.gif",
                 "https://media.giphy.com/media/zk3yscEImLBkI/giphy.gif",
                 "https://media.giphy.com/media/xmsywpHbciEOQ/giphy.gif",
                 "https://media.giphy.com/media/zMvWsN8mKYhkA/giphy.gif",
                 "https://media.giphy.com/media/qkwhNjQ8q5aww/giphy.gif",
                 "https://media.giphy.com/media/O7u3gnXxDLwPe/giphy.gif",
                 "https://media.giphy.com/media/tiefe2tlwklvG/giphy.gif",
                 "https://media.giphy.com/media/nvC1xmLwiF2KY/giphy.gif",
                 "https://media.giphy.com/media/QYaytbOjxQgE/giphy.gif",
                 "https://media.giphy.com/media/V4W6KQNzQdrk4/giphy.gif",
                 "https://media.giphy.com/media/RvpMP7BUfCzsI/giphy.gif"];

function Nexdbz(){
    // counter 
    // src > img suivante counter +1 
    compteur_dbz++
    $('#mgm').attr('src', liens_dbz[compteur_dbz]);
    if (compteur_dbz === liens_dbz.length) {
        compteur_dbz = 0;
    }
};

function manga_dbz() {
    console.log('salut');
    interval = setInterval(Nexdbz, 4000);
    $('html, body').animate({scrollTop:0}, 'slow');
    $('#mgm').attr('src', liens_dbz[0]);
    
};

function player3(){
    var audio = document.getElementById("audio3");
    audio.play();
}

dragon.addEventListener('click', manga_dbz);
dragon.addEventListener('click', player3); 


                              /* CODE TO PLAY GIF WHEN YOU CLICK ON SPORT */

var sport = document.getElementById('sport');
var compteur_sport = 0;
var liens_sport = ["https://media.giphy.com/media/WZJUjrALa7ues/giphy.gif",
                   "https://media.giphy.com/media/m11v7VUFG34Jy/source.gif",
                   "https://media.giphy.com/media/wrlwhqMiObJbq/giphy.gif",
                   "https://media.giphy.com/media/w1RWxCh9rdfTa/giphy.gif",
                   "https://media.giphy.com/media/x7aWL6RgYI8pO/giphy.gif",
                   "https://media.giphy.com/media/R340AjhdUZa0w/giphy.gif",
                   "https://media.giphy.com/media/EeE8NUo8xso1O/giphy.gif",
                   "https://media.giphy.com/media/RKErWO0pBuFBC/giphy.gif",
                   "https://media.giphy.com/media/tcEma0KOFtPq0/giphy.gif",
                   "https://media.giphy.com/media/tPMBQ41Z8fpsI/giphy.gif",
                   "https://media.giphy.com/media/EyVxOeft053sQ/giphy.gif",
                   "https://media.giphy.com/media/l3UcrzdGIEDCiy4Ra/giphy.gif"];

function Nexsport(){
    // counter 
    // src > img suivante counter +1 
    compteur_sport++   
    $('#mgm').attr('src', liens_sport[compteur_sport]);
    if (compteur_sport === liens_sport.length) {
        compteur_sport = 0;
        console.log('I have rebegin');
    }
};

function manga_sport() {
    console.log('salut');
    interval = setInterval(Nexsport, 4000);
    $('html, body').animate({scrollTop:0}, 'slow');
    $('#mgm').attr('src', liens_sport[0]);
    
};

sport.addEventListener('click', manga_sport);
sport.addEventListener('click', player); 


                        /* CODE TO PLAY GIF WHEN YOU CLICK ON GAGS */

var gags = document.getElementById('gags');
var compteur_gags = 0;
var liens_gags = ["https://media.giphy.com/media/tNcoKWpmA3cha/giphy.gif",
                  "https://media.giphy.com/media/QMwTIB8OZKapG/giphy.gif",
                  "https://media.giphy.com/media/zIyCA3CIfI87u/giphy.gif",
                  "https://media.giphy.com/media/o6j0BQXhuMxiw/giphy.gif",
                  "https://media.giphy.com/media/XxjjUXWeJc2Gs/giphy.gif",
                  "https://media.giphy.com/media/tJzogw7sMFjvW/giphy.gif",
                  "https://media.giphy.com/media/YFF191Sb3TFWU/giphy.gif",
                  "https://media.giphy.com/media/uWlrD5DoQTMek/giphy.gif"];

function Nexgags(){
    // counter 
    // src > img suivante counter +1 
    compteur_gags++   
    $('#mgm').attr('src', liens_gags[compteur_gags]);
    if (compteur_gags === liens_gags.length) {
        compteur_gags = 0;
        console.log('I have rebegin');
    }
};

function manga_gags() {
    interval = setInterval(Nexgags, 6000);
    $('html, body').animate({scrollTop:0}, 'slow');
    $('#mgm').attr('src', liens_gags[0]);
    
};

gags.addEventListener('click', manga_gags);
gags.addEventListener('click', player); 


                                        /* CODE TO PLAY GIF WHEN YOU CLICK ON MARVEL */

var marvel = document.getElementById('marvel');
var compteur_marvel = 0;
var liens_marvel = ["https://media.giphy.com/media/3o6QL6BkYYlWuu66oE/giphy.gif",
                  "https://media.giphy.com/media/l0GtHKNRABmEA1rTa/giphy.gif",
                  "https://media.giphy.com/media/WZxBTBMtH59yU/giphy.gif",
                  "https://media.giphy.com/media/zyXRFoP3rOX2o/giphy.gif",
                  "https://media.giphy.com/media/RNC7CVis3XfJ6/giphy.gif",
                  "https://media.giphy.com/media/qZSfz7xzEBWus/giphy.gif",
                  "https://media.giphy.com/media/8gC4Ge9du9ylG/giphy.gif",
                  "https://media.giphy.com/media/pn3kw98Oapzi0/giphy.gif",
                  "https://media.giphy.com/media/rEGWdDDnT2c8w/giphy.gif",
                  "https://media.giphy.com/media/8hJjWcvSzInbG/giphy.gif"];

function Nexmarvel(){
    // counter 
    // src > img suivante counter +1 
    compteur_marvel++   
    $('#mgm').attr('src', liens_marvel[compteur_marvel]);
    if (compteur_marvel === liens_marvel.length) {
        ccompteur_marvel = 0;
        console.log('I have rebegin');
    }
};

function manga_marvel() {
    interval = setInterval(Nexmarvel, 4500);
    $('html, body').animate({scrollTop:0}, 'slow');
    $('#mgm').attr('src', liens_marvel[0]);
    
};

function player4(){
    var audio = document.getElementById("audio4");
    audio.play();
}

marvel.addEventListener('click', manga_marvel);
marvel.addEventListener('click', player4); 
