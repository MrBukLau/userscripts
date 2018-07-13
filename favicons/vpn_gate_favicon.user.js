// ==UserScript==
// @name               VPN Gate - Favicon
// @version            0.1
// @description        Adds a favicon to VPN Gate
// @icon               https://www.google.com/s2/favicons?domain=openvpn.net
// @include            *vpngate.net*
// @author             Buk Lau
// @grant              none
// ==/UserScript==

var favicon_link_html = document.createElement('link');
favicon_link_html.rel = 'icon';
favicon_link_html.href = 'https://www.google.com/s2/favicons?domain=openvpn.net';
favicon_link_html.type = 'image/png';

try {
  document.getElementsByTagName('head')[0].appendChild( favicon_link_html );
}
catch(e) { }
