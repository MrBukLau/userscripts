// ==UserScript==
// @name               Reddit - Stop Tracking Outbound Links
// @version            1.0
// @description        Stop Reddit from tracking when clicking on outbound links (Credit to Capitao_Falcao)
// @icon               https://www.reddit.com/favicon.ico
// @match              *reddit.com*
// @homepage           https://old.reddit.com/r/TheoryOfReddit/comments/4aqd1y/just_noticed_reddit_is_redirecting_outgoing_links/d12qh4d/?st=jrls658b&sh=1a8d388f
// @author             MrBukLau
// @grant              none
// @run-at             document-start
// ==/UserScript==

$(document).ready(function(){
    $('p.title a.outbound').each(function(index,element){
        $(this).attr('data-outbound-url', $(this).attr('href'));
    });
});
