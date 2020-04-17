// ==UserScript==
// @name               Apple Music - Artwork Grabber
// @version            1.0
// @description        Changes the resolution and format of an artwork image
// @icon               https://music.apple.com/assets/favicon/favicon-180-eb957907435b0f6386bf2367d57d75f6.png
// @include            *://is5-ssl.mzstatic.com/image/thumb/Music*
// @homepage           https://sleazyfork.org/en/forum/discussion/9158/replace-string-in-an-url
// @author             MrBukLau
// @modifier           Buk Lau
// @grant              none
// @run-at             document-start
// ==/UserScript==

if (location.href.match("1000x1000bb.jpg")) {
	location.href = location.href.replace("1000x1000bb.jpg", "2000x2000.jpeg");
}
