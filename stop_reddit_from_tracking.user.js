// ==UserScript==
// @name         Stop Reddit from Tracking
// @description  Replaces data-outbound-url with data-href-url
// @icon         https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-76x76.png
// @author       OperaSona
// @version      1.0
// @match        *://*.reddit.com/*
// @grant        none
// ==/UserScript==

var a_col = document.getElementsByTagName('a');
var a, actual_fucking_url;
for(var i = 0; i < a_col.length; i++) {
  a = a_col[i];
  actual_fucking_url = a.getAttribute('data-href-url');
  if(actual_fucking_url) a.setAttribute('data-outbound-url', actual_fucking_url);
}
