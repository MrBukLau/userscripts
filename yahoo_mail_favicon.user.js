// ==UserScript==
// @name           Yahoo Mail Favicon
// @description    Adds a favicon to Yahoo Mail
// @author         Buk Lau
// @version        0.1
// @include        *mg.mail.yahoo.com/neo/m/*
// @grant          none
// ==/UserScript==

var favicon_link_html = document.createElement('link');
favicon_link_html.rel = 'icon';
favicon_link_html.href = 'https://s.yimg.com/nq/nr/img/favicon_LFWFGUw4cMt2cbVGy0T6xBqoJ4BBr2VKY56xSLK4IX0.ico';
favicon_link_html.type = 'image/ico';

try {
  document.getElementsByTagName('head')[0].appendChild( favicon_link_html );
}
catch(e) { }
