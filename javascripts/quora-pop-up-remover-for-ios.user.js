// ==UserScript==
// @name               Quora - Pop-up Remover for iOS
// @namespace          https://github.com/MrBukLau
// @version            1.0
// @description        Refresh the page to remove the login pop-ups from Quora on Safari for iOS
// @author             MrBukLau
// @homepageURL        https://github.com/MrBukLau/userscripts
// @supportURL         https://github.com/MrBukLau/userscripts/issues
// @downloadURL        https://github.com/MrBukLau/userscripts/raw/master/javascripts/quora-pop-up-remover-for-ios.user.js
// @updateURL          https://github.com/MrBukLau/userscripts/raw/master/javascripts/quora-pop-up-remover-for-ios.user.js
// @icon               https://www.quora.com/favicon.ico
// @match              *://*.quora.com/*
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
