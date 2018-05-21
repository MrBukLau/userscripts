// ==UserScript==
// @name               Bring Back Old Reddit
// @namespace          https://greasyfork.org/en/users/105361-randomusername404
// @description        Always redirects to old-Reddit to avoid Reddit's redesign
// @icon               https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-76x76.png
// @include            *://www.reddit.com/*
// @version            1.0
// @run-at             document-start
// @author             RandomUsername404
// @modifier           Buk Lau
// @grant              none
// ==/UserScript==

window.location.replace("https://old.reddit.com" + window.location.pathname);
