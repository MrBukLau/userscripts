// ==UserScript==
// @name               MyHealthConnection Favicon
// @version            0.1
// @description        Adds a favicon to MyHealthConnection
// @icon               https://raw.githubusercontent.com/MrBukLau/Tampermonkey-Userscripts/master/Favicons/Images/MyHealthConnection%20Favicon.ico
// @include            *secure.orclinic.com*
// @author             Buk Lau
// @grant              none
// ==/UserScript==

var favicon_link_html = document.createElement('link');
favicon_link_html.rel = 'icon';
favicon_link_html.href = 'https://raw.githubusercontent.com/MrBukLau/Tampermonkey-Userscripts/master/Favicons/Images/MyHealthConnection%20Favicon.ico';
favicon_link_html.type = 'image/ico';

try {
  document.getElementsByTagName('head')[0].appendChild( favicon_link_html );
}
catch(e) { }
