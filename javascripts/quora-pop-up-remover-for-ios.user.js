// ==UserScript==
// @name               Quora - Pop-up Remover for iOS
// @version            1.0
// @description        Refresh the page to remove the login pop-ups from Quora on Safari for iOS
// @author             MrBukLau
// @homepage           https://github.com/MrBukLau/userscripts
// @icon               https://qsf.fs.quoracdn.net/-4-images.favicon-new.ico-26-07ecf7cd341b6919.ico
// @match              https://*.quora.com/*
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
