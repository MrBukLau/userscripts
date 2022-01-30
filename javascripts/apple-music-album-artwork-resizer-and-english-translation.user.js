// ==UserScript==
// @name               Apple Music - Album Artwork Resizer and English Translation
// @namespace          https://github.com/MrBukLau
// @version            1.0
// @description        Change the image format/resolution for album artworks on Apple Music and also translate everything to English on Apple Music
// @author             MrBukLau
// @homepageURL        https://github.com/MrBukLau/userscripts
// @supportURL         https://github.com/MrBukLau/userscripts/issues
// @downloadURL        https://github.com/MrBukLau/userscripts/raw/master/javascripts/apple-music-album-artwork-resizer-and-english-translation.user.js
// @updateURL          https://github.com/MrBukLau/userscripts/raw/master/javascripts/apple-music-album-artwork-resizer-and-english-translation.user.js
// @icon               https://music.apple.com/assets/favicon/favicon-180-c132a95549a91ae6983a4914da3e1c44.png
// @match              *://*mzstatic.com/image/thumb*
// @match              *://music.apple.com/*
// @grant              none
// @run-at             document-start
// ==/UserScript==

if (document.location.href.includes("music.apple.com")) {
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
} else if (document.location.href.includes("mzstatic.com/image/thumb")) {
    if (location.href.match("600x600bb.webp")) {
        location.href = location.href.replace("600x600bb.webp", "2000x2000.jpeg");
    } else if (location.href.match("600x600bf.webp")) {
        location.href = location.href.replace("600x600bf.webp", "2000x2000.jpeg");
    } else if (location.href.match("1000x1000bb.webp")) {
        location.href = location.href.replace("1000x1000bb.webp", "2000x2000.jpeg");
    }
}
