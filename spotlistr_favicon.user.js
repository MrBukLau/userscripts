// ==UserScript==
// @name           Spotlistr Favicon
// @description    Adds a favicon to Spotlistr
// @author         Buk Lau
// @version        0.1
// @include        http://spotlistr.herokuapp.com/
// @grant          none
// ==/UserScript==

var favicon_link_html = document.createElement('link');
favicon_link_html.rel = 'icon';
favicon_link_html.href = 'https://github.com/MrBukLau/Tampermonkey-Scripts/blob/master/Favicons/Spotlistr%20Favicon.png?raw=true';
favicon_link_html.type = 'image/png';

try {
  document.getElementsByTagName('head')[0].appendChild( favicon_link_html );
}
catch(e) { }
