// ==UserScript==
// @name               Reddit - iOS Pop-up Removal
// @version            1.0
// @description        Remove the pop-ups and banners from the iOS version of Reddit on Safari
// @icon               https://www.reddit.com/favicon.ico
// @match              https://www.reddit.com/*
// @homepage           https://github.com/MrBukLau/userscripts
// @author             MrBukLau
// @grant              none
// @run-at             document-start
// ==/UserScript==

let st = document.createElement("STYLE");
st.textContent = ".TopNav__promoButton, .xPromoAppStoreFooter, .XPromoBlockingModal, .xPromoChoiceBanner, .XPromoInFeed, .XPromoPill, .XPromoPopup, [data-testid = bottom-cell-wrapper], shreddit-experience-tree {display: none !important} .scroll-disabled {overflow-y: scroll !important; position: static !important} .NavFrame, .scroll-is-blocked {overflow-y: scroll !important}";
document.getElementsByTagName("HEAD")[0].appendChild(st);
