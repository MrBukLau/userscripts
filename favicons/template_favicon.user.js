// ==UserScript==
// @name               Template - Favicon
// @version            1.0
// @description        Adds a favicon to "Website's Name"
// @icon               "URL of an Icon"
// @include            "URL of Website That Needs a Favicon"
// @author             Buk Lau
// @grant              none
// ==/UserScript==

var favicon_link_html = document.createElement('link');
favicon_link_html.rel = 'icon';
favicon_link_html.href = 'URL of the Favicon';
favicon_link_html.type = 'image/png';

try {
  document.getElementsByTagName('head')[0].appendChild( favicon_link_html );
}
catch(e) { }
