// ==UserScript==
// @name               Smart App Banners Removal
// @version            1.0
// @description        Remove Smart App Banners from mobile websites on the iOS version of Safari
// @icon               https://developer.apple.com/favicon.ico
// @match              *://*/*
// @homepage           https://github.com/MrBukLau/userscripts
// @author             MrBukLau
// @grant              none
// @run-at             document-start
// ==/UserScript==

(document.querySelector("[name='apple-itunes-app']") || {
    remove: () => 0
}).remove();
