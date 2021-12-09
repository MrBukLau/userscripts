// ==UserScript==
// @name               iFunny - Pop-up Remover for iOS
// @version            1.0
// @description        Remove the pop-ups and banners from the iOS version of iFunny on Safari
// @icon               https://ifunny.co/favicon.ico
// @match              https://ifunny.co/*
// @homepage           https://github.com/MrBukLau/userscripts
// @author             MrBukLau
// @grant              none
// @run-at             document-start
// ==/UserScript==

let st = document.createElement("STYLE");
st.textContent = ".EmDM {display: none !important} .scrollDisabled {overflow-y: scroll !important}";
document.getElementsByTagName("HEAD")[0].appendChild(st);
