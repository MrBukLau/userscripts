// ==UserScript==
// @name               Reddit - Stop Tracking Outbound Links
// @version            1.0
// @description        Replaces data-outbound-url with data-href-url
// @icon               https://www.google.com/s2/favicons?domain=www.reddit.com
// @match              *://*.reddit.com/*
// @homepage           https://old.reddit.com/r/privacy/comments/4aqdg0/reddit_started_tracking_the_links_we_click_heres/
// @author             OperaSona
// @modifier           Buk Lau
// @grant              none
// ==/UserScript==

var a_col = document.getElementsByTagName('a');
var a, actual_fucking_url;
for(var i = 0; i < a_col.length; i++) {
  a = a_col[i];
  actual_fucking_url = a.getAttribute('data-href-url');
  if(actual_fucking_url) a.setAttribute('data-outbound-url', actual_fucking_url);
}
