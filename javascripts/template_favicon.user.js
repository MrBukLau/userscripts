// ==UserScript==
// @name               Template - Favicon
// @version            1.0
// @description        Add a favicon to "the website's name"
// @icon               "Type a URL that is the website's icon"
// @include            "Type the website's URL that needs a favicon"
// @author             MrBukLau
// @grant              none
// @run-at             document-start
// ==/UserScript==

var favicon_link_html = document.createElement('link');
favicon_link_html.rel = 'icon';

// Replace "LINK" with the favicon's URL
favicon_link_html.href = 'LINK';

// Change "png" if the image file format is different
favicon_link_html.type = 'image/png';

try {
    document.getElementsByTagName('head')[0].appendChild(favicon_link_html);
} catch (e) {}
