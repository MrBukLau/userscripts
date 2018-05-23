// ==UserScript==
// @name               Spotlistr - Favicon
// @version            0.1
// @description        Adds a favicon to Spotlistr
// @icon               https://raw.githubusercontent.com/MrBukLau/tampermonkey-userscripts/master/favicons/images/Spotlistr%20Favicon.png
// @include            *spotlistr.herokuapp.com/*
// @author             Buk Lau
// @grant              none
// ==/UserScript==

var favicon_link_html = document.createElement('link');
favicon_link_html.rel = 'icon';
favicon_link_html.href = 'https://raw.githubusercontent.com/MrBukLau/tampermonkey-userscripts/master/favicons/images/Spotlistr%20Favicon.png';
favicon_link_html.type = 'image/png';

try {
  document.getElementsByTagName('head')[0].appendChild( favicon_link_html );
}
catch(e) { }
