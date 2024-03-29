// ==UserScript==
// @name               Smart App Banner Remover for iOS
// @namespace          https://github.com/MrBukLau
// @version            1.0
// @description        Remove Smart App Banners from mobile websites on Safari for iOS
// @author             MrBukLau
// @homepageURL        https://github.com/MrBukLau/userscripts
// @supportURL         https://github.com/MrBukLau/userscripts/issues
// @downloadURL        https://github.com/MrBukLau/userscripts/raw/master/javascripts/smart-app-banner-remover-for-ios.user.js
// @updateURL          https://github.com/MrBukLau/userscripts/raw/master/javascripts/smart-app-banner-remover-for-ios.user.js
// @icon               https://www.apple.com/favicon.ico
// @match              *://*/*
// @grant              none
// @run-at             document-end
// ==/UserScript==

(document.querySelector("[name='apple-itunes-app']") || {
    remove: () => 0
}).remove();
