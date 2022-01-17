// ==UserScript==
// @name               Reddit - Old Reddit Redirection
// @namespace          https://github.com/MrBukLau
// @version            1.0
// @description        Avoid Reddit's redesign by redirecting Reddit links to Old Reddit
// @author             MrBukLau
// @homepageURL        https://github.com/MrBukLau/userscripts
// @supportURL         https://github.com/MrBukLau/userscripts/issues
// @downloadURL        
// @updateURL          
// @icon               https://old.reddit.com/favicon.ico
// @match              *://www.reddit.com/*
// @exclude-match      *://www.reddit.com/poll/*
// @grant              none
// @run-at             document-start
// ==/UserScript==

window.location.replace("https://old.reddit.com" + window.location.pathname + window.location.search);
