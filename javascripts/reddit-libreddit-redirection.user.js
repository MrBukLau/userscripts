// ==UserScript==
// @name               Reddit - Libreddit Redirection
// @namespace          https://github.com/MrBukLau
// @version            1.0
// @description        Redirect Reddit links to Libreddit (An alternative private front-end to Reddit)
// @author             MrBukLau
// @homepageURL        https://github.com/MrBukLau/userscripts
// @supportURL         https://github.com/MrBukLau/userscripts/issues
// @downloadURL        https://github.com/MrBukLau/userscripts/raw/master/javascripts/reddit-libreddit-redirection.user.js
// @updateURL          https://github.com/MrBukLau/userscripts/raw/master/javascripts/reddit-libreddit-redirection.user.js
// @icon               https://libreddit.spike.codes/favicon.ico
// @match              *://www.reddit.com/*
// @grant              none
// @run-at             document-start
// ==/UserScript==

window.location.replace("https://libreddit.spike.codes" + window.location.pathname + window.location.search);
