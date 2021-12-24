// ==UserScript==
// @name               Kwik - Watermark Remover
// @namespace          https://github.com/MrBukLau
// @version            1.0
// @description        Hide the Kwik watermark from videos hosted on Kwik
// @author             MrBukLau
// @homepageURL        https://github.com/MrBukLau/userscripts
// @supportURL         https://github.com/MrBukLau/userscripts/issues
// @downloadURL        https://github.com/MrBukLau/userscripts/raw/master/javascripts/kwik-watermark-remover.user.js
// @updateURL          https://github.com/MrBukLau/userscripts/raw/master/javascripts/kwik-watermark-remover.user.js
// @icon               https://kwik.cx/favicon.ico
// @match              *://kwik.cx/*
// @grant              none
// @run-at             document-start
// ==/UserScript==

var css = document.createElement("style");
css.setAttribute('type', 'text/css');
css.innerText = '.plyr.plyr--paused::after, .plyr.plyr--playing::after {opacity: 0 !important}';
document.head.appendChild(css);
