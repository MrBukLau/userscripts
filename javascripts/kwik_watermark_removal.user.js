// ==UserScript==
// @name               Kwik - Watermark Removal
// @version            1.0
// @description        Hide the Kwik watermark from videos hosted on Kwik (Credit to SakamotoDesu)
// @icon               https://kwik.cx/favicon.ico
// @include            *://kwik.cx/*
// @homepage           https://old.reddit.com/r/animepiracy/comments/kfdmgg/any_way_to_block_the_kwik_watermark_on_animepahe/gg93qll/
// @author             MrBukLau
// @grant              none
// @run-at             document-start
// ==/UserScript==

(function() {
    var css = document.createElement("style");
        css.setAttribute('type', 'text/css');
        css.innerText = '.plyr.plyr--paused::after,.plyr.plyr--playing::after{opacity:0 !important}';
        document.head.appendChild(css);
})();
