// ==UserScript==
// @name               Bring Back Old Reddit
// @version            1.0
// @description        Always redirects to old-Reddit to avoid Reddit's redesign
// @icon               https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-76x76.png
// @include            *://www.reddit.com/*
// @homepage           https://greasyfork.org/en/scripts/44669-bring-back-old-reddit
// @author             RandomUsername404
// @modifier           Buk Lau
// @grant              none
// @run-at             document-start
// ==/UserScript==

window.location.replace("https://old.reddit.com" + window.location.pathname);
