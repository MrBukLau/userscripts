// ==UserScript==
// @name               myPSU - Favicon
// @version            1.0
// @description        Adds a favicon to myPSU
// @icon               https://www.google.com/s2/favicons?domain=pdx.edu
// @include            *my.pdx.edu*
// @author             Buk Lau
// @grant              none
// ==/UserScript==

var favicon_link_html = document.createElement('link');
favicon_link_html.rel = 'icon';
favicon_link_html.href = 'https://www.google.com/s2/favicons?domain=pdx.edu';
favicon_link_html.type = 'image/png';

try {
  document.getElementsByTagName('head')[0].appendChild( favicon_link_html );
}
catch(e) { }
