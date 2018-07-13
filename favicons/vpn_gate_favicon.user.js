// ==UserScript==
// @name               VPN Gate - Favicon
// @version            0.1
// @description        Adds a favicon to VPN Gate
// @icon               https://pbs.twimg.com/profile_images/3388522138/269e993c7d277a7d6a5ba9378b4559bc_400x400.png
// @include            *vpngate.net*
// @author             Buk Lau
// @grant              none
// ==/UserScript==

var favicon_link_html = document.createElement('link');
favicon_link_html.rel = 'icon';
favicon_link_html.href = 'https://pbs.twimg.com/profile_images/3388522138/269e993c7d277a7d6a5ba9378b4559bc_400x400.png';
favicon_link_html.type = 'image/png';

try {
  document.getElementsByTagName('head')[0].appendChild( favicon_link_html );
}
catch(e) { }
