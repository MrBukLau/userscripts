// ==UserScript==
// @name               YouTube - Always Theater Mode
// @version            1.4.1
// @description        Set the default viewing mode to Theater Mode (Special thanks to r-a-y for the original userscript)
// @icon               https://s.ytimg.com/yts/img/favicon_144-vfliLAfaB.png
// @include            https://www.youtube.com/*
// @homepage           https://greasyfork.org/en/scripts/10523-youtube-always-theater-mode
// @author             MrBukLau
// @grant              none
// @run-at             document-start
// ==/UserScript==

// Toggle Theater Mode after YouTube finishes loading a video.
window.addEventListener("yt-navigate-finish", function(event) {
    var newPlayer = document.querySelector('button.ytp-size-button');
    if (newPlayer && null === document.getElementById('player-theater-container').firstChild) {
        newPlayer.click();
    }
});
