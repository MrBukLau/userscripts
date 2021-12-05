// ==UserScript==
// @name               Login Pop-up Remover
// @version            2.2.0
// @description        Remove the nagging login pop-ups and banners from the mobile and desktop versions of Facebook, Instagram, Reddit, Twitter, Quora, Ask.fm, VK, and from the mobile version of YouTube (Special thanks to StephenP for the original userscript)
// @icon               data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAG1BMVEXTrvFOWZTEN4aXQ6vcRGPsbUH2sVjlt7/////5Q3C9AAAAAXRSTlMAQObYZgAAANJJREFUKM+9z7EKwjAQgOFIqbPFpXMUmlHMoKsQsKtgsC9g3WMkWS2V3GN7SZrQwdl/68fdlRBCFtWac74jqYLHsvBUHjiA75lGCm6dMca6BPzg9hSzajPBcQjfbKAJFLXgTJOBqQYMqAx7pnCaDRko060W5xGhwlZk20Y4R6iIaHU3inYG3euGR3UG2b0k/lYg1AABPhLDTQoRbs7D1SYoJcTHCQZvf6PsH+H5GiEcJb0Pd0Q9wdLDXV5PdVyZRF7CYgDMz/6E9xyqdPR/sMiw+gKZRGTvTIJM4gAAAABJRU5ErkJggg==
// @match              https://*.facebook.com/*
// @exclude            https://developers.facebook.com/*
// @exclude            https://www.instagram.com/accounts/login/*
// @exclude            https://twitter.com/intent/tweet?*
// @exclude            https://mobile.twitter.com/intent/tweet?*
// @match              https://www.instagram.com/*
// @match              https://m.youtube.com/*
// @match              https://www.youtube.com/*
// @match              https://www.reddit.com/*
// @match              https://twitter.com/*
// @match              https://mobile.twitter.com/*
// @match              https://*.quora.com/*
// @match              https://ask.fm/*
// @match              https://vk.com/*
// @match              https://m.vk.com/*
// @include            https://www.pinterest.tld/*
// @homepage           https://greasyfork.org/en/scripts/395497-login-reminder-popup-remover
// @author             MrBukLau
// @grant              none
// @run-at             document-start
// ==/UserScript==

var interval_0;
var interval_1;
var interval_2;
var interval_3;
var interval_4;
var mutationObserver_0;
var url;
(function(){
  applyUserCss();
  setInterval(checkPageChanged,1000);
})();
function checkPageChanged(){
 if(document.location!=url){
   console.log("Changed url from "+url+" to "+document.location.toString());
 	interval_4=setInterval(checkPageReady,500);
  url=document.location.toString();
 }
}
function applyUserCss(){//this function adds the css styling for removing popups to the head of the document, as soon as possible when the page is loaded. Other popups that can't be removed just with css selectors are removed later with the check() function
  let st=document.createElement("STYLE");
  if(document.location.href.includes("instagram.com")){
    st.textContent=".u7YqG{z-index: 1} .xUdfV{z-index: 2} ._3sb-{z-index: 3} .G_hoz.LcKDX, ._7zNgw.GLdVF{z-index: 2} .FFVAD{z-index: 1} .tWeCl{z-index: 1} .v5DqJ, .RnEpo.Yx5HN, .RnEpo._Yhr4, .xZ2Xk, .tHaIX{display: none !important} body{overflow-y: scroll !important} .CzVzU>div{z-index: 4}";
  }
  else if(document.location.href.includes("twitter.com")){
    //IF EDITING THIS LIST OF POPUPS, KEEP IT IN SYNC WITH THE POPUPS LISTED blockBannerTw
    st.textContent="#layers>.css-1dbjc4n.r-aqfbo4.r-1p0dtai.r-1d2f490.r-12vffkv.r-1xcajam.r-zchlnj>.css-1dbjc4n.r-12vffkv>.css-1dbjc4n.r-12vffkv>.css-1dbjc4n.r-l5o3uw, .css-1dbjc4n.r-1awozwy.r-14lw9ot.r-1dgieki.r-1efd50x.r-5kkj8d.r-18u37iz.r-16y2uox.r-1a1dyw.r-1swwhx3.r-1j3t67a.r-1qxgc49, .css-1dbjc4n.r-1awozwy.r-1kihuf0.r-18u37iz.r-1pi2tsx.r-1777fci.r-1pjcn9w.r-1xcajam.r-ipm5af.r-g6jmlv, .css-1dbjc4n.r-aqfbo4.r-1d2f490.r-12vffkv.r-1xcajam.r-zchlnj.r-ipm5af{display: none !important}";
  }
  else if(document.location.href.includes("reddit.com")){
    st.textContent=".m-blurred {filter: blur(0)} .XPromoNSFWBlocking__warning, .XPromoNSFWBlockingModal, .xPromoChoiceBanner, .XPromoPill, .XPromoPopup, .GetAppFooter, .XPromoInFeed, .XPromoBlockingModal, .TopNav__promoButton, shreddit-experience-tree, .PreviewDrawer, [data-testid=bottom-cell-wrapper]{display: none !important} .scroll-disabled {overflow-y: scroll !important; position: static !important} .NavFrame {overflow-y: scroll !important} .scroll-is-blocked {overflow-y: scroll !important}";
  }
  else if(document.location.href.includes("quora.com/")){
    st.textContent="*, #page_wrapper {filter: none !important} .new_signup_dialog{display: none !important} .q-platform--mobile{overflow-y: scroll !important; overflow-x: hidden !important;} .q-sticky{position: inherit !important}";
  }
  else if(document.location.href.includes("https://ask.fm/")){
    st.textContent="body{overflow-y: scroll !important} .expired-countdown::after{display: none !important}";
  }
  else if(document.location.href.includes("vk.com/")){
    st.textContent="body{overflow-y: scroll !important} .PageBottomBanner--unauth{display: none !important}";
  }
  else if(document.location.href.includes("//m.youtube.com")){
  	st.textContent=".upsell-dialog-lightbox{display: none !important} [modal-open-body]{position: inherit !important}";
  }
  else if(document.location.href.includes("//www.youtube.com")){
  	st.textContent="ytd-guide-signin-promo-renderer{display: none !important}";
  }
  else if(document.location.href.includes("facebook.com")){
    st.textContent=".asf1osic.k4urcfbm.j9ispegn.poy2od1o.tw6a2znq.m7u2wfa4.d1544ag0.i3j981x3.rlt63pii.i09qtzwb.hybvsw6c{display: none !important}";
    if((!document.location.href.includes("m.facebook.com"))&&(!document.location.href.includes("iphone.facebook.com"))&&(!document.location.href.includes("x.facebook.com"))&&(!document.location.href.includes("touch.facebook.com"))){
      st.textContent+="#pagelet_growth_expanding_cta{display: none !important}";
    }
    else if(document.location.href.includes("touch.facebook.com")){
      st.textContent+="._4b-b{display: none !important}";
    }
  }
  else if(document.location.href.includes("quora.com")){
    st.textContent=".signup_wall_wrapper>.BaseSignupForm._DialogSignupForm{display: none !important}";
  }
  else if(document.location.href.includes("https://www.pinterest.")){
    st.textContent="[data-test-id=bottom-right-upsell], [data-test-id=giftWrap], [data-test-id=fullPageSignupModal], [data-test-id=floating-app-upsell], .FNs.XiG.zI7.iyn.Hsu{display: none !important} .article-row{-ms-overflow-style: auto !important;scrollbar-width: auto !important;} ::-webkit-scrollbar {display: block !important;} ::-webkit-scrollbar-thumb {background: grey;}";
  }
  document.getElementsByTagName("HEAD")[0].appendChild(st);
}
function checkPageReady(){
  if((document.getElementsByTagName("BUTTON").length>0)||(document.getElementsByTagName("FORM").length>0)||(document.getElementsByClassName("signup_login_buttons").length>0)||(document.getElementById("layers")!==null)||(document.getElementById("mcont")!==null)){//If buttons are there, the page should have loaded. At least that's what I see...
    console.log("Page is ready");
    clearInterval(interval_4);
    if(document.location.href.includes("facebook.com")){
      interval_0=setInterval(blockPopupFB,500);
    }
    else if(document.location.href.includes("instagram.com")){
      clearInterval(interval_2);
      //The following observer checks if the popup is a login popup or a suggestion to use the app: if that's not the case, the popup is displayed.
      const igPopupObserverConfig = { attributes: false, childList: true, subtree: false };
      const igPopupObserverCallback = function(mutationsList, observeIgPopups) {
          for(const mutation of mutationsList) {
            if(mutation.addedNodes.length>0){
              //console.log(mutation);
              if(mutation.addedNodes[0].classList.contains("RnEpo")){
                //console.log(!mutation.addedNodes[0].querySelector("[name='username']"));
                if((!mutation.addedNodes[0].querySelector("[name='username']"))&&(!mutation.addedNodes[0].querySelector("[href*='/accounts/login/']"))){
                  let style="";
                  if(mutation.addedNodes[0].hasAttribute("style")){
                    style=mutation.addedNodes[0].getAttribute("style");
                  }
                   mutation.addedNodes[0].setAttribute("style","display: block !important;"+style);
                }
              }
            }
          }
      };
      const observeIgPopups = new MutationObserver(igPopupObserverCallback);
      observeIgPopups.observe(document.body, igPopupObserverConfig);
      
      //interval_1=setInterval(blockBannerIG,200);
      if((document.location.href.includes('instagram.com/p/'))||(document.location.href.includes('instagram.com/tv/'))||(document.location.href.includes('/reel/'))){
        if((document.location.href.includes('/tv/'))){
          let igtvVideo=document.getElementsByTagName("VIDEO")[0];
          let cln=igtvVideo.cloneNode(true);
          insertAfter(cln,igtvVideo);
          igtvVideo.remove();
        }
        interval_0=setInterval(allowVideoReplayStarterIG,500);
      }
      else if(document.location.href.includes('/channel')){
        if(document.getElementsByClassName("coreSpriteSearchIcon").length>0){//only desktop version shows login popup on igtv
           interval_2=setInterval(removePicturePopupIGTV,1000);
        }
      }
      else if((document.location.href.includes('/reels/'))||
              (document.location.href.includes('/guides/'))||
              (document.location.href.includes('/guide/'))){
        //do nothing;
      }
      else{//this should ideally only include the main page of the profile
        //interval_2=setInterval(blockPopupIG,200);
        let sectionLinks=document.getElementsByClassName("_9VEo1");
        for(let sectionLink of sectionLinks){
        	if(sectionLink.href.includes("%2Ffeed%2F")){
            let tmpSectionLink=sectionLink.cloneNode(true);
            tmpSectionLink.href=document.location.href+"feed/";
            sectionLink=sectionLink.parentNode.replaceChild(tmpSectionLink,sectionLink);
            break;
          }
        }
        interval_3=setInterval(removeRelatedAccounts,200);
        interval_2=setInterval(removePicturePopup,500);
      }
    }
    else if(document.location.href.includes("reddit.com")){//reddit has a wide range of different login reminders for installing the app or logging in when browsing from a phone
      if(document.getElementsByClassName("TopNav__promoButton").length>0){
        var isMobile=true;
        if(document.getElementsByClassName("MobileButton").length==0){
          isMobile=false;
        }
      	redditPatch(isMobile);
      }
    }
    else if(document.location.href.includes("quora.com/")){
      quoraPatchObserver();
    }
    else if(document.location.href.includes("/twitter.com")){
      blockBannerTW("d");
    }
    else if(document.location.href.includes("mobile.twitter.com")){
      blockBannerTW("m");
    }
    else if(document.location.href.includes("https://ask.fm/")){
      removeAskFmLoginPopup();
    }
    else if(document.location.href.includes("https://vk.com/")){
      checkVKLoginPopup("d");
    }
    else if(document.location.href.includes("https://m.vk.com/")){
      checkVKLoginPopup("m");
    }
    else if(document.location.href.includes("https://www.pinterest.")){
      document.body.setAttribute("style", "overflow-y: auto !important");
    }
  }
  else{
    console.log("still non buttons");
  }
}
function blockPopupFB(){
  var popupFB;
  var loc=document.location.href;
  if((loc.includes("m.facebook.com"))||(loc.includes("iphone.facebook.com"))||(loc.includes("x.facebook.com"))){
    popupFB=document.getElementById("popup_xout").parentNode.parentNode.parentNode;
	}
  if(popupFB==undefined){
    popupFB=document.getElementsByClassName("_5hn6")[0];
    if(popupFB==undefined){
      popupFB=document.getElementById("login_popup_cta_form").parentNode.parentNode.parentNode.parentNode;
      let scrollview=document.getElementById("scrollview");
      scrollview.parentNode.lastChild.remove();
      scrollview.style.scrollbarWidth="auto";
      document.getElementsByClassName("asf1osic k4urcfbm j9ispegn poy2od1o tw6a2znq m7u2wfa4 d1544ag0 i3j981x3 rlt63pii i09qtzwb hybvsw6c")[0].remove();
    }
  }
  if(popupFB!==undefined){
    popupFB.parentNode.removeChild(popupFB);
    clearInterval(interval_0);
  }
}
function removeRelatedAccounts(){
	//var t0=performance.now();
  let morePostsBtn=document.getElementsByClassName('tCibT qq7_A  z4xUb w5S7h')[0];
  if(morePostsBtn!==undefined){
    morePostsBtn.click();
    clearInterval(interval_3);
  }
  else{
    var closeButtons=document.getElementsByClassName("fUzmR");
    if(closeButtons.length>0){
      for(var i=0;i<closeButtons.length;i++){
        //closeButtons[i].click();
      }
      clearInterval(interval_3);
    }
  }
  //var t1=performance.now();
  //alert(t1-t0);
}
function removePicturePopup(){
  console.log("removing picture popup");
  if(!document.location.href.includes("/p/")){
    var photoLinks=document.getElementsByClassName("v1Nh3");
    for(var i=0;i<photoLinks.length;i++){
      if(photoLinks[i].getAttribute("class").includes("repaired")===false){
        if(photoLinks[i].getElementsByTagName("IMG")[0].getAttribute("src")!==null){
          var cln = photoLinks[i].children[0].cloneNode(true);
          photoLinks[i].removeChild(photoLinks[i].children[0]);
          photoLinks[i].appendChild(cln);
          photoLinks[i].setAttribute("class",(photoLinks[i].getAttribute("class")+" repaired"));
          photoLinks[i].children[0].setAttribute("target","_blank");
          photoLinks[i].children[0].setAttribute("rel","noopener noreferrer");
          photoLinks[i].children[0].children[0].children[0].children[0].style.visibility="visible";
        }
      }
    }
  }
}
function removePicturePopupIGTV(){
  console.log("removing picture popup from igtv");
  if(!document.location.href.includes("/tv/")){
    var videoLinks=document.getElementsByClassName("_bz0w");
    for(var i=0;i<videoLinks.length;i++){
      if(videoLinks[i].getAttribute("class").includes("repaired")===false){
        if(videoLinks[i].getElementsByClassName("lVhHa RNL1l")[0].style.backgroundSrc!==null){
          var cln = videoLinks[i].cloneNode(true);
          cln.setAttribute("class",(videoLinks[i].getAttribute("class")+" repaired"));
          insertAfter(cln,videoLinks[i]);
          videoLinks[i].remove();
        }
      }
    }
  }
}
function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
 
/*function blockPopupIG(){ //kept for reference
  if(document.getElementsByClassName("RnEpo")[0]!==undefined){
    setScrollable();
  }
}*/
/*function setScrollable(){ //kept for reference
  document.body.style.overflow = "scroll !important";
}*/
function blockBannerTW(s){
  /*if(s=='d'){
  	document.getElementsByClassName("css-1dbjc4n r-16y2uox r-1n0xq6e")[0].parentNode.parentNode.parentNode.parentNode.remove();
  }
  else{
    var banner=document.getElementsByClassName("css-1dbjc4n r-1awozwy r-1pz39u2 r-18u37iz r-16y2uox")[0].parentNode;
    if(banner!=='undefined'){
      banner.parentNode.style.height="53px";
      banner.remove();
    }
    banner=document.getElementsByClassName("css-1dbjc4n r-urgr8i r-97e31f")[0];
    if(banner!=='undefined'){
      banner.remove();
    }
  }*/
  if(mutationObserver_0===undefined){
    function callback_a(mutationList) {
      mutationList.forEach(function(mutation) {
        let largeLP;
        //IF EDITING THIS LIST OF POPUPS, KEEP IT IN SYNC WITH THE POPUPS LISTED IN CUSTOM CSS
        largeLP=document.querySelector(".css-1dbjc4n.r-aqfbo4.r-1d2f490.r-12vffkv.r-1xcajam.r-zchlnj.r-ipm5af");//big login popup triggered when clicking on "like" or "comment" (mobile)
        if(largeLP===null){
          largeLP=document.querySelector(".css-1dbjc4n.r-1awozwy.r-1kihuf0.r-18u37iz.r-1pi2tsx.r-1777fci.r-1pjcn9w.r-1xcajam.r-ipm5af.r-g6jmlv");//big login popup triggered when clicking on "like" or "comment" (desktop);
        }
        if(largeLP===null){
          largeLP=document.querySelector(".css-1dbjc4n.r-1awozwy.r-14lw9ot.r-1dgieki.r-1efd50x.r-5kkj8d.r-18u37iz.r-16y2uox.r-1a1dyw.r-1swwhx3.r-1j3t67a.r-1qxgc49");//another popup (i don't remember which one)
        }
        if(largeLP===null){
          largeLP=document.querySelector("#layers>.css-1dbjc4n.r-aqfbo4.r-1p0dtai.r-1d2f490.r-12vffkv.r-1xcajam.r-zchlnj>.css-1dbjc4n.r-12vffkv>.css-1dbjc4n.r-12vffkv>.css-1dbjc4n.r-l5o3uw");//another popup (i don't remember which one)
        }
        if(largeLP!==null){
          if(mutation.target.style.overflow=="hidden"){//definitely not the right way to do it, but setting the style attributes with mutation.target.style doesn't work.
            let restyle=mutation.target.getAttribute("style");
            restyle=restyle.replace("overflow: hidden","overflow: auto scroll");
            restyle=restyle.replace("margin-right: 17px","margin-right: auto");
            restyle=restyle.replace("overscroll-behavior-y: none;","overscroll-behavior-y: auto");
            restyle=restyle.replace("position: fixed","position: unset");
           	mutation.target.setAttribute("style",restyle);
          }
        }
      });
    }
    mutationObserver_0 = new MutationObserver(callback_a);
    mutationObserver_0.observe(document.documentElement, {attributes: true});
  }
}
function redditPatch(isMobile){
  const nav=document.getElementsByClassName("NavFrame__below-top-nav")[0];
  const config = { attributes: false, childList: true, subtree: true };
  var firstCheck=true;
  var redditPic=document.body.getElementsByTagName("IMG");
  const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
      if(isMobile){
        let articles=mutation.target.getElementsByTagName("ARTICLE");
        if(articles.length>0){
          for (const article of articles){
            if(!article.classList.contains("replaced")){
              if((article.getElementsByTagName("video").length==0)&&(article.getElementsByClassName("slideImageMainDiv").length==0)){
                var articleCopy=article.cloneNode(true);
                articleCopy.classList.add("replaced");
                article.replaceWith(articleCopy);
              }
            }
          }
        }
      }
      if(firstCheck==false){
        redditPic=mutation.target.getElementsByTagName("IMG");
      }
      if(redditPic.length>0){
        for(var i=0;i<redditPic.length;i++){
          if((redditPic[i].getAttribute("src").includes("blur="))&&(redditPic[i].getAttribute("src").includes("/preview."))){
            redditPic[i].setAttribute("src",redditPic[i].getAttribute("src").split("?")[0].replace("preview","i"));
          }
        }
        firstCheck=false;
      }
    }
  };
  const bodyObserver = new MutationObserver(callback);
  bodyObserver.observe(nav, config);
}
function quoraPatchObserver(){
  var firstCheck=true;
  var searchBox=document.createElement("DIV");
  searchBox.className="q-flex qu-alignItems--center qu-justifyContent--center";
  searchBox.style="box-sizing: border-box; display: flex; max-width: 100%;";
  let a=document.createElement("INPUT");
  a.id="search";
  a.style="height: 44px; text-align: center; border-radius: 22px; background-color:white; width: 100%; margin: 0.5em";
  a.className="selector_input text";
  a.value="";
  a.setAttribute("data-lpignore","true");
  a.setAttribute("data-group","js-editable");
  a.setAttribute("placeholder","Search");
  a.setAttribute("w2cid","wS7KcEIg18");
  searchBox.appendChild(a);
  searchBox.addEventListener('keypress', function(e){searchQuora(e);});
  try{
  	document.getElementsByClassName("q-sticky qu-zIndex--header")[0].appendChild(searchBox);
  }
  catch(e){
    try{
      document.getElementsByClassName("header_main")[0].appendChild(searchBox);
      document.getElementsByClassName("query_title")[0].style.marginTop="2em";
    }catch(err){console.log("Info: if you are browsing from a PC, this error is expected.");}
  }
  quoraPatch(firstCheck);
  firstCheck=false;
  const config = { attributes: true, childList: true, subtree: false };//this rough implementation is slower
  const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
				quoraPatch(firstCheck);
    }
  };
  const bodyObserver = new MutationObserver(callback);
  bodyObserver.observe(document.body, config);
}
function quoraPatch(firstCheck){
  var i;
  var wall;
  if(firstCheck==true){
    wall=document.getElementsByClassName("q-box qu-overflow--hidden");
    if(wall.length>1){
      let bgColor=getComputedStyle(wall[0].parentNode.children[0]).backgroundColor;
      if(bgColor=="rgba(68, 68, 68, 0.85)"){
        wall[0].parentNode.children[0].remove();
        wall[0].classList.remove("qu-overflow--hidden");
      }
    }
  }
  if(document.body.className.includes('signup_wall_prevent_scroll')){
    document.body.classList.remove('signup_wall_prevent_scroll');
  }
  wall=document.getElementsByClassName('new_web_signup_wall_design');
  if(wall.length>0){
    wall[0].parentNode.parentNode.remove();//desktop
  }
  wall=document.getElementsByClassName('modal_bg new_signup_dialog');
  if(wall.length>0){
    wall[0].parentNode.remove();//mobile
  }
  wall=document.getElementsByClassName('q-absolute qu-full qu-bg--blue');
  if(wall.length>0){
    wall[0].parentNode.remove();//mobile
  }
}
function searchQuora(e) {
  if (e.key === 'Enter') {
    window.open("https://www.quora.com/search?q="+document.getElementById("search").value,"_self");
  }
}
function removeAskFmLoginPopup(){
  try{
    const closeButton=document.createElement("DIV");
    closeButton.id="closeButton";
    closeButton.style.padding="1em";
    closeButton.style.right="1em";
    closeButton.style.top="1em";
    closeButton.style.position="absolute";
    closeButton.textContent="X";
    closeButton.style.borderRadius="3px";
    closeButton.style.backgroundColor="#666666";
    closeButton.style.color="#FFFFFF";
    closeButton.style.cursor="pointer";
    closeButton.addEventListener("click",function(e){document.getElementsByClassName("lightbox_overlay")[0].remove();});
    var lightbox=document.getElementsByClassName("lightbox_overlay");
    console.log(lightbox.length);
    if(lightbox.length>0){
      if(lightbox[0].getElementsByClassName("lightbox_content-conversion").length>0){
        lightbox[0].parentNode.removeChild(lightbox[0]);
      }
    }
    const callback = function(mutationsList, observer) {
      for(const mutation of mutationsList) {
        console.log("A");
        for(let newNode of mutation.addedNodes){
          if(newNode.className.includes("lightbox_overlay")){
            if(newNode.getElementsByClassName("lightbox_content-conversion").length>0){
              console.log("popup deleted");
              newNode.parentNode.removeChild(newNode);
            }
            else{
              newNode.appendChild(closeButton);
            }
          }
        }
      }
    };
    const config = { attributes: false, childList: true, subtree: true };
    const observer = new MutationObserver(callback);
    observer.observe(document.documentElement, config);
  }
  catch(err){console.log("ERROR: "+err);}
}
function checkVKLoginPopup(mode){
  const popups=document.getElementsByClassName("UnauthActionBoxContainer");
  if(popups.length>0){
    removeVKLoginPopup(popups[0]);
  }
  const config = { attributes: false, childList: true, subtree: false };
  const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
      for(let newNode of mutation.addedNodes){
      	if(newNode.className.includes("UnauthActionBoxContainer")){
          removeVKLoginPopup(newNode,mode);
        }
        else if(newNode.getElementsByClassName("UnauthorizedActionModal")!==undefined){
          removeVKLoginPopup(newNode,mode);
        }
      }
    }
  };
  const observer = new MutationObserver(callback);
  if(mode=="d"){
  	observer.observe(document.getElementById("box_layer"), config);
  }
  else{
    observer.observe(document.body, config);
  }
}
function removeVKLoginPopup(popup,mode){
  popup.remove();
  console.log("Popup removed");
  if(mode=="d"){
  	document.getElementById("box_layer_bg").remove();
  	document.getElementById("box_layer_wrap").remove();
  }
  else{
    document.getElementById("popup_wrap").remove();
		document.getElementById("popup_overlay").remove();
  }
}
function allowVideoReplayStarterIG(){
  var imgBox=document.getElementsByClassName("pR7Pc");
  if(imgBox.length>0){
    let videoPlayer=imgBox[0].getElementsByTagName("VIDEO");
    if(videoPlayer.length>0){
      let moveTagCss=document.createElement("style");
      moveTagCss.textContent=".LcKDX, ._7zNgw.GLdVF {bottom: 3em}";
      document.body.appendChild(moveTagCss);      
      for (let vp of videoPlayer){
        vp.controls=true;
      }
    }
  	allowVideoReplayIG(imgBox[0]);
    clearInterval(interval_0);
  }
  else{
    imgBox=document.getElementsByClassName("kPFhm B1JlO OAXCp");
    if(imgBox.length>0){
      let videoPlayer=imgBox[0].getElementsByTagName("VIDEO");
      if(videoPlayer.length>0){
        let moveTagCss=document.createElement("style");
        moveTagCss.textContent=".LcKDX, ._7zNgw.GLdVF {bottom: 3em}";
        document.body.appendChild(moveTagCss);
        for (let vp of videoPlayer){
          vp.controls=true;
        }
      }
      allowVideoReplayIG(imgBox[0]);
      clearInterval(interval_0);
    }
  }
}
function allowVideoReplayIG(imgBox){
  console.log("add video controls");
  const config = { attributes: false, childList: true, subtree: true };
  const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
      for(let newNode of mutation.addedNodes){
				let videoPlayer=newNode.getElementsByTagName("VIDEO");
        if(videoPlayer.length>0){
          for (var vp of videoPlayer){
            vp.controls=true;
          }
        }
      }
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(imgBox, config);
}
