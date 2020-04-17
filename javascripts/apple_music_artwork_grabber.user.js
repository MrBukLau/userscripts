// ==UserScript==
// @name               Apple Music - Artwork Grabber
// @version            1.0
// @description        Changes the image resolution and format for an artwork from Apple Music
// @icon               https://music.apple.com/assets/favicon/favicon-180-eb957907435b0f6386bf2367d57d75f6.png
// @include            *mzstatic.com/image/thumb/Music*
// @homepage           https://sleazyfork.org/en/forum/discussion/9158/replace-string-in-an-url
// @author             Vivre
// @modifier           MrBukLau
// @grant              none
// @run-at             document-start
// ==/UserScript==

if (location.href.match("1000x1000bb.jpg")) {
	location.href = location.href.replace("1000x1000bb.jpg", "2000x2000.jpeg");
}
