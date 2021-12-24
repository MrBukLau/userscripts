// ==UserScript==
// @name               Reddit - Redirect to Libreddit
// @namespace          https://github.com/MrBukLau
// @version            1.0
// @description        Redirect Reddit links to Libreddit (An alternative private front-end to Reddit)
// @author             MrBukLau
// @homepage           https://github.com/MrBukLau/userscripts
// @downloadURL        
// @updateURL          
// @icon               https://libreddit.spike.codes/favicon.ico
// @match              *://www.reddit.com/*
// @grant              none
// @run-at             document-start
// ==/UserScript==

window.location.replace("https://libreddit.spike.codes" + window.location.pathname + window.location.search);
