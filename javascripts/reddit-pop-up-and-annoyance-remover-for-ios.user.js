// ==UserScript==
// @name               Reddit - Pop-up and Annoyance Remover for iOS
// @version            1.0
// @description        Remove pop-ups, banners, and other annoyances from Reddit on Safari for iOS
// @author             MrBukLau
// @homepage           https://github.com/MrBukLau/userscripts
// @downloadURL        https://github.com/MrBukLau/userscripts/raw/master/javascripts/reddit-pop-up-and-annoyance-remover-for-ios.user.js
// @updateURL          https://github.com/MrBukLau/userscripts/raw/master/javascripts/reddit-pop-up-and-annoyance-remover-for-ios.user.js
// @icon               https://www.reddit.com/favicon.ico
// @match              https://www.reddit.com/*
// @grant              none
// @run-at             document-start
// ==/UserScript==

let st = document.createElement("STYLE");
st.textContent = "#blocking-modal-blur-container, .m-blurred {filter: none !important;} .GetAppFooter, .JoinButtonFull, .lb-footer, .lb-header, .PreviewDrawer, .topics-links-block, .TopNav__promoButton, .topposts, .xPromoAppStoreFooter, .XPromoBlockingModal, .xPromoChoiceBanner, .XPromoInFeed, .XPromoNSFWBlocking__warning, .XPromoNSFWBlockingModal, .XPromoPill, .XPromoPopup, [data-testid = bottom-cell-wrapper], article[style = 'z-index: 1;'], shreddit-comments-page-ad, shreddit-experience-tree, shreddit-post[view-context = 'ListingBelowLinkedPosts'], shreddit-post[view-context = 'ListingBelowSubredditPosts'], xpromo-nsfw-blocking-container, xpromo-nsfw-blocking-modal, xpromo-untagged-content-blocking-modal {display: none !important} .scroll-disabled {overflow-y: scroll !important; position: static !important} .NavFrame, .scroll-is-blocked {overflow-y: scroll !important}";
document.getElementsByTagName("HEAD")[0].appendChild(st);
