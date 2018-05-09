// ==UserScript==
// @name           MyHealthConnection Favicon
// @description    Adds a favicon to MyHealthConnection
// @author         Buk Lau
// @version        0.1
// @include        *secure.orclinic.com/portal*
// @grant          none
// ==/UserScript==

var favicon_link_html = document.createElement('link');
favicon_link_html.rel = 'icon';
favicon_link_html.href = 'http://www.oregonclinic.com/sites/default/files/favicon_32px.ico';
favicon_link_html.type = 'image/ico';

try {
  document.getElementsByTagName('head')[0].appendChild( favicon_link_html );
}
catch(e) { }
