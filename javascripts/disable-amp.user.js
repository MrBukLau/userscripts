// ==UserScript==
// @name               Disable AMP
// @namespace          https://github.com/MrBukLau
// @version            1.0
// @description        Disable AMP on the search results page of Google
// @author             MrBukLau
// @homepageURL        https://github.com/MrBukLau/userscripts
// @supportURL         https://github.com/MrBukLau/userscripts/issues
// @downloadURL        https://github.com/MrBukLau/userscripts/raw/master/javascripts/disable-amp.user.js
// @updateURL          https://github.com/MrBukLau/userscripts/raw/master/javascripts/disable-amp.user.js
// @icon               https://amp.dev/static/img/favicon.png
// @include            https://www.google.*/*
// @include            https://yandex.*/*
// @include            https://*.turbopages.org/*
// @include            https://*/amp/*
// @include            https://amp.*
// @include            https://*/amp-*/*
// @include            https://*/?amp*
// @include            https://*?amp=1*
// @include            https://*/*&amp*
// @include            https://*/*&amp=1*
// @exclude            https://amp.dev/*
// @exclude            https://www.orfonline.org/*
// @grant              none
// @run-at             document-end
// ==/UserScript==

! function(t) {
    var e = {};

    function r(n) {
        if (e[n]) return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = t, r.c = e, r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) r.d(n, o, function(e) {
                return t[e]
            }.bind(null, o));
        return n
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r(r.s = 0)
}([function(t, e, r) {
    "use strict";
    r.r(e);

    function n(t) {
        return function(t) {
            if (Array.isArray(t)) return o(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return o(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function o(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }
    var a, i = /^https?:\/\/.+/i,
        u = "__".concat(Math.random()),
        c = function(t) {
            var e = t.querySelector('[aria-label="AMP logo"], [aria-label="Logo AMP"]');
            e && (e.style.display = "none")
        },
        l = function() {
            n(document.querySelectorAll("a.amp_r[data-amp-cur]")).forEach((function(t) {
                if (!t[u]) {
                    t[u] = !0;
                    var e = t.getAttribute("data-amp-cur");
                    e && (t.setAttribute("href", e), t.addEventListener("click", (function(t) {
                        t.preventDefault(), t.stopPropagation(), document.location.href = e
                    }), !0), c(t))
                }
            })), document.querySelectorAll("a[data-amp-cdn]").forEach((function(t) {
                var e = t.href;
                e.includes("cdn.ampproject.org") && (e = "https://" + e.substr(e.indexOf("cdn.ampproject.org/wp/s/") + 24)), e.substr(8).startsWith("amp.") && (e = "https://" + e.substr(12)), (e = e.replace("?amp&", "?&")) !== t.href && (t.setAttribute("href", e), t.addEventListener("click", (function(t) {
                    t.preventDefault(), t.stopPropagation(), document.location.href = e
                }), !0), c(t))
            }))
        };
    document.location.href.includes("https://yandex.ru/turbo") ? function() {
        var t = document.querySelector('script[data-name="post-message"][data-message]');
        if (t) {
            var e = t.getAttribute("data-message"),
                r = JSON.parse(e);
            r && r.originalUrl && (document.location.href = r.originalUrl)
        }
    }() : document.location.origin.includes("google.") ? new MutationObserver(l).observe(document, {
        childList: !0,
        subtree: !0
    }) : (a = document.querySelector('head > link[rel="canonical"]'), document.querySelector('head > script[src^="https://cdn.ampproject.org"]') && a && i.test(a.href) && (window.top.location.href = a.href))
}]);
