// ==UserScript==
// @name               Apple Music - Artwork Changer
// @version            1.0
// @description        Change the image resolution and format for an artwork on Apple Music
// @author             MrBukLau
// @homepage           https://github.com/MrBukLau/userscripts
// @icon               https://music.apple.com/favicon.ico
// @include            *mzstatic.com/image/thumb*
// @grant              none
// @run-at             document-start
// ==/UserScript==

if (location.href.match("1000x1000bb.webp")) {
    location.href = location.href.replace("1000x1000bb.webp", "2000x2000.jpeg");
}

if (location.href.match("600x600bb.webp")) {
    location.href = location.href.replace("600x600bb.webp", "2000x2000.jpeg");
}
