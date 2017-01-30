$(document).ready(function(){
    var images = ["acteur_1.jpg", "acteur_2.jpg", "acteur_3.jpg", "acteur_4.jpg"];
        $(function () {
            var i = 0;

            $("#section").css("background-image", "url(./Images/" + images[i] + ")");
            setInterval(function () {
                i++;

                if (i == images.length) {
                    i = 0;
                }

                $("#section").fadeOut("slow", function () {
                    $(this).css("background-image", "url(./Images/" + images[i] + ")");
                    $(this).fadeIn("slow");
                });
            }, 5000);
        });
});