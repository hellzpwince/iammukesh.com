
function basicInitialization(){
    $(document).ready(function () {
        $('.sidenav').sidenav();
    });
    $('.preloader-bg-wrapper')
    .delay(1700)
    .fadeOut();

"use strict";

!function() {
  var t = window.driftt = window.drift = window.driftt || [];
  if (!t.init) {
    if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
    t.factory = function(e) {
      return function() {
        var n = Array.prototype.slice.call(arguments);
        return n.unshift(e), t.push(n), t;
      };
    }, t.methods.forEach(function(e) {
      t[e] = t.factory(e);
    }), t.load = function(t) {
      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(o, i);
    };
  }
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('v6em2pahphw3');
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
