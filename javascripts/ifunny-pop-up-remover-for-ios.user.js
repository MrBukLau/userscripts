// ==UserScript==
// @name               iFunny - Pop-up Remover for iOS
// @version            1.0
// @description        Remove pop-ups and banners from iFunny on Safari for iOS
// @author             MrBukLau
// @homepage           https://github.com/MrBukLau/userscripts
// @icon               https://ifunny.co/favicon.ico
// @match              https://ifunny.co/*
// @grant              none
// @run-at             document-start
// ==/UserScript==

let st = document.createElement("STYLE");
st.textContent = ".EmDM {display: none !important} .scrollDisabled {overflow-y: scroll !important}";
document.getElementsByTagName("HEAD")[0].appendChild(st);
