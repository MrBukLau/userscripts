// ==UserScript==
// @name               Smart App Banners Remover for iOS
// @version            1.0
// @description        Remove Smart App Banners from mobile websites on Safari for iOS
// @author             MrBukLau
// @homepage           https://github.com/MrBukLau/userscripts
// @icon               https://www.apple.com/favicon.ico
// @match              *://*/*
// @grant              none
// @run-at             document-start
// ==/UserScript==

(document.querySelector("[name='apple-itunes-app']") || {
    remove: () => 0
}).remove();
