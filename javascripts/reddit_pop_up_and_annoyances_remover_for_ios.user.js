// ==UserScript==
// @name               Reddit - Pop-up and Annoyances Remover for iOS
// @version            1.0
// @description        Remove pop-ups, banners, and other annoyances from the iOS version of Reddit on Safari
// @icon               https://www.reddit.com/favicon.ico
// @match              https://www.reddit.com/*
// @homepage           https://github.com/MrBukLau/userscripts
// @author             MrBukLau
// @grant              none
// @run-at             document-start
// ==/UserScript==

let st = document.createElement("STYLE");
st.textContent = ".JoinButtonFull, .lb-footer, .lb-header, .topics-links-block, .TopNav__promoButton, .topposts, .xPromoAppStoreFooter, .XPromoBlockingModal, .xPromoChoiceBanner, .XPromoInFeed, .XPromoPill, .XPromoPopup, [data-testid = bottom-cell-wrapper], article[style = 'z-index: 1;'], shreddit-comments-page-ad, shreddit-experience-tree, shreddit-post[view-context = 'ListingBelowLinkedPosts'], shreddit-post[view-context = 'ListingBelowSubredditPosts'], xpromo-untagged-content-blocking-modal {display: none !important} .scroll-disabled {overflow-y: scroll !important; position: static !important} .NavFrame, .scroll-is-blocked {overflow-y: scroll !important}";
document.getElementsByTagName("HEAD")[0].appendChild(st);
