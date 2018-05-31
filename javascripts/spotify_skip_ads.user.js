// ==UserScript==
// @name               Spotify - Help uBlock Origin Skip Ads
// @version            1.0
// @description        In conjunction with uBlock Origin, which can block ads on Spotify but stops the music, this essentially hits play to continue uninterrupted.
// @icon               https://open.scdn.co/static/images/favicon.png
// @match              https://*.spotify.com/*
// @homepage           https://old.reddit.com/r/uBlockOrigin/comments/8nc452/together_with_ublock_origin_a_userscript_to_skip/
// @author             YouCheapFUCK
// @modifier           Buk Lau
// @grant              none
// ==/UserScript==

setInterval(() => {
    var nowPlayingLink = document.querySelector(".now-playing a");
    var theresAnAd = nowPlayingLink && nowPlayingLink.hostname !== location.hostname;
    // The play button is actually shown as a 'Pause' button because it gets confused when the ad is blocked.
    var playPauseButton = document.querySelector("button[title='Play'], button[title='Pause']");
    if (theresAnAd) {
        playPauseButton.click();
        // It pauses on the next song, so... delay and play! (This may be a race condition.)
        setTimeout(() => {
            // In this case it should be correctly displayed as a Play button, and we definitely don't want to pause.
            var playButton = document.querySelector("button[title='Play']");
            playButton && playButton.click();
        }, 200);
    }
}, 500);
