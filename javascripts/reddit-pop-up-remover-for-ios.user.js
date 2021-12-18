// ==UserScript==
// @name               Reddit - Pop-up Remover for iOS
// @version            1.0
// @description        Remove pop-ups and banners from Reddit on Safari for iOS
// @author             MrBukLau
// @homepage           https://github.com/MrBukLau/userscripts
// @downloadURL        https://github.com/MrBukLau/userscripts/raw/master/javascripts/reddit-pop-up-remover-for-ios.user.js
// @updateURL          https://github.com/MrBukLau/userscripts/raw/master/javascripts/reddit-pop-up-remover-for-ios.user.js
// @icon               https://www.reddit.com/favicon.ico
// @match              https://www.reddit.com/*
// @grant              none
// @run-at             document-start
// ==/UserScript==

let st = document.createElement("STYLE");
st.textContent = "#blocking-modal-blur-container, .m-blurred {filter: none !important;} .GetAppFooter, .xPromoAppStoreFooter, .XPromoBlockingModal, .xPromoChoiceBanner, .XPromoInFeed, .XPromoNSFWBlocking__warning, .XPromoNSFWBlockingModal, .XPromoPill, .XPromoPopup, [data-testid = bottom-cell-wrapper], shreddit-experience-tree, xpromo-nsfw-blocking-container, xpromo-nsfw-blocking-modal, xpromo-untagged-content-blocking-modal {display: none !important} .scroll-disabled {overflow-y: scroll !important; position: static !important} .NavFrame, .scroll-is-blocked {overflow-y: scroll !important}";
document.getElementsByTagName("HEAD")[0].appendChild(st);
