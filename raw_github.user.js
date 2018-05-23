// ==UserScript==
// @name               Raw Github Favicon
// @version            0.1
// @description        Adds a favicon to Raw Github
// @icon               https://github.com/fluidicon.png
// @include            *raw.githubusercontent.com/*
// @author             Buk Lau
// @grant              none
// ==/UserScript==

var favicon_link_html = document.createElement('link');
favicon_link_html.rel = 'icon';
favicon_link_html.href = 'https://github.com/fluidicon.png';
favicon_link_html.type = 'image/png';

try {
  document.getElementsByTagName('head')[0].appendChild( favicon_link_html );
}
catch(e) { }
