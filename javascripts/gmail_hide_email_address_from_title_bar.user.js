// ==UserScript==
// @name               Gmail - Hide Email Address from Title Bar
// @version            0.5
// @description        Remove your email address from the title bar on Gmail (Special thanks to Jefferson "jscher2000" Scher for the original userscript)
// @icon               https://ssl.gstatic.com/ui/v1/icons/mail/images/favicon5.ico
// @include            https://mail.google.com/*
// @homepage           https://greasyfork.org/en/scripts/38152-hide-email-address-from-title-bar
// @author             MrBukLau
// @grant              none
// @run-at             document-start
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
