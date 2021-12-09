// ==UserScript==
// @name               9GAG - Pop-up Remover for iOS
// @version            1.0
// @description        Remove pop-ups and banners from 9GAG on Safari for iOS
// @icon               https://9gag.com/favicon.ico
// @match              https://9gag.com/*
// @homepage           https://github.com/MrBukLau/userscripts
// @author             MrBukLau
// @grant              none
// @run-at             document-start
// ==/UserScript==

let st = document.createElement("STYLE");
st.textContent = ".download-app-container, .open-in-app, .post-signup-list-banner, .use-app {display: none !important} .noscroll {overflow-y: scroll !important}";
document.getElementsByTagName("HEAD")[0].appendChild(st);
