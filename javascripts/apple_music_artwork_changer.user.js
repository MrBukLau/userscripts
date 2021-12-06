// ==UserScript==
// @name               Apple Music - Artwork Changer
// @version            1.0
// @description        Change the image resolution and format for an artwork on Apple Music
// @icon               https://music.apple.com/assets/favicon/favicon-180-c132a95549a91ae6983a4914da3e1c44.png
// @include            *mzstatic.com/image/thumb*
// @homepage           https://github.com/MrBukLau/userscripts-for-google-chrome
// @author             MrBukLau
// @grant              none
// @run-at             document-start
// ==/UserScript==

if (location.href.match("1000x1000bb.webp")) {
    location.href = location.href.replace("1000x1000bb.webp", "2000x2000.jpeg");
}

if (location.href.match("600x600bb.webp")) {
    location.href = location.href.replace("600x600bb.webp", "2000x2000.jpeg");
}
