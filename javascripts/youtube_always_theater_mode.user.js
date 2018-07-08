// ==UserScript==
// @name               YouTube - Always Theater Mode
// @version            1.0
// @description        Set the default viewing mode to Theater Mode.
// @icon               https://www.google.com/s2/favicons?domain=www.youtube.com
// @include            https://www.youtube.com/*
// @homepage           https://greasyfork.org/en/scripts/368003-youtube-always-theater-mode
// @author             Volkan K.
// @modifier           Buk Lau
// @license            GPL v3
// @grant              none
// @run-at             document-start
// @require 	       https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @require            https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.0.4/js.cookie.min.js
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);

function set_wide_on() {
	if (Cookies.get('wide')!=1){
		Cookies.set('wide', 1, { domain: '.youtube.com' , expires: 365 });
		var newPlayer = document.querySelector('button.ytp-size-button');
		if ( newPlayer ) {
			newPlayer.click();
		}
	}
}

setInterval(set_wide_on, 1000);
