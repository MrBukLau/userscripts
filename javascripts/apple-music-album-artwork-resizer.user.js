// ==UserScript==
// @name               Apple Music - Album Artwork Resizer
// @version            1.0
// @description        Change the image resolution and format for album artworks on Apple Music
// @author             MrBukLau
// @homepage           https://github.com/MrBukLau/userscripts
// @downloadURL        https://github.com/MrBukLau/userscripts/raw/master/javascripts/apple-music-album-artwork-resizer.user.js
// @updateURL          https://github.com/MrBukLau/userscripts/raw/master/javascripts/apple-music-album-artwork-resizer.user.js
// @icon               https://music.apple.com/assets/favicon/favicon-180-c132a95549a91ae6983a4914da3e1c44.png
// @include            *mzstatic.com/image/thumb*
// @grant              none
// @run-at             document-start
// ==/UserScript==

if (location.href.match("600x600bb.webp")) {
    location.href = location.href.replace("600x600bb.webp", "2000x2000.jpeg");
}

if (location.href.match("1000x1000bb.webp")) {
    location.href = location.href.replace("1000x1000bb.webp", "2000x2000.jpeg");
}
