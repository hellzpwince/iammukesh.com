
function basicInitialization(){
    $(document).ready(function () {
        $('.sidenav').sidenav();
    });
    $('.preloader-bg-wrapper')
    .delay(1700)
    .fadeOut();
}
function homePageInitialization(){
    $(document).ready(function () {
        $('.sidenav').sidenav();
        $('.carousel').carousel({
            fullWidth: true,
        });
        var typed = new Typed("#typed", {
            // Waits 1000ms after typing "First"
            strings: ["YOUR HOST ^3000", "I DEVELOP 💻/📱 APPS  ^3000", "I'M A DESIGNER TOO 😉 ^3000", "I ❤️ MAKING VIDEOS ^3000", "LOOKING FOR HELP? ^2000", "PING ME NOW 😄 ^3000"],
            typeSpeed: 40,
            smartBackspace: true,
            backSpeed: 30,
            startSpeed: 100,
            loop: true,
        });
    }); 
}

function previousTestimonial(){
    $('.carousel').carousel('prev');
}

function nextTestimonial(){
    $('.carousel').carousel('next');
}
