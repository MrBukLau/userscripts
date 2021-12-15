// ==UserScript==
// @name               9GAG - Pop-up Remover for iOS
// @version            1.0
// @description        Remove pop-ups and banners from 9GAG on Safari for iOS
// @author             MrBukLau
// @homepage           https://github.com/MrBukLau/userscripts
// @downloadURL        https://github.com/MrBukLau/userscripts/raw/master/javascripts/9gag-pop-up-remover-for-ios.user.js
// @updateURL          https://github.com/MrBukLau/userscripts/raw/master/javascripts/9gag-pop-up-remover-for-ios.user.js
// @icon               https://9gag.com/favicon.ico
// @match              https://9gag.com/*
// @grant              none
// @run-at             document-start
// ==/UserScript==

let st = document.createElement("STYLE");
st.textContent = ".download-app-container, .open-in-app, .post-signup-list-banner, .use-app {display: none !important} .noscroll {overflow-y: scroll !important}";
document.getElementsByTagName("HEAD")[0].appendChild(st);
