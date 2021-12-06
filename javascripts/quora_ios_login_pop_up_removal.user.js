// ==UserScript==
// @name               Quora - iOS Login Pop-up Removal
// @version            1.0
// @description        Remove the login pop-ups from the iOS version of Quora on Safari
// @icon               https://qsf.fs.quoracdn.net/-4-images.favicon-new.ico-26-07ecf7cd341b6919.ico
// @match              https://*.quora.com/*
// @homepage           https://github.com/MrBukLau/userscripts
// @author             MrBukLau
// @grant              none
// @run-at             document-start
// ==/UserScript==

var oldUrlSearch = window.location.search;

if (!/\?share=1$/.test(oldUrlSearch)) {
    var newURL = window.location.protocol + "//" +
        window.location.host +
        window.location.pathname +
        oldUrlSearch + "?share=1" +
        window.location.hash;
    window.location.replace(newURL);
}
