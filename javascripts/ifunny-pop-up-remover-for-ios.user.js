// ==UserScript==
// @name               iFunny - Pop-up Remover for iOS
// @namespace          https://github.com/MrBukLau
// @version            1.0
// @description        Remove pop-ups and banners from iFunny on Safari for iOS
// @author             MrBukLau
// @homepage           https://github.com/MrBukLau/userscripts
// @downloadURL        https://github.com/MrBukLau/userscripts/raw/master/javascripts/ifunny-pop-up-remover-for-ios.user.js
// @updateURL          https://github.com/MrBukLau/userscripts/raw/master/javascripts/ifunny-pop-up-remover-for-ios.user.js
// @icon               https://ifunny.co/favicon.ico
// @match              https://ifunny.co/*
// @grant              none
// @run-at             document-start
// ==/UserScript==

let st = document.createElement("STYLE");
st.textContent = ".EmDM {display: none !important} .scrollDisabled {overflow-y: scroll !important}";
document.getElementsByTagName("HEAD")[0].appendChild(st);
