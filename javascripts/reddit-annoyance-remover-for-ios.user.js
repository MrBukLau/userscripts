// ==UserScript==
// @name               Reddit - Annoyance Remover for iOS
// @namespace          https://github.com/MrBukLau
// @version            1.0
// @description        Remove pop-ups, banners, and other annoyances from Reddit on Safari for iOS
// @author             MrBukLau
// @homepageURL        https://github.com/MrBukLau/userscripts
// @supportURL         https://github.com/MrBukLau/userscripts/issues
// @downloadURL        https://github.com/MrBukLau/userscripts/raw/master/javascripts/reddit-annoyance-remover-for-ios.user.js
// @updateURL          https://github.com/MrBukLau/userscripts/raw/master/javascripts/reddit-annoyance-remover-for-ios.user.js
// @icon               https://www.reddit.com/favicon.ico
// @match              *://www.reddit.com/*
// @grant              none
// @run-at             document-idle
// ==/UserScript==

let st = document.createElement("STYLE");
st.textContent = "#blocking-modal-blur-container, .m-blurred {filter: none !important;} ._13GEaJc1u3mPvCCGhfLQG4, .GetAppFooter, .JoinButtonFull, .lb-footer, .lb-header, .PreviewDrawer, .topics-links-block, .TopNav__promoButton, .topposts, .xPromoAppStoreFooter, .XPromoBlockingModal, .xPromoChoiceBanner, .XPromoInFeed, .XPromoNSFWBlocking__warning, .XPromoNSFWBlockingModal, .XPromoPill, .XPromoPopup, [data-testid = bottom-cell-wrapper], article[style = 'z-index: 1;'], shreddit-comments-page-ad, shreddit-experience-tree, shreddit-post[view-context = ListingBelowLinkedPosts], shreddit-post[view-context = ListingBelowSubredditPosts], shreddit-rereddit-promo, xpromo-nsfw-blocking-container[slot = blurred], xpromo-nsfw-blocking-modal, xpromo-untagged-content-blocking-modal {display: none !important} .scroll-disabled {overflow: auto !important; position: static !important;} .NavFrame, .scroll-is-blocked {overflow: auto !important;}";
document.getElementsByTagName("HEAD")[0].appendChild(st);
