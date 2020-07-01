// ==UserScript==
// @name               Apple Music - Artwork Grabber
// @version            1.0
// @description        Changes the image resolution and format for an artwork from Apple Music
// @icon               https://music.apple.com/assets/favicon/favicon-180-0a398ebcafe9ddd5517bb45c1c392e09.png
// @include            *mzstatic.com/image/thumb*
// @homepage           https://sleazyfork.org/en/forum/discussion/9158/replace-string-in-an-url
// @author             Vivre
// @modifier           MrBukLau
// @grant              none
// @run-at             document-start
// ==/UserScript==

if (location.href.match("1000x1000bb-60.jpg")) {
	location.href = location.href.replace("1000x1000bb-60.jpg", "2000x2000.jpeg");
}
