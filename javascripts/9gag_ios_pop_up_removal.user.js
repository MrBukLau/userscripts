// ==UserScript==
// @name               9GAG - iOS Pop-up Removal
// @version            1.0
// @description        Remove the pop-ups and banners from the iOS version of 9GAG on Safari
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
