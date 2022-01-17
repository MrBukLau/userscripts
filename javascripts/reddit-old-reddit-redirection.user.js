// ==UserScript==
// @name               Reddit - Old Reddit Redirection
// @namespace          https://github.com/MrBukLau
// @version            1.0
// @description        Redirect Reddit links to Old Reddit
// @author             MrBukLau
// @homepageURL        https://github.com/MrBukLau/userscripts
// @supportURL         https://github.com/MrBukLau/userscripts/issues
// @downloadURL        https://github.com/MrBukLau/userscripts/raw/master/javascripts/reddit-old-reddit-redirection.user.js
// @updateURL          https://github.com/MrBukLau/userscripts/raw/master/javascripts/reddit-old-reddit-redirection.user.js
// @icon               https://old.reddit.com/favicon.ico
// @match              *://np.reddit.com/*
// @match              *://www.reddit.com/*
// @exclude-match      *://www.reddit.com/poll/*
// @grant              none
// @run-at             document-start
// ==/UserScript==

window.location.replace("https://old.reddit.com" + window.location.pathname + window.location.search);
