// ==UserScript==
// @name               Apple Music - English Translation
// @version            1.0
// @description        Translate the words on Apple Music to English
// @author             MrBukLau
// @homepage           https://github.com/MrBukLau/userscripts
// @icon               https://music.apple.com/assets/favicon/favicon-180-c132a95549a91ae6983a4914da3e1c44.png
// @include            *music.apple.com*
// @grant              none
// @run-at             document-start
// ==/UserScript==

var oldUrlSearch = window.location.search;

if (window.location.href.indexOf("?i=") > -1) {
    if (!/\&l=en$/.test(oldUrlSearch)) {
        var newURL = window.location.protocol + "//" +
            window.location.host +
            window.location.pathname +
            oldUrlSearch + "&l=en" +
            window.location.hash;
        window.location.replace(newURL);
    }
} else {
    if (!/\?l=en$/.test(oldUrlSearch)) {
        var newURL = window.location.protocol + "//" +
            window.location.host +
            window.location.pathname +
            oldUrlSearch + "?l=en" +
            window.location.hash;
        window.location.replace(newURL);
    }
}