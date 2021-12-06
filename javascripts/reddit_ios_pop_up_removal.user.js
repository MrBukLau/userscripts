// ==UserScript==
// @name               Reddit - iOS Pop-up Removal
// @version            1.0
// @description        Remove the pop-ups and banners from the iOS version of Reddit on Safari (Special thanks to StephenP for creating the original userscript)
// @icon               https://www.reddit.com/favicon.ico
// @match              https://www.reddit.com/*
// @homepage           https://greasyfork.org/en/scripts/395497-login-reminder-popup-remover
// @author             MrBukLau
// @grant              none
// @run-at             document-start
// ==/UserScript==

let st = document.createElement("STYLE");
if (document.location.href.includes("reddit.com")) {
    st.textContent = ".TopNav__promoButton, .XPromoAppStoreFooter, .XPromoBlockingModal, .XPromoChoiceBanner, .XPromoInFeed, .XPromoPill, .XPromoPopup, shreddit-experience-tree, [data-testid=bottom-cell-wrapper]{display: none !important} .NavFrame {overflow-y: scroll !important} .scroll-disabled {overflow-y: scroll !important; position: static !important} .scroll-is-blocked {overflow-y: scroll !important}";
}
document.getElementsByTagName("HEAD")[0].appendChild(st);
}
