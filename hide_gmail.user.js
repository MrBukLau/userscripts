// ==UserScript==
// @name        Hide Email Address from Gmail Title Bar
// @description Remove email address from title bar on Gmail
// @homepage    https://greasyfork.org/en/scripts/38152-hide-email-address-from-title-bar
// @namespace   JeffersonScher
// @author      Jefferson "jscher2000" Scher
// @modifier    Buk Lau
// @version     0.5
// @license     BSD-3-Clause
// @include     https://mail.google.com/*
// @grant       none
// ==/UserScript==

function cleanTitle(){
    //console.log('Called cleanTitle');
    if (document.title.indexOf('@') > -1) {
        var titleparts = document.title.split(' '), titlenew = '';
        for (var i=0; i<titleparts.length; ++i){
            if (titleparts[i].indexOf('@') < 0){
                titlenew += titleparts[i] + ' ';
            }
        }
        titlenew = titlenew.replace('- - ', '- ').trim();
        document.title = titlenew;
    }
}
function setMutationWatch(){
    MutOb = (window.MutationObserver) ? window.MutationObserver : window.WebKitMutationObserver;
    if (MutOb){
        chgMon = new MutOb(function(mutationSet){
            mutationSet.forEach(function(mutation){
                for (var i=0; i<mutation.addedNodes.length; ++i){
                    if (mutation.addedNodes[i].nodeType == 1){ // Ignore some common nodes
                        if ('LINK|META|SCRIPT|STYLE'.indexOf(mutation.addedNodes[i].nodeName) < -1) cleanTitle();
                    } else { // There are rare but critical
                        cleanTitle();
                    }
                }
            });
        });
        // attach chgMon to <head>
        opts = {childList: true, subtree: true, attributes: false, characterData: false};
        chgMon.observe(document.getElementsByTagName('head')[0], opts);
    }
}
cleanTitle();
setMutationWatch();
