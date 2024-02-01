function scrollToElement(elementId) {
    var element = document.getElementById(w-node-d523f2c3-a156-b008-eaf8-7c2c83df4571-b006e859);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll(".option");
  const contentContainer = document.getElementById("content-container");

  options.forEach((option) => {
    option.addEventListener("click", function () {
      options.forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");
      updateContent(this.dataset.option);
    });
  });

  function updateContent(option) {
    if (option === "medical") {
      contentContainer.innerHTML = "Pre-Clinical / Step 1 , Clinical / Step 2";
    } else if (option === "mcat") {
      contentContainer.innerHTML = "MCAT Coming Soon";
    } else if (option === "pa") {
      contentContainer.innerHTML = "PA Coming Soon";
    } else if (option === "pharmacy") {
      contentContainer.innerHTML = "Pharmacy Coming Soon";
    } else if (option === "nursing") {
      contentContainer.innerHTML =
        "Learn about Pharmacology with our sketch videos in thirty minutes or less";
    }
  }

  // Set default option
  document.querySelector('[data-option="medical"]').click();
});












var _____WB$wombat$assign$function_____ = function(name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function(obj) {
        this.__WB_source = obj;
        return this;
    }
}
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    /**
 * HubSpot Cookie Banner Code Copyright 2021 HubSpot, Inc.  http://www.hubspot.com
 */
    var _hsp = window['_hsp'] = window['_hsp'] || [];
    _hsp.push(['setCookiePolicy', [{
        "portalId": 9337792,
        "id": 3516964,
        "domain": null,
        "path": "/hubspot-analytics-default-policy",
        "label": null,
        "enabled": false,
        "privacyPolicy": 0,
        "privacyHideDecline": false,
        "privacyDefault": true,
        "privacyPolicyWording": null,
        "privacyAcceptWording": null,
        "privacyDismissWording": null,
        "privacyDisclaimerWording": null,
        "privacyBannerAccentColor": "#425b76",
        "privacyBannerType": "TOP",
        "cookiesByCategory": null,
        "targetedCountries": []
    }]]);
    _hsp.push(['addCookieDomain', '.sketchy.com']);
    _hsp.push(['addCookieDomain', '.hsforms.com']);
    _hsp.push(['addCookieDomain', '.sketchy-stg.com']);
    _hsp.push(['addCookieDomain', '.hs-sites.com']);
    _hsp.push(['addCookieDomain', '.hubspot.com']);
    _hsp.push(['addCookieDomain', '.hubspotpagebuilder.com']);
    _hsp.push(['setApiBaseUrl', 'https://web.archive.org/web/20210404223102/https://js.hs-banner.com/cookie-banner']);
    !function(e) {
        var t = {};
        function i(n) {
            if (t[n])
                return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            e[n].call(o.exports, o, o.exports, i);
            o.l = !0;
            return o.exports
        }
        i.m = e;
        i.c = t;
        i.d = function(e, t, n) {
            i.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }
        ;
        i.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            });
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ;
        i.t = function(e, t) {
            1 & t && (e = i(e));
            if (8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            i.r(n);
            Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            });
            if (2 & t && "string" != typeof e)
                for (var o in e)
                    i.d(n, o, function(t) {
                        return e[t]
                    }
                    .bind(null, o));
            return n
        }
        ;
        i.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            i.d(t, "a", t);
            return t
        }
        ;
        i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ;
        i.p = "//web.archive.org/web/20210404223102/https://static.hsappstatic.net/cookie-banner/static-1.943/";
        i(i.s = 3)
    }([function(e, t) {
        e.exports = "div#hs-eu-cookie-confirmation{background:#fff;height:auto;left:0;position:absolute;top:0;width:100%;z-index:100000000!important;border-bottom:1px solid #cbd6e2;border-top:1px solid #cbd6e2;box-shadow:0 1px 5px #eaf0f6;color:#33475b;font-family:inherit;font-size:inherit;font-weight:400!important;line-height:inherit;text-align:left;text-shadow:none!important;font-size:12px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;line-height:18px}div#hs-eu-cookie-confirmation.hs-cookie-notification-position-bottom{position:fixed;border-bottom:0;bottom:0;top:auto;box-shadow:0 -1px 3px #eaf0f6}div#hs-eu-cookie-confirmation *{box-sizing:border-box!important}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner{background:#fff;margin:0 auto;max-width:1000px;padding:20px}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner a{text-decoration:none!important}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner a,div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner a:hover{background:none!important;border:none!important;box-shadow:none!important;color:#0091ae;font-family:inherit;font-size:inherit;font-weight:400!important;line-height:inherit;text-align:left;text-shadow:none!important}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner a:hover{text-decoration:underline!important}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner div#hs-eu-policy-wording{margin-bottom:12px}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner div#hs-en-cookie-confirmation-buttons-area{margin:10px 0 0!important;text-align:right!important}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner a#hs-eu-confirmation-button,div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner a#hs-eu-decline-button{border-radius:3px;display:inline-block;padding:10px 16px!important;text-decoration:none!important}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner a#hs-eu-confirmation-button{background-color:#425b76!important;border:1px solid #425b76!important;margin-right:12px!important;color:#fff;font-family:inherit;font-size:inherit;font-weight:400!important;line-height:inherit;text-align:left;text-shadow:none!important}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner a#hs-eu-decline-button{border:1px solid #425b76!important;color:#425b76;font-family:inherit;font-size:inherit;font-weight:400!important;line-height:inherit;text-align:left;text-shadow:none!important}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner a#hs-eu-cookie-settings-button{color:#425b76!important;margin-right:12px!important}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner p{margin:0 0 12px;color:#33475b;font-family:inherit;font-size:inherit;font-weight:400!important;line-height:inherit;text-align:left;text-shadow:none!important}@media print{div#hs-eu-cookie-confirmation{display:none!important}}@media screen and (max-width:480px){div#hs-eu-cookie-confirmation{font-size:12px!important}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner{padding:8px 14px 14px!important}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner a,div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner a#hs-eu-confirmation-button{font-size:12px!important}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner p{font-size:12px!important;margin-bottom:12px!important;line-height:15px!important}}@media only screen and (min-width:960px){div#hs-eu-cookie-confirmation{position:fixed}}"
    }
    , function(e, t) {
        e.exports = "div#hs-eu-cookie-confirmation{position:absolute;left:0;top:0;width:100%;height:auto;background-color:#2d2d2d;border-bottom:1px solid gray;border-bottom:1px solid rgba(0,0,0,.5);-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);-moz-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2);font-size:14px!important;line-height:18px!important;font-family:helvetica neue,helvetica,arial,sans!important;color:#fff!important;text-shadow:0 1px 0 rgba(0,0,0,.7)!important;text-align:left!important;z-index:100000000!important}div#hs-eu-cookie-confirmation.can-use-gradients{background-color:transparent;background-image:-owg-linear-gradient(top,rgba(0,0,0,.9),rgba(0,0,0,.75));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.9),rgba(0,0,0,.75));background-image:-moz-linear-gradient(top,rgba(0,0,0,.9),rgba(0,0,0,.75));background-image:-o-linear-gradient(top,rgba(0,0,0,.9),rgba(0,0,0,.75));background-image:linear-gradient(top,rgba(0,0,0,.9),rgba(0,0,0,.75));background-image:linear-gradient(180deg,rgba(0,0,0,.9),rgba(0,0,0,.75))}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner{padding:12px 18px 18px}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner a{font-family:helvetica neue,helvetica,arial,sans!important;color:#add8e6!important;font-size:14px!important;text-decoration:none!important;background:none!important;border:none!important;font-weight:400!important}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner a:hover{text-decoration:underline!important;background:none!important;border:none!important}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner div#hs-en-cookie-confirmation-buttons-area{text-align:center!important}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner input#hs-eu-active-consent-checkbox{display:inline-block!important;cursor:pointer!important;font-size:xx-large!important}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner a#hs-eu-confirmation-button{font-family:helvetica neue,helvetica,arial,sans!important;font-size:14px!important;font-weight:400!important;margin-right:16px!important;padding:4px 12px!important;background-color:green!important;display:inline-block!important;border:1px solid gray!important;border:1px solid rgba(0,0,0,.5)!important;background-image:-owg-linear-gradient(top,transparent,rgba(0,0,0,.2));background-image:-webkit-linear-gradient(top,transparent,rgba(0,0,0,.2));background-image:-moz-linear-gradient(top,transparent,rgba(0,0,0,.2));background-image:-o-linear-gradient(top,transparent,rgba(0,0,0,.2));background-image:linear-gradient(top,transparent,rgba(0,0,0,.2));-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;border-radius:4px;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2),inset 0 1px 0 hsla(0,0%,100%,.5);-moz-box-shadow:0 1px 2px rgba(0,0,0,.2),inset 0 1px 0 hsla(0,0%,100%,.5);box-shadow:0 1px 2px rgba(0,0,0,.2),inset 0 1px 0 hsla(0,0%,100%,.5);line-height:14px!important;color:#fff!important;text-shadow:0 1px 0 rgba(0,0,0,.5)!important;text-decoration:none!important}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner a#hs-eu-confirmation-button:hover{background-image:-owg-linear-gradient(top,transparent,rgba(0,0,0,.3));background-image:-webkit-linear-gradient(top,transparent,rgba(0,0,0,.3));background-image:-moz-linear-gradient(top,transparent,rgba(0,0,0,.3));background-image:-o-linear-gradient(top,transparent,rgba(0,0,0,.3));background-image:linear-gradient(top,transparent,rgba(0,0,0,.3))}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner a#hs-eu-confirmation-button:active{background-image:-owg-linear-gradient(top,rgba(0,0,0,.3),rgba(0,0,0,.3));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.3),rgba(0,0,0,.3));background-image:-moz-linear-gradient(top,rgba(0,0,0,.3),rgba(0,0,0,.3));background-image:-o-linear-gradient(top,rgba(0,0,0,.3),rgba(0,0,0,.3));background-image:linear-gradient(top,rgba(0,0,0,.3),rgba(0,0,0,.3));-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.2);-moz-box-shadow:inset 0 1px 2px rgba(0,0,0,.2);box-shadow:inset 0 1px 2px rgba(0,0,0,.2)}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner p{line-height:18px!important;font-family:helvetica neue,helvetica,arial,sans!important;font-weight:400!important;font-size:14px!important;margin:0 0 16px!important;padding:0!important;color:#fff!important;text-align:left!important}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner p#hs-eu-cookie-disclaimer{margin:16px 0!important}@media print{div#hs-eu-cookie-confirmation{display:none!important}}@media screen and (max-width:480px){div#hs-eu-cookie-confirmation{font-size:12px!important}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner{padding:8px 14px 14px!important}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner a,div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner a#hs-eu-confirmation-button{font-size:12px!important}div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner p{font-size:12px!important;margin-bottom:12px!important;line-height:15px!important}}"
    }
    , function(e, t) {
        e.exports = 'body .hs-hidden{display:none!important}body #hs-modal{position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);z-index:100000001!important}@media print{body #hs-modal{display:none!important}}body #hs-modal .hs-sr-only{position:absolute;left:-10000px;width:1px;height:1px;overflow:hidden}body #hs-modal #hs-modal-content{display:table;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;max-width:750px;border-radius:5px;box-sizing:border-box;font-size:12px!important;font-family:Helvetica Neue,Helvetica,Arial,sans-serif!important;line-height:18px}@media (min-width:800px){body #hs-modal #hs-modal-content{width:750px;padding:1rem 1.5rem}}@media (max-width:800px){body #hs-modal #hs-modal-content{min-width:350px;max-width:500px;height:100%;max-height:600px}}body #hs-modal #hs-modal-content a{text-decoration:none!important}body #hs-modal #hs-modal-content a,body #hs-modal #hs-modal-content a:hover{background:none!important;border:none!important;box-shadow:none!important;color:#0091ae!important;font-family:inherit!important;font-size:inherit!important;font-weight:400!important;line-height:inherit!important;text-align:left;text-shadow:none!important}body #hs-modal #hs-modal-content a:hover{text-decoration:underline!important}body #hs-modal #hs-modal-content #hs-modal-header{display:table-row;height:10%}@media (max-width:800px){body #hs-modal #hs-modal-content #hs-modal-header{height:5%}}body #hs-modal #hs-modal-content #hs-modal-header #hs-modal-header-container{height:100%;width:100%}@media (max-width:800px){body #hs-modal #hs-modal-content #hs-modal-header #hs-modal-header-container{border-bottom:1px solid #c0bebe}}body #hs-modal #hs-modal-content #hs-modal-header #hs-modal-close-button{float:right;width:1.5rem;font-size:40px;text-align:center;cursor:pointer;color:#8b8589}@media (max-width:800px){body #hs-modal #hs-modal-content #hs-modal-header #hs-modal-close-button{margin-right:10px;font-size:30px;line-height:50px}}@media (min-width:800px){body #hs-modal #hs-modal-content #hs-modal-header #hs-modal-close-button{margin-bottom:20px}}body #hs-modal #hs-modal-content #hs-modal-body{display:table-row;height:70%}@media (max-width:800px){body #hs-modal #hs-modal-content #hs-modal-body{height:85%}}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container{height:100%;width:100%;position:relative}@media (max-width:800px){body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container{overflow:auto}}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-row{width:100%}@media (min-width:800px){body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-row{height:100%;overflow:hidden}}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-label{padding:16px;background:#f1f1f1;color:#353535;cursor:pointer;transition:all .3s;border:1px solid #c0bebe;height:50px;box-sizing:border-box}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-label span{color:#353535!important;font-family:inherit!important;font-size:inherit!important;line-height:inherit!important;text-align:left;text-shadow:none!important;font-size:14px!important;font-family:Helvetica Neue,Helvetica,Arial,sans-serif!important;font-weight:400!important}@media (min-width:800px){body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-label{float:left;width:28%}}@media (max-width:800px){body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-label{width:100%}}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-label:hover{background:#cbcbcb;position:relative;z-index:5}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-label.hs-active{background:#fff;border-right:none;border-left:5px solid #33475b}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-fill{box-sizing:border-box;width:28%;height:50px;border-right:1px solid #c0bebe}@media (max-width:800px){body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-fill{display:none}}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-description{box-sizing:border-box;padding:16px;height:100%;overflow:auto}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-description p{margin-bottom:12px!important;color:#33475b!important;font-family:inherit!important;font-size:inherit!important;font-weight:400!important;line-height:inherit!important;text-align:left;text-shadow:none!important}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-description h3{color:#33475b!important;font-family:inherit!important;font-size:22px!important;font-weight:500!important;line-height:normal!important;margin-top:0;letter-spacing:normal!important;font-style:normal!important;text-decoration:none!important}@media (min-width:800px){body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-description{position:absolute;width:72%;left:28%;top:0;border:1px solid #c0bebe;border-left:0}}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-description .hs-category-description-text{margin-top:20px}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-always-active-label{float:right;margin-right:10px;color:#425b76!important;font-family:inherit!important;font-size:inherit!important;font-weight:400!important;line-height:inherit!important;text-align:left;text-shadow:none!important;line-height:27px!important}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-toggle{width:60px;height:34px;float:right;position:relative}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-toggle label{position:relative;text-align:center}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-toggle input{opacity:0;width:0;height:0}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-toggle .slider{position:absolute;cursor:pointer;border-radius:34px;top:-5px;left:0;right:0;bottom:5px;background-color:#ccc;-webkit-transition:.4s;transition:.4s}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-toggle .slider:before{position:absolute;content:"";border-radius:50%;height:26px;width:26px;left:4px;bottom:4px;background-color:#fff;-webkit-transition:.4s;transition:.4s}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-toggle input:checked+.slider{background-color:#425b76}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-toggle input:focus+.slider{box-shadow:0 0 8px #2196f3}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-toggle input:checked+.slider:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px)}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-category-toggle input:disabled+.slider{opacity:.5;pointer-events:none}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-modal-checkmark,body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-modal-cross{text-align:center;float:right}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-modal-checkmark{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+Y2hlY2s8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPHBhdGggZD0iTTE4LjAzMDM4NDYsMi44NDU4OTMxNyBMNy4zMDgwNzY5MiwxMy44MTYwOTc3IEwxLjk2OTYxNTM4LDguMzU0OTk5NCBDMS41MTg4NDYxNSw3Ljg5MzgwODUxIDAuNzg4ODQ2MTU0LDcuODkzODA4NTEgMC4zMzgwNzY5MjMsOC4zNTQ5OTk0IEMtMC4xMTI2OTIzMDgsOC44MTYxOTAyOSAtMC4xMTI2OTIzMDgsOS41NjMwNjc2OSAwLjMzODA3NjkyMywxMC4wMjQyNTg2IEw2LjQ5MTkyMzA4LDE2LjMyMDM4IEM2LjcxNzMwNzY5LDE2LjU1MDk3NTQgNy4wMTI2OTIzMSwxNi42NjY2NjY3IDcuMzA4MDc2OTIsMTYuNjY2NjY2NyBDNy42MDI2OTIzMSwxNi42NjY2NjY3IDcuODk4MDc2OTIsMTYuNTUwOTc1NCA4LjEyMzQ2MTU0LDE2LjMyMDM4IEwxOS42NjE5MjMxLDQuNTE1MTUyMzYgQzIwLjExMjY5MjMsNC4wNTM5NjE0NiAyMC4xMTI2OTIzLDMuMzA3MDg0MDYgMTkuNjYxOTIzMSwyLjg0NTg5MzE3IEMxOS4yMTExNTM4LDIuMzg0NzAyMjggMTguNDgxMTUzOCwyLjM4NDcwMjI4IDE4LjAzMDM4NDYsMi44NDU4OTMxNyIgaWQ9InBhdGgtMSI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9ImNoZWNrIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iSWNvbnMvR2VuZXJhbC9DaGVjayI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPHVzZSBpZD0iSWNvbnMvVXRpbGl0aWVzL1N1Y2Nlc3MiIGZpbGw9IiMwMEJEQTUiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);width:20px!important;height:20px!important}body #hs-modal #hs-modal-content #hs-modal-body #hs-modal-body-container .hs-modal-cross{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIxNXB4IiB2aWV3Qm94PSIwIDAgMTUgMTUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aSBzd2VhciB0aGlzIGlzIGFuIHg8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPHBhdGggZD0iTTEzLjU3NzQxMSwwLjI0NDA3NzY4MiBDMTMuOTAyODQ3OSwtMC4wODEzNTkyMjc0IDE0LjQzMDQ4NTQsLTAuMDgxMzU5MjI3NCAxNC43NTU5MjIzLDAuMjQ0MDc3NjgyIEMxNS4wODEzNTkyLDAuNTY5NTE0NTkyIDE1LjA4MTM1OTIsMS4wOTcxNTIwNyAxNC43NTU5MjIzLDEuNDIyNTg4OTggTDE0Ljc1NTkyMjMsMS40MjI1ODg5OCBMOC42NzgsNy41IEwxNC43NTU5MjIzLDEzLjU3NzQxMSBDMTUuMDgxMzU5MiwxMy45MDI4NDc5IDE1LjA4MTM1OTIsMTQuNDMwNDg1NCAxNC43NTU5MjIzLDE0Ljc1NTkyMjMgQzE0LjQzMDQ4NTQsMTUuMDgxMzU5MiAxMy45MDI4NDc5LDE1LjA4MTM1OTIgMTMuNTc3NDExLDE0Ljc1NTkyMjMgTDcuNSw4LjY3OCBMMS40MjI1ODg5OCwxNC43NTU5MjIzIEMxLjEyNDI3MTgyLDE1LjA1NDIzOTUgMC42NTYwNTAwMDIsMTUuMDc5MDk5MiAwLjMyOTQxNTM5MywxNC44MzA1MDE2IEwwLjI0NDA3NzY4MiwxNC43NTU5MjIzIEMtMC4wODEzNTkyMjc0LDE0LjQzMDQ4NTQgLTAuMDgxMzU5MjI3NCwxMy45MDI4NDc5IDAuMjQ0MDc3NjgyLDEzLjU3NzQxMSBMMC4yNDQwNzc2ODIsMTMuNTc3NDExIEw2LjMyMiw3LjUgTDAuMjQ0MDc3NjgyLDEuNDIyNTg4OTggQy0wLjA4MTM1OTIyNzQsMS4wOTcxNTIwNyAtMC4wODEzNTkyMjc0LDAuNTY5NTE0NTkyIDAuMjQ0MDc3NjgyLDAuMjQ0MDc3NjgyIEMwLjU2OTUxNDU5MiwtMC4wODEzNTkyMjc0IDEuMDk3MTUyMDcsLTAuMDgxMzU5MjI3NCAxLjQyMjU4ODk4LDAuMjQ0MDc3NjgyIEw3LjUsNi4zMjIgWiIgaWQ9InBhdGgtMSI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9Imktc3dlYXItdGhpcy1pcy1hbi14IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iSWNvbnMvQWN0aW9ucy9DbG9zZSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPHVzZSBpZD0iTWFzayIgZmlsbD0iI0YyNTQ1QiIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);width:15px!important;height:15px!important}body #hs-modal #hs-modal-content #hs-modal-footer{display:table-row;height:20%}@media (max-width:800px){body #hs-modal #hs-modal-content #hs-modal-footer{height:10%}}body #hs-modal #hs-modal-content #hs-modal-footer #hs-modal-footer-container{text-align:right}@media (max-width:800px){body #hs-modal #hs-modal-content #hs-modal-footer #hs-modal-footer-container{text-align:center;border-top:1px solid #c0bebe}}body #hs-modal #hs-modal-content #hs-modal-footer #hs-modal-accept-all,body #hs-modal #hs-modal-content #hs-modal-footer #hs-modal-save-settings{border-radius:3px;display:inline-block;padding:10px 16px!important;text-decoration:none!important;background-color:#425b76!important;border:1px solid #425b76!important;color:#fff!important;font-family:inherit!important;font-size:inherit!important;font-weight:400!important;line-height:inherit!important;text-align:left;text-shadow:none!important;margin-top:20px}@media (max-width:800px){body #hs-modal #hs-modal-content #hs-modal-footer #hs-modal-accept-all,body #hs-modal #hs-modal-content #hs-modal-footer #hs-modal-save-settings{margin-bottom:20px}}body #hs-modal #hs-modal-content #hs-modal-footer #hs-modal-accept-all{margin-left:12px}'
    }
    , function(e, t, i) {
        "use strict";
        i.r(t);
        var n = "_hspb_loaded"
          , o = "_hspb_ran"
          , a = "_hsp"
          , r = "_hsq"
          , s = "_hsPrivacyTest"
          , c = "_hsGeoTargetingTest"
          , d = 2e3
          , l = function(e, t, i, n) {
            e.addEventListener ? e.addEventListener(t, i, n) : e.attachEvent ? e.attachEvent("on" + t, i) : e["on" + t] = i
        }
          , h = function(e, t) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                if (Array.isArray(n) && (n.length > 0 && n[0] === t)) {
                    e.splice(i--, 1);
                    return n[1] ? n[1] : null
                }
            }
            return null
        }
          , g = function(e, t) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                if (Array.isArray(n) && (n.length > 0 && n[0] === t)) {
                    e.splice(i--, 1);
                    return !0
                }
            }
            return !1
        }
          , p = function() {
            return document.location.hash.indexOf("#hsdbg") > -1 || document.location.search.indexOf("hsdbg") > -1
        }
          , u = function(e) {
            p() && e && window.console.error(e)
        }
          , m = function(e) {
            p() && window.console.debug(e)
        }
          , y = function(e, t, i) {
            if (Array.isArray(e))
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    if (Array.isArray(o) && 0 !== o.length) {
                        var a = o[0];
                        if (t.indexOf(a) > -1) {
                            i(o);
                            e.splice(n--, 1)
                        }
                    }
                }
        }
          , v = function(e, t) {
            return null != t && e.substr(0, t.length) === t
        }
          , f = function(e, t) {
            var i = e.length - t.length;
            return i >= 0 && e.lastIndexOf(t) === i
        }
          , b = function(e, t) {
            e.classList.add(t)
        }
          , k = function(e, t) {
            e.classList.remove(t)
        }
          , x = function(e) {
            var t = document.createDocumentFragment()
              , i = document.createElement("div");
            i.innerHTML = e;
            for (; i.firstChild; )
                t.appendChild(i.firstChild);
            return t
        }
          , w = function(e, t) {
            for (var i = 0; i < e.length; i++)
                if (e[i] === t)
                    return !0;
            return !1
        }
          , C = function(e) {
            var t = new RegExp(c + "=([a-zA-Z]{2})(&|$)")
              , i = e.match(t);
            return i && 3 === i.length ? i[1] : null
        };
        function I(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function M(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1;
                n.configurable = !0;
                "value"in n && (n.writable = !0);
                Object.defineProperty(e, n.key, n)
            }
        }
        function D(e, t, i) {
            t && M(e.prototype, t);
            i && M(e, i);
            return e
        }
        var T = function() {
            function e(t, i, n, o, a, r, s) {
                I(this, e);
                this.doc = t || document;
                this.nav = i || navigator;
                this.scr = n || screen;
                this.win = o || window;
                this.loc = a || this.win.location;
                this.top = r;
                this.parent = s
            }
            D(e, [{
                key: "getDocument",
                value: function() {
                    return this.doc
                }
            }, {
                key: "getNavigator",
                value: function() {
                    return this.nav
                }
            }, {
                key: "getScreen",
                value: function() {
                    return this.scr
                }
            }, {
                key: "getWindow",
                value: function() {
                    return this.win
                }
            }, {
                key: "getLocation",
                value: function() {
                    return this.loc
                }
            }, {
                key: "getHostName",
                value: function() {
                    try {
                        return this.loc.hostname
                    } catch (e) {
                        return this.doc.domain
                    }
                }
            }, {
                key: "getPathName",
                value: function() {
                    return this.loc.pathname
                }
            }, {
                key: "getTop",
                value: function() {
                    return this.top
                }
            }, {
                key: "getParent",
                value: function() {
                    return this.parent
                }
            }, {
                key: "getReferrer",
                value: function() {
                    var e = "";
                    try {
                        e = this.top.document.referrer
                    } catch (t) {
                        if (this.parent)
                            try {
                                e = this.parent.document.referrer
                            } catch (t) {
                                e = ""
                            }
                    }
                    "" === e && (e = this.doc.referrer);
                    return e
                }
            }, {
                key: "getCharacterSet",
                value: function() {
                    return this.doc.characterSet ? this.doc.characterSet : this.doc.charset ? this.doc.charset : ""
                }
            }, {
                key: "getLanguage",
                value: function() {
                    return this.nav.language ? this.nav.language : this.nav.browserLanguage ? this.nav.browserLanguage : ""
                }
            }, {
                key: "getOrigin",
                value: function() {
                    var e = this.loc.origin;
                    if (e)
                        return e;
                    var t = this.loc.port ? ":" + this.loc.port : "";
                    return this.loc.protocol + "//" + this.getHostName() + t
                }
            }, {
                key: "getCurrentHref",
                value: function(e) {
                    return e ? this.getOrigin().toLowerCase() + e : this.loc.href.toLowerCase()
                }
            }]);
            return e
        }()
          , A = "COOKIES_WITHOUT_BANNER"
          , N = "OPT_IN"
          , S = "NO_COOKIES"
          , E = "COOKIES_BY_CATEGORY"
          , z = "NOTIFY"
          , B = {
            0: A,
            1: N,
            2: S,
            3: E
        }
          , L = function(e) {
            return e.mode === N && e.hideDecline ? z : e.mode
        }
          , j = i(0)
          , P = i.n(j)
          , O = i(1)
          , G = i.n(O)
          , H = "TOP"
          , U = "BOTTOM"
          , W = "__hs_initial_opt_in"
          , R = "__hs_opt_out"
          , Z = "__hssc"
          , Q = "__hssrc"
          , _ = "__hstc"
          , Y = "hubspotutk"
          , F = "__hs_cookie_cat_pref"
          , V = 390
          , X = 390
          , J = 7
          , q = "_fbp"
          , K = [F, W, R, Z, Q, "__hs_do_not_track", _, Y, "messagesUtk"];
        function $(e, t, i) {
            t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i;
            return e
        }
        var ee, te, ie = i(2), ne = i.n(ie), oe = "advertisement", ae = "functionality", re = 1, se = 2, ce = 3, de = ($(ee = {}, re, "analytics"),
        $(ee, se, oe),
        $(ee, ce, ae),
        ee), le = function() {
            function e(t, i, n) {
                I(this, e);
                this.allowed = t;
                this.previousCategories = n || {
                    necessary: !0,
                    analytics: !1,
                    advertisement: !1,
                    functionality: !1
                };
                this.categories = i || {
                    necessary: !0,
                    analytics: t,
                    advertisement: t,
                    functionality: t
                }
            }
            D(e, [{
                key: "allCategoriesSelected",
                value: function() {
                    return this.categories.necessary && this.categories.analytics && this.categories.advertisement && this.categories.functionality
                }
            }, {
                key: "getSafeCopy",
                value: function() {
                    return new e(this.allowed,{
                        necessary: this.categories.necessary,
                        analytics: this.categories.analytics,
                        advertisement: this.categories.advertisement,
                        functionality: this.categories.functionality
                    },{
                        necessary: this.previousCategories.necessary,
                        analytics: this.previousCategories.analytics,
                        advertisement: this.previousCategories.advertisement,
                        functionality: this.previousCategories.functionality
                    })
                }
            }, {
                key: "toCookieString",
                value: function() {
                    return re + ":" + this.categories.analytics + "," + se + ":" + this.categories.advertisement + "," + ce + ":" + this.categories.functionality
                }
            }], [{
                key: "buildFromCookieString",
                value: function(t) {
                    var i = {
                        necessary: !0,
                        analytics: !1,
                        advertisement: !1,
                        functionality: !1
                    };
                    t.split(",").forEach(function(e) {
                        var t = e.split(":");
                        if (2 === t.length) {
                            var n = t[0]
                              , o = de[n];
                            o && (i[o] = "true" === t[1])
                        }
                    });
                    return new e(i.necessary && i.advertisement && i.analytics && i.functionality,i)
                }
            }, {
                key: "buildInitialConsent",
                value: function() {
                    return new e(!1,{
                        necessary: !0,
                        analytics: !1,
                        advertisement: !1,
                        functionality: !1
                    })
                }
            }]);
            return e
        }(), he = "hs-modal-accept-all", ge = "hs-modal-save-settings", pe = "hs-modal", ue = "hs-modal-close-button", me = "hs-modal-introduction", ye = "hs-category-necessary", ve = "hs-category-analytics", fe = "hs-category-toggle-analytics", be = "hs-category-advertisement", ke = "hs-category-toggle-advertisement", xe = "hs-category-functionality", we = "hs-category-toggle-functionality", Ce = function(e, t) {
            var i = e.acceptAllLabel
              , n = e.categories
              , o = e.introduction
              , a = e.saveSettingsLabel
              , r = t.categories.analytics
              , s = t.categories.advertisement
              , c = t.categories.functionality;
            return '\n<div id="hs-modal" role="dialog"  aria-modal="true" data-nosnippet>\n  <span id="hs-a11y-live" class="hs-sr-only" aria-live="polite"></span>\n  <div id="hs-modal-content">\n\n    <div id="hs-modal-header" aria-hidden="true">\n      <div id="hs-modal-header-container">\n        <span id="' + ue + '">&times;</span>\n      </div>\n    </div>\n\n    <div id="hs-modal-body">\n      <div id="hs-modal-body-container" role="tablist">\n          <div class="hs-category-row" role="tab" aria-selected="true" aria-controls="' + me + '-description">\n            <div id="' + me + '" class="hs-category-label hs-active" aria-label="' + o.label + '" tabindex="0">\n              <span>' + o.label + '</span>\n            </div>\n            <div id="' + me + '-description" class="hs-category-description hs-active" aria-labelledby="' + me + '" role="tabpanel">\n              <div class="hs-category-description-header">\n                <h3 aria-hidden="true">' + o.label + '</h3>\n              </div>\n              <div class="hs-category-description-text">\n                ' + o.description + '\n              </div>\n            </div>\n          </div>\n          <div class="hs-category-row" role="tab" aria-selected="false" aria-controls="' + ye + '-description">\n            <div id="' + ye + '" class="hs-category-label" aria-label="' + n.necessary.label + '" tabindex="0">\n              <span>' + n.necessary.label + '</span>\n              <span id="hs-category-necessary-checked" class="hs-modal-checkmark"></span>\n            </div>\n            <div id="' + ye + '-description" class="hs-category-description hs-hidden" role="tabpanel">\n              <div class="hs-category-description-header">\n                <label class="hs-category-toggle">\n                  <input type="checkbox" role="switch" aria-checked="true" aria-label="' + n.necessary.label + '" checked disabled>\n                  <span class="slider"></span>\n                </label>\n                <span class="hs-always-active-label" aria-hidden="true">' + (n.necessary.toggleLabel || "") + '</span>\n                <h3 aria-hidden="true">' + n.necessary.label + '</h3>\n              </div>\n              <div class="hs-category-description-text">\n               ' + n.necessary.description + '\n              </div>\n            </div>\n          </div>\n          <div class="hs-category-row" role="tab" aria-selected="false" aria-controls="' + ve + '-description">\n            <div id="' + ve + '" class="hs-category-label" aria-label="' + n.analytics.label + '" tabindex="0">\n              <span>' + n.analytics.label + '</span>\n              <span id="' + ve + '-checked" class="hs-modal-checkmark ' + (!r && "hs-hidden") + '"></span>\n              <span id="' + ve + '-unchecked" class="hs-modal-cross ' + (r && "hs-hidden") + '"></span>\n            </div>\n            <div id="' + ve + '-description" class="hs-category-description hs-hidden" role="tabpanel">\n              <div class="hs-category-description-header">\n                <label class="hs-category-toggle">\n                  <input id="' + fe + '" type="checkbox" ' + (r && "checked") + " onClick=\"handleHsCategoryToggle('" + ve + '\')(this);" aria-label="' + n.analytics.label + '" role="switch" tabindex="0">\n                  <span class="slider"></span>\n                </label>\n                <h3 aria-hidden="true">' + n.analytics.label + '</h3>\n              </div>\n              <div class="hs-category-description-text">\n                ' + n.analytics.description + '\n              </div>\n            </div>\n          </div>\n          <div class="hs-category-row" role="tab" aria-selected="false" aria-controls="' + be + '-description">\n            <div id="' + be + '" class="hs-category-label" aria-label="' + n.advertisement.label + '" tabindex="0">\n              <span>' + n.advertisement.label + '</span>\n              <span id="' + be + '-checked" class="hs-modal-checkmark ' + (!s && "hs-hidden") + '"></span>\n              <span id="' + be + '-unchecked" class="hs-modal-cross ' + (s && "hs-hidden") + '"></span>\n            </div>\n            <div id="' + be + '-description" class="hs-category-description hs-hidden" role="tabpanel">\n              <div class="hs-category-description-header">\n                <label class="hs-category-toggle">\n                  <input id="' + ke + '" type="checkbox" ' + (s && "checked") + " onClick=\"handleHsCategoryToggle('" + be + '\')(this);" aria-label="' + n.advertisement.label + '" role="switch" tabindex="0">\n                  <span class="slider"></span>\n                </label>\n                <h3 aria-hidden="true">' + n.advertisement.label + '</h3>\n              </div>\n              <div class="hs-category-description-text">\n                ' + n.advertisement.description + '\n              </div>\n            </div>\n          </div>\n          <div class="hs-category-row" role="tab" aria-selected="false" aria-controls="' + xe + '-description">\n            <div id="' + xe + '" class="hs-category-label" aria-label="' + n.functionality.label + '" tabindex="0">\n              <span>' + n.functionality.label + '</span>\n              <span id="' + xe + '-checked" class="hs-modal-checkmark ' + (!c && "hs-hidden") + '"></span>\n              <span id="' + xe + '-unchecked" class="hs-modal-cross ' + (c && "hs-hidden") + '"></span>\n            </div>\n            <div id="' + xe + '-description" class="hs-category-description hs-hidden" role="tabpanel" role="tabpanel">\n              <div class="hs-category-description-header">\n                <label class="hs-category-toggle">\n                  <input id="' + we + '" type="checkbox" ' + (c && "checked") + " onClick=\"handleHsCategoryToggle('" + xe + '\')(this);" role="switch" aria-label="' + n.functionality.label + '" tabindex="0">\n                  <span class="slider"></span>\n                </label>\n                <h3 aria-hidden="true">' + n.functionality.label + '</h3>\n              </div>\n              <div class="hs-category-description-text">\n                ' + n.functionality.description + '\n             </div>\n            </div>\n          </div>\n        <div class="hs-category-fill"></div>\n        </div>\n      </div>\n\n      <div id="hs-modal-footer">\n        <div id="hs-modal-footer-container">\n          <a href="javascript:void(0);" id="hs-modal-save-settings" role="button">' + a + '</a>\n          <a href="javascript:void(0);" id="hs-modal-accept-all" role="button">' + i + "</a>\n        </div>\n      </div>\n  </div>\n</div>\n  "
        }, Ie = {
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESC: 27,
            HOME: 36,
            LEFT: 37,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }, Me = ($(te = {}, Ie.LEFT, -1),
        $(te, Ie.UP, -1),
        $(te, Ie.DOWN, 1),
        $(te, Ie.RIGHT, 1),
        te), De = "hs-hidden";
        function Te(e) {
            var t = e.getElementById(me);
            t.click();
            t.focus()
        }
        function Ae(e) {
            var t = e.getElementById(pe);
            b(t, De)
        }
        function Ne(e) {
            var t = e.getElementById(pe);
            k(t, De);
            Te(e)
        }
        function Se(e) {
            return -1 === e.getElementById(pe).className.indexOf(De, 0)
        }
        function Ee(e, t) {
            var i = t.getElementById(he);
            e.stagedAnalytics && e.stagedAdvertisement && e.stagedFunctionality ? b(i, De) : k(i, De)
        }
        function ze(e, t) {
            t.getElementById("hs-a11y-live").textContent = "Here is your current cookie selection,\n  necessary cookies: always allowed,\n  analytics cookies: " + (e.stagedAnalytics ? "allowed" : "not allowed") + ",\n  advertisement cookies: " + (e.stagedAdvertisement ? "allowed" : "not allowed") + ",\n  functionality cookies: " + (e.stagedFunctionality ? "allowed" : "not allowed")
        }
        function Be(e) {
            var t = e.privacyConsent;
            if (e.privacySettings.testing) {
                m("Testing mode - the following cookies were not written");
                m('cookie: "' + F + '" value: "' + t.toCookieString() + '"')
            } else {
                e.cookie.set(F, t.toCookieString(), {
                    daysToExpire: V,
                    path: "/"
                });
                t.categories.analytics ? e.trackAction("trackApproveCookieConsent") : e.trackAction("trackDeclineCookieConsent")
            }
        }
        function Le(e, t, i, n) {
            var o = e.getElementById(ge);
            l(o, "click", function(o) {
                o.preventDefault();
                Ae(e);
                n();
                var a = i.stagedAnalytics
                  , r = i.stagedAdvertisement
                  , s = i.stagedFunctionality
                  , c = a && r && s;
                t.setPrivacyConsent(new le(c,{
                    necessary: !0,
                    analytics: a,
                    advertisement: r,
                    functionality: s
                }), {
                    reporting: !0
                });
                Be(t)
            })
        }
        function je(e, t, i) {
            var n = e.getElementById(he);
            l(n, "click", function(n) {
                n.preventDefault();
                Ae(e);
                i();
                t.setPrivacyConsent(!0, {
                    reporting: !0
                });
                Be(t)
            });
            l(n, "keydown", function(t) {
                if (t.keyCode === Ie.TAB) {
                    e.getElementById(me).focus();
                    t.preventDefault()
                }
            })
        }
        function Pe(e, t, i) {
            var n = i.querySelectorAll(".hs-category-label")
              , o = {};
            i.querySelectorAll(".hs-category-description").forEach(function(e) {
                var t = e.id.replace("-description", "");
                o[t] = e
            });
            for (var a = [], r = 0; r < n.length; r++)
                a.push(n[r].id);
            var s = i.getElementById(me)
              , c = i.getElementById(me + "-description")
              , d = "hs-active";
            function h(e) {
                var t = e.currentTarget;
                if (!t.classList.contains(d)) {
                    k(s, d);
                    s.parentElement.setAttribute("aria-selected", !1);
                    b(t, d);
                    t.parentElement.setAttribute("aria-selected", !0);
                    b(c, De);
                    c.setAttribute("aria-hidden", !0);
                    var i = o[t.id];
                    k(i, De);
                    i.setAttribute("aria-hidden", !1);
                    s = t;
                    c = i;
                    t.focus()
                }
            }
            function g(e, t, n) {
                1 === n && e === t - 1 ? i.getElementById(a[0]).click() : -1 === n && 0 === e ? i.getElementById(a[t - 1]).click() : i.getElementById(a[e + n]).click()
            }
            function p(e) {
                var t = e.keyCode
                  , i = e.currentTarget.id
                  , o = a.indexOf(i)
                  , r = a.length;
                switch (t) {
                case Ie.END:
                    e.preventDefault();
                    n[r - 1].click();
                    break;
                case Ie.HOME:
                    e.preventDefault();
                    n[0].click();
                    break;
                case Ie.ENTER:
                case Ie.SPACE:
                    e.currentTarget.click();
                    break;
                case Ie.LEFT:
                case Ie.RIGHT:
                    g(o, r, Me[t]);
                    break;
                case Ie.UP:
                case Ie.DOWN:
                    e.preventDefault();
                    g(o, r, Me[t])
                }
            }
            n.forEach(function(e) {
                l(e, "click", h);
                l(e, "keydown", p)
            });
            e.context.getWindow().handleHsCategoryToggle = function(e) {
                var n = i.getElementById(e + "-checked")
                  , o = i.getElementById(e + "-unchecked");
                return function(a) {
                    if (a.checked) {
                        k(n, De);
                        b(o, De)
                    } else {
                        k(o, De);
                        b(n, De)
                    }
                    switch (e) {
                    case ve:
                        t.stagedAnalytics = a.checked;
                        break;
                    case be:
                        t.stagedAdvertisement = a.checked;
                        break;
                    case xe:
                        t.stagedFunctionality = a.checked;
                        break;
                    case ye:
                        break;
                    default:
                        return
                    }
                    Ee(t, i);
                    ze(t, i)
                }
            }
        }
        function Oe(e) {
            l(e, "keydown", function(t) {
                t.keyCode === Ie.ESC && Se(e) && Ae(e)
            })
        }
        function Ge(e, t, i, n) {
            var o = e.getElementById(ue);
            l(o, "click", function() {
                return Ae(e)
            });
            Pe(t, i, e);
            Le(e, t, i, n);
            je(e, t, n);
            Oe(e)
        }
        function He(e, t, i, n) {
            var o = n.getElementById(t)
              , a = n.getElementById(i + "-checked")
              , r = n.getElementById(i + "-unchecked");
            if (e !== o.checked) {
                o.checked = !o.checked;
                if (o.checked) {
                    k(a, De);
                    b(r, De)
                } else {
                    k(r, De);
                    b(a, De)
                }
            }
        }
        function Ue(e, t) {
            He(e.categories.analytics, fe, ve, t);
            He(e.categories.advertisement, ke, be, t);
            He(e.categories.functionality, we, xe, t)
        }
        var We = function() {
            function e(t) {
                I(this, e);
                this.banner = t;
                this.stagedCategories = {
                    stagedAnalytics: !1,
                    stagedAdvertisement: !1,
                    stagedFunctionality: !1
                };
                if (t.privacyConsent)
                    this.setStagedCategories(t.privacyConsent);
                else {
                    var i = le.buildInitialConsent();
                    this.setStagedCategories(i)
                }
            }
            D(e, [{
                key: "hasRendered",
                value: function() {
                    return null !== this.banner.context.getDocument().getElementById(pe)
                }
            }, {
                key: "setStagedCategories",
                value: function(e) {
                    if (e && e.categories) {
                        this.stagedCategories.stagedAnalytics = e.categories.analytics;
                        this.stagedCategories.stagedAdvertisement = e.categories.advertisement;
                        this.stagedCategories.stagedFunctionality = e.categories.functionality
                    }
                }
            }, {
                key: "displayModal",
                value: function() {
                    var e = this.banner.context.getDocument()
                      , t = this.banner.privacyConsent ? this.banner.privacyConsent : le.buildInitialConsent();
                    this.setStagedCategories(t);
                    Ee(this.stagedCategories, e);
                    Ue(t, e);
                    Ne(e)
                }
            }, {
                key: "render",
                value: function(e, t, i) {
                    var n = this.banner.context
                      , o = t.accentColor
                      , a = t.cookiesByCategory;
                    window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);
                    var r = n.getDocument();
                    if (!this.hasRendered()) {
                        var s = this.banner.privacyConsent ? this.banner.privacyConsent : le.buildInitialConsent();
                        this.setStagedCategories(s);
                        var c = Ce(a, s)
                          , d = o ? ne.a.replace(/#425b76/g, o) : ne.a
                          , l = r.createElement("style");
                        l.setAttribute("type", "text/css");
                        if (l.styleSheet)
                            l.styleSheet.cssText = d;
                        else {
                            var h = r.createTextNode(d);
                            l.appendChild(h)
                        }
                        var g = e.childNodes[0];
                        e.insertBefore(l, g);
                        e.insertBefore(x(c), g);
                        if (r.getElementById(pe)) {
                            Te(r);
                            Ge(r, this.banner, this.stagedCategories, i);
                            Ee(this.stagedCategories, r)
                        }
                    }
                }
            }]);
            return e
        }()
          , Re = "hs-eu-cookie-confirmation"
          , Ze = "hs-cookie-banner-testing"
          , Qe = "hs-eu-confirmation-button"
          , _e = "hs-eu-decline-button"
          , Ye = "hs-eu-cookie-settings-button"
          , Fe = function(e, t, i, n) {
            var o = e.hideDecline
              , a = i.context.getDocument().getElementById(Qe);
            a ? l(a, "click", function(t) {
                t.preventDefault();
                if ("isDisabled" !== a.className) {
                    n();
                    o || i.setPrivacyConsent(!0, {
                        reporting: !0
                    });
                    if (!e.testing) {
                        if (e.mode === E)
                            i.cookie.set(F, i.privacyConsent.toCookieString(), {
                                daysToExpire: V,
                                path: "/"
                            });
                        else {
                            i.cookie.set(R, "no", {
                                daysToExpire: X,
                                path: "/"
                            });
                            i.cookie.set(W, "true", {
                                daysToExpire: J,
                                path: "/"
                            })
                        }
                        i.trackAction("trackApproveCookieConsent")
                    }
                }
            }) : t.style.display = "none"
        }
          , Ve = function(e, t, i, n) {
            var o = i.context.getDocument();
            if (!e.hideDecline) {
                var a = o.getElementById(_e);
                a ? l(a, "click", function(t) {
                    t.preventDefault();
                    n();
                    i.setPrivacyConsent(!1, {
                        reporting: !0
                    });
                    if (!e.testing) {
                        if (e.mode === E)
                            i.cookie.set(F, i.privacyConsent.toCookieString(), {
                                daysToExpire: V,
                                path: "/"
                            });
                        else {
                            i.cookie.set(R, "yes", {
                                daysToExpire: X,
                                path: "/"
                            });
                            i.cookie.remove(W)
                        }
                        i.trackAction("trackDeclineCookieConsent")
                    }
                }) : t.style.display = "none"
            }
        }
          , Xe = function(e, t, i, n, o) {
            if (t.mode === E) {
                var a = e.context.getDocument().getElementById(Ye);
                a && l(a, "click", function(e) {
                    e.preventDefault();
                    n.hasRendered() ? n.displayModal() : n.render(i, t, o)
                })
            }
        }
          , Je = function(e) {
            var t = !1
              , i = e.getWindow().disabledHsPopups;
            if (!Array.isArray(i))
                return t;
            for (var n = 0; n < i.length; n++)
                if ("PRIVACY" === i[n]) {
                    t = !0;
                    break
                }
            return t
        }
          , qe = function(e, t) {
            var i = e.acceptWording
              , n = e.cancelWording
              , o = e.disclaimerWording
              , a = e.hideDecline
              , r = e.policyWording
              , s = e.cookiesByCategory
              , c = e.mode === E && s && s.cookieSettingsLabel
              , d = o && !a ? '<p id="hs-eu-cookie-disclaimer">' + o + "</p>" : ""
              , l = '<a href="javascript:void(0);" id="' + Qe + '" role="button">\n    ' + (i || "Accept") + "\n  </a>"
              , h = a ? "" : '<a href="javascript:void(0);" id="' + _e + '" role="button">' + (n || "Don't ask me again") + "</a>"
              , g = c ? '<a href="javascript:void(0);" id="' + Ye + '" role="button">' + s.cookieSettingsLabel + "</a>" : "";
            return '<div id="' + Re + '" class="' + t + '" data-nosnippet>\n            <div id="hs-eu-cookie-confirmation-inner">\n              <div id="hs-eu-policy-wording">' + r + "</div>\n              " + d + '\n              <div id="hs-en-cookie-confirmation-buttons-area">\n                ' + g + "\n                " + l + "\n                " + h + "\n              </div>\n            </div>\n          </div>"
        }
          , Ke = function() {
            function e(t, i) {
                I(this, e);
                this.privacyBanner = t;
                this.privacySettings = i;
                this.modalTemplate = new We(this.privacyBanner);
                var n = this.privacySettings.testing
                  , o = this.privacyBanner.context.getDocument()
                  , a = o.getElementById(Ze) || o.body
                  , r = n ? a : o.body;
                this.oldPadding = r.style.paddingTop
            }
            D(e, [{
                key: "hasRendered",
                value: function() {
                    return null !== this.privacyBanner.context.getDocument().getElementById(Re)
                }
            }, {
                key: "getHideBannerFn",
                value: function() {
                    var e = this;
                    return function() {
                        if (e.hasRendered()) {
                            var t = e.privacyBanner.context
                              , i = e.privacySettings
                              , n = i.bannerType
                              , o = i.testing
                              , a = t.getDocument()
                              , r = a.getElementById(Ze) || a.body
                              , s = o ? r : a.body;
                            a.getElementById(Re).style.display = "none";
                            n === H && (s.style.paddingTop = e.oldPadding)
                        }
                    }
                }
            }, {
                key: "displayBanner",
                value: function() {
                    if (this.hasRendered()) {
                        var e = this.privacyBanner.context
                          , t = this.privacySettings
                          , i = t.bannerType
                          , n = t.testing
                          , o = e.getDocument()
                          , a = o.getElementById(Ze) || o.body
                          , r = n ? a : o.body
                          , s = o.getElementById(Re);
                        s.style.display = "";
                        i === H && (r.style.paddingTop = s.offsetHeight)
                    } else
                        this.render()
                }
            }, {
                key: "displayModal",
                value: function() {
                    var e = this.privacyBanner.context
                      , t = this.privacySettings.testing
                      , i = e.getDocument()
                      , n = i.getElementById(Ze) || i.body
                      , o = t ? n : i.body;
                    this.modalTemplate.hasRendered() ? this.modalTemplate.displayModal() : this.modalTemplate.render(o, this.privacySettings, this.getHideBannerFn())
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.privacyBanner.context
                      , t = this.privacySettings
                      , i = t.accentColor
                      , n = t.bannerType
                      , o = t.testing;
                    if (!Je(e) && !this.hasRendered()) {
                        var a = ""
                          , r = G.a;
                        if (i && n) {
                            r = /^#[0-9A-Fa-f]{3,6}$/.test(i) ? P.a.replace(/#425b76/g, i) : P.a;
                            a = n === U ? "hs-cookie-notification-position-bottom" : ""
                        }
                        var s = e.getDocument()
                          , c = s.getElementById(Ze) || s.body
                          , d = o ? c : s.body
                          , l = s.createElement("style");
                        l.setAttribute("type", "text/css");
                        if (l.styleSheet)
                            l.styleSheet.cssText = r;
                        else {
                            var h = s.createTextNode(r);
                            l.appendChild(h)
                        }
                        var g = d.childNodes[0];
                        d.insertBefore(l, g);
                        var p = qe(this.privacySettings, a);
                        d.insertBefore(x(p), g);
                        var u = s.getElementById(Re);
                        if (u) {
                            n === H && (d.style.paddingTop = u.offsetHeight);
                            Fe(this.privacySettings, u, this.privacyBanner, this.getHideBannerFn());
                            Ve(this.privacySettings, u, this.privacyBanner, this.getHideBannerFn());
                            Xe(this.privacyBanner, this.privacySettings, d, this.modalTemplate, this.getHideBannerFn())
                        }
                    }
                }
            }]);
            return e
        }()
          , $e = function() {
            function e(t, i) {
                I(this, e);
                this.privacyBanner = t;
                this.privacySettings = i;
                this.bannerTemplate = new Ke(this.privacyBanner,this.privacySettings)
            }
            D(e, [{
                key: "showModal",
                value: function() {
                    this.bannerTemplate.displayModal()
                }
            }, {
                key: "handle",
                value: function() {
                    var e = this.privacyBanner.cookie
                      , t = this.privacySettings.testing
                      , i = e.get(F);
                    if (!i || t) {
                        this.bannerTemplate.render();
                        this.privacyBanner.sendReportingViewActivity()
                    } else
                        this.privacyBanner.setPrivacyConsent(le.buildFromCookieString(i))
                }
            }]);
            return e
        }()
          , et = 15362232e5
          , tt = 15362514e5
          , it = function() {
            function e() {
                I(this, e)
            }
            D(e, null, [{
                key: "handle",
                value: function(e, t) {
                    if (t.active) {
                        var i = e.get(_).split(".");
                        if (!(1 === i.length && i[0].length > 0) && !(6 !== i.length || !i[1].length > 0)) {
                            var n = i[2];
                            if (!(n < et || n > tt)) {
                                e.remove(_);
                                e.remove(Y);
                                e.remove(Z);
                                e.remove(Q)
                            }
                        }
                    }
                }
            }]);
            return e
        }()
          , nt = "/cf-location"
          , ot = function(e, t, i) {
            var n = e ? "" + e + nt : null;
            if (n) {
                var o = new XMLHttpRequest;
                o.open("GET", n, !0);
                o.timeout = i;
                o.onreadystatechange = function() {
                    if (this.readyState === XMLHttpRequest.DONE)
                        if (200 !== o.status) {
                            u("Geolocation request failed, status - " + o.status + ", response - " + o.response);
                            t()
                        } else
                            t(o.response)
                }
                ;
                o.send()
            } else
                u("Missing apiBaseUrl from the banner. Failed to request for geolocation.")
        }
          , at = {
            DomainPathGeo: 6,
            DomainPath: 5,
            PathGeo: 4,
            Path: 3,
            DomainGeo: 2,
            Domain: 1,
            Geo: 0,
            noMatch: -1
        }
          , rt = function(e, t, i, n) {
            if (!(e.enabled || t))
                return at.noMatch;
            var o = e.targetedCountries && Array.isArray(e.targetedCountries) && e.targetedCountries.length > 0
              , a = (e.domain ? "Domain" : "") + (e.path ? "Path" : "") + (o ? "Geo" : "");
            if ("" === a)
                return at.noMatch;
            var r = e.domain && i.getHostName() === e.domain
              , s = e.path && v(i.getPathName(), e.path)
              , c = o && w(e.targetedCountries, n);
            switch (a) {
            case "DomainPathGeo":
                return r && s && c ? at[a] : at.noMatch;
            case "DomainPath":
                return r && s ? at[a] : at.noMatch;
            case "PathGeo":
                return s && c ? at[a] : at.noMatch;
            case "Path":
                return s ? at[a] : at.noMatch;
            case "DomainGeo":
                return r && c ? at[a] : at.noMatch;
            case "Domain":
                return r ? at[a] : at.noMatch;
            case "Geo":
                return c ? at[a] : at.noMatch;
            default:
                return at.noMatch
            }
        }
          , st = function() {
            function e(t, i) {
                I(this, e);
                this.privacyBanner = t;
                this.privacySettings = i;
                this.bannerTemplate = new Ke(this.privacyBanner,this.privacySettings)
            }
            D(e, [{
                key: "showBanner",
                value: function() {
                    L(this.privacySettings) === N && this.bannerTemplate.displayBanner()
                }
            }, {
                key: "handle",
                value: function() {
                    if (this.privacySettings.active || this.privacySettings.testing) {
                        var e = this.privacyBanner.context
                          , t = this.privacyBanner.cookie;
                        if (e && t) {
                            var i = L(this.privacySettings);
                            if (this.privacySettings.testing) {
                                i === z && this.privacyBanner.setPrivacyConsent(!0);
                                this.bannerTemplate.render()
                            } else if ("yes" !== t.get(R) && t.isEnabled() && this.privacySettings.policyWording) {
                                switch (i) {
                                case z:
                                    this.privacyBanner.setPrivacyConsent(!0);
                                    if ("no" === t.get(R))
                                        return;
                                    break;
                                case N:
                                    if (t.get(_) || t.get(Z) || "true" === t.get(W)) {
                                        this.privacyBanner.setPrivacyConsent(!0);
                                        return
                                    }
                                    break;
                                default:
                                    u(new Error("Unsupported policy mode passed to the opt-in handler."));
                                    return
                                }
                                this.bannerTemplate.render();
                                i !== z && this.privacyBanner.sendReportingViewActivity()
                            } else
                                this.privacyBanner.setPrivacyConsent(!1)
                        }
                    } else
                        this.privacyBanner.setPrivacyConsent(!0)
                }
            }]);
            return e
        }()
          , ct = function e(t) {
            var i = t.description
              , n = t.label
              , o = t.toggleLabel;
            I(this, e);
            this.description = i;
            this.label = n;
            this.toggleLabel = o
        }
          , dt = function() {
            function e(t) {
                var i = t.acceptAllLabel
                  , n = t.categories
                  , o = t.cookieSettingsLabel
                  , a = t.introduction
                  , r = t.saveSettingsLabel;
                I(this, e);
                this.acceptAllLabel = i;
                this.cookieSettingsLabel = o;
                this.saveSettingsLabel = r;
                this.introduction = new ct(a);
                this.categories = {
                    necessary: new ct(n.necessary),
                    analytics: new ct(n.analytics),
                    advertisement: new ct(n.advertisement),
                    functionality: new ct(n.functionality)
                }
            }
            D(e, null, [{
                key: "build",
                value: function(t) {
                    return t ? new e(t) : null
                }
            }]);
            return e
        }()
          , lt = function() {
            function e(t, i) {
                I(this, e);
                this.active = t.enabled;
                this.testing = i;
                this.mode = B[t.privacyPolicy];
                this.policyWording = t.privacyPolicyWording;
                this.acceptWording = t.privacyAcceptWording;
                this.cancelWording = t.privacyDismissWording;
                this.disclaimerWording = t.privacyDisclaimerWording;
                this.hideDecline = t.privacyHideDecline || !1;
                this.accentColor = t.privacyBannerAccentColor || null;
                this.bannerType = t.privacyBannerType || null;
                this.label = t.privacyDefault ? "default" : t.label;
                this.cookiesByCategory = dt.build(t.cookiesByCategory);
                this.id = t.id;
                this.portalId = t.portalId
            }
            D(e, [{
                key: "isOptInPolicy",
                value: function() {
                    return this.active && !1 === this.hideDecline && (this.mode === E || this.mode === N)
                }
            }]);
            return e
        }()
          , ht = "CookieBanner:Reporting"
          , gt = "CookieBanner:GeoTargeting"
          , pt = "/activity"
          , ut = pt + "/click"
          , mt = pt + "/view"
          , yt = function(e, t) {
            if (e) {
                var i = new XMLHttpRequest;
                i.open("POST", e, !0);
                i.setRequestHeader("Content-Type", "application/json");
                i.onreadystatechange = function() {
                    i.readyState === XMLHttpRequest.DONE && (200 === i.status || 204 === i.status ? m("successfully sent reporting activity") : u("error sending reporting activity request status: " + i.status))
                }
                ;
                i.send(JSON.stringify(t))
            } else
                u("Missing apiBaseUrl from the banner. Failed to send activity event.")
        }
          , vt = function(e, t) {
            yt(e ? "" + e + ut : null, t)
        }
          , ft = function(e, t) {
            yt(e ? "" + e + mt : null, t)
        }
          , bt = function() {
            function e(t, i) {
                I(this, e);
                this.context = t;
                this.cookie = i;
                this.cookiesByCategoryHandler = null;
                this.optInHandler = null;
                this.apiBaseUrl = null;
                this.privacyConsent = null;
                this.privacySettings = null;
                this.privacyConsentListeners = [];
                this.privacySettingsListeners = [];
                this.visitorCountry = null;
                this.enabledFeatureGates = []
            }
            D(e, [{
                key: "initialize",
                value: function(e, t) {
                    var i = this
                      , n = C(this.context.getLocation().search);
                    n && (this.visitorCountry = n);
                    var o = h(e, "setCookiePolicy");
                    t && !n && this.hasEnabledFeatureGate(gt) ? ot(this.apiBaseUrl, function(e) {
                        i.visitorCountry = e;
                        i.setCookiePolicy(o)
                    }, d) : this.setCookiePolicy(o);
                    h(e, "runCookieScrubbing") && this.runCritsitCookieScrubbing()
                }
            }, {
                key: "setCookiePolicy",
                value: function(e) {
                    if (e && !this.privacySettings)
                        if (0 !== e.length) {
                            for (var t, i, n = this.context.getLocation().hash.indexOf(s) > -1 || this.context.getLocation().search.indexOf(s) > -1, o = at.noMatch, a = 0; a < e.length; a++) {
                                var r = e[a]
                                  , c = r.enabled || n;
                                if (r.privacyDefault && c)
                                    t = new lt(r,n);
                                else {
                                    var d = new lt(r,n)
                                      , l = rt(r, n, this.context, this.visitorCountry);
                                    if (l > o) {
                                        o = l;
                                        i = d
                                    }
                                }
                            }
                            var h = i || t;
                            this.setPrivacySettings(h);
                            if (h) {
                                m("banner matched cookie policy " + h.label);
                                switch (h.mode) {
                                case A:
                                    this.setPrivacyConsent(!0);
                                    return;
                                case S:
                                    this.setPrivacyConsent(!1);
                                    return;
                                case N:
                                    this.optInHandler = new st(this,this.privacySettings);
                                    this.optInHandler.handle();
                                    return;
                                case E:
                                    this.cookiesByCategoryHandler = new $e(this,this.privacySettings);
                                    this.cookiesByCategoryHandler.handle();
                                    return;
                                default:
                                    u(new Error("Unknown privacy mode: " + h.mode));
                                    this.setPrivacyConsent(!0);
                                    return
                                }
                            } else
                                this.setPrivacyConsent(!0)
                        } else
                            this.setPrivacyConsent(!0)
                }
            }, {
                key: "runCritsitCookieScrubbing",
                value: function() {
                    if (this.privacySettings && "DISABLED" !== this.privacySettings.mode)
                        try {
                            it.handle(this.cookie, this.privacySettings)
                        } catch (e) {
                            u(e)
                        }
                }
            }, {
                key: "addPrivacyConsentListener",
                value: function(e) {
                    this.privacyConsent && this.safeCallListener(e, this.privacyConsent);
                    this.privacyConsentListeners.push(e)
                }
            }, {
                key: "addPrivacySettingsListener",
                value: function(e) {
                    this.privacySettings && this.safeCallListener(e, this.privacySettings);
                    this.privacySettingsListeners.push(e)
                }
            }, {
                key: "setPrivacyConsent",
                value: function(e) {
                    var t = this
                      , i = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        reporting: !1
                    }).reporting
                      , n = this.privacyConsent && this.privacyConsent.categories;
                    this.privacyConsent = e instanceof le ? e.getSafeCopy() : new le(e);
                    n && (this.privacyConsent.previousCategories = n);
                    this.privacyConsentListeners.forEach(function(e) {
                        return t.safeCallListener(e, t.privacyConsent.getSafeCopy())
                    });
                    this.cleanUpCookies();
                    i && this.sendReportingClickActivity()
                }
            }, {
                key: "setPrivacySettings",
                value: function(e) {
                    var t = this;
                    this.privacySettings = e;
                    this.privacySettingsListeners.forEach(function(e) {
                        return t.safeCallListener(e, t.privacySettings)
                    })
                }
            }, {
                key: "getHsq",
                value: function() {
                    return this.context.getWindow()[r] = this.context.getWindow()[r] || []
                }
            }, {
                key: "trackAction",
                value: function(e) {
                    this.getHsq().push([e])
                }
            }, {
                key: "revokeCookieConsent",
                value: function() {
                    for (var e = 0; e < K.length; e++)
                        this.cookie.remove(K[e]);
                    this.setPrivacyConsent(!1);
                    this.trackAction("trackRevokeCookieConsent")
                }
            }, {
                key: "cleanUpCookies",
                value: function() {
                    if (this.privacyConsent.previousCategories.advertisement !== this.privacyConsent.categories.advertisement && !this.privacyConsent.categories.advertisement)
                        try {
                            this.cookie.removeFBPCookie(q)
                        } catch (e) {
                            u(e)
                        }
                }
            }, {
                key: "safeCallListener",
                value: function(e, t) {
                    try {
                        e(t)
                    } catch (e) {
                        u(e)
                    }
                }
            }, {
                key: "addCookieDomain",
                value: function(e) {
                    this.cookie.addDomain(e)
                }
            }, {
                key: "setCookiesToSubdomain",
                value: function(e) {
                    this.cookie.setCookiesToSubdomain(e)
                }
            }, {
                key: "addEnabledFeatureGates",
                value: function(e) {
                    Array.isArray(e) && e.every(function(e) {
                        return "string" == typeof e
                    }) && e.length > 0 && (this.enabledFeatureGates = e)
                }
            }, {
                key: "showBanner",
                value: function() {
                    if (this.privacySettings)
                        switch (this.privacySettings.mode) {
                        case N:
                            if (!this.optInHandler)
                                return;
                            this.optInHandler.showBanner();
                            return;
                        case E:
                            if (!this.cookiesByCategoryHandler)
                                return;
                            this.cookiesByCategoryHandler.showModal();
                            return;
                        default:
                            return
                        }
                    else
                        u("Hubspot privacy banner does not have privacy settings set")
                }
            }, {
                key: "hasEnabledFeatureGate",
                value: function(e) {
                    return this.enabledFeatureGates && w(this.enabledFeatureGates, e)
                }
            }, {
                key: "setApiBaseUrl",
                value: function(e) {
                    this.apiBaseUrl = e
                }
            }, {
                key: "getBaseActivityPayload",
                value: function() {
                    var e = L(this.privacySettings)
                      , t = this.visitorCountry
                      , i = this.privacySettings.id
                      , n = this.privacySettings.portalId
                      , o = this.context.win.hsVars && this.context.win.hsVars.page_id;
                    return {
                        bannerGeoLocation: t || "",
                        bannerPolicyId: i,
                        bannerType: e,
                        contentId: o || "",
                        portalId: n
                    }
                }
            }, {
                key: "sendReportingClickActivity",
                value: function() {
                    if (this.hasEnabledFeatureGate(ht)) {
                        var e = this.privacyConsent && this.privacyConsent.allowed
                          , t = this.privacyConsent && this.privacyConsent.categories.analytics
                          , i = this.privacyConsent && this.privacyConsent.categories.advertisement
                          , n = this.privacyConsent && this.privacyConsent.categories.functionality
                          , o = Object.assign({}, this.getBaseActivityPayload(), {
                            consentAllowed: e,
                            consentAnalytics: t,
                            consentAdvertisement: i,
                            consentFunctionality: n
                        });
                        if (this.context.getLocation().hash.indexOf(s) > -1 || this.context.getLocation().search.indexOf(s) > -1) {
                            m("The banner is in test mode, no reporting event will be sent.");
                            m("We would have sent the following click activity");
                            m(o)
                        } else
                            vt(this.apiBaseUrl, o)
                    } else
                        m("missing reporting gate, will not send click activity event")
                }
            }, {
                key: "sendReportingViewActivity",
                value: function() {
                    if (this.hasEnabledFeatureGate(ht)) {
                        var e = this.getBaseActivityPayload();
                        if (this.context.getLocation().hash.indexOf(s) > -1 || this.context.getLocation().search.indexOf(s) > -1) {
                            m("The banner is in test mode, no reporting event will be sent.");
                            m("We would have sent the following view activity");
                            m(e)
                        } else
                            ft(this.apiBaseUrl, e)
                    } else
                        m("missing reporting gate, will not view send activity event")
                }
            }]);
            return e
        }()
          , kt = function(e) {
            return encodeURI(e)
        }
          , xt = function(e) {
            return decodeURI(e)
        }
          , wt = function() {
            function e(t) {
                I(this, e);
                this.context = t || new T;
                this.currentDomain = null;
                this.cookiesToSubdomain = !1;
                this.domains = []
            }
            D(e, [{
                key: "isEnabled",
                value: function() {
                    return this.context.getNavigator().cookieEnabled || "cookie"in this.context.getDocument() && this.context.getDocument().cookie.length > 0
                }
            }, {
                key: "addDomain",
                value: function(e) {
                    var t = "." + this.context.getHostName();
                    f(t, e) && (!this.currentDomain || e.length < this.currentDomain.length) && (this.currentDomain = e);
                    this.domains.push(e)
                }
            }, {
                key: "getDomains",
                value: function() {
                    return this.domains
                }
            }, {
                key: "get",
                value: function(e) {
                    var t = new RegExp("(^|;)[ ]*" + e + "=([^;]*)").exec(this.context.getDocument().cookie);
                    return t ? xt(t[2]) : ""
                }
            }, {
                key: "set",
                value: function(e, t, i) {
                    var n, o, a = !1;
                    (i = i || {}).minsToExpire ? (n = new Date).setTime(n.getTime() + 1e3 * i.minsToExpire * 60) : i.daysToExpire ? (n = new Date).setTime(n.getTime() + 1e3 * i.daysToExpire * 60 * 60 * 24) : i.expiryDate && i.expiryDate.toGMTString ? n = i.expiryDate : i.expiryDate && (n = new Date(i.expiryDate));
                    if (void 0 !== n) {
                        o = n.toGMTString();
                        a = !0
                    }
                    this.setCookie(e, kt(t), {
                        expires: a ? ";expires=" + o : "",
                        expiresTime: a ? n : null,
                        path: ";path=" + (i.path ? i.path : "/"),
                        domain: !this.cookiesToSubdomain && this.currentDomain ? ";domain=" + this.currentDomain : "",
                        secure: i.secure ? ";secure" : "",
                        sameSite: ";SameSite=Lax"
                    })
                }
            }, {
                key: "getDomainAncestry",
                value: function(e) {
                    if ("" === e || !e)
                        return [];
                    var t = e.split(".");
                    if (2 === t.length)
                        return [e];
                    if ("" === t[t.length - 1] || t.length < 2) {
                        console.error("Invalid Domain: " + e + ", Parsed As: [" + t + "]");
                        return []
                    }
                    var i, n = [], o = "" + t[t.length - 1];
                    for (i = t.length - 2; i >= 0; i--)
                        if ("" !== t[i]) {
                            var a = t[i] + "." + o;
                            n.push(a);
                            o = a
                        } else if (0 !== i) {
                            console.error("Invalid Domain: " + e + ", Parsed As: [" + t + "]");
                            return []
                        }
                    return n
                }
            }, {
                key: "removeFBPCookie",
                value: function(e) {
                    var t = this
                      , i = new Date("Thu, 01-Jan-1970 00:00:01 GMT")
                      , n = i.toGMTString();
                    this.getDomainAncestry(this.context.getDocument().domain).forEach(function(o) {
                        t.setCookie(e, "", {
                            expires: ";expires=" + n,
                            expiresTime: i,
                            path: ";path=/",
                            domain: ";domain=." + o,
                            secure: "",
                            sameSite: ";SameSite=Lax"
                        })
                    })
                }
            }, {
                key: "remove",
                value: function(e) {
                    this.set(e, "", {
                        expiryDate: "Thu, 01-Jan-1970 00:00:01 GMT"
                    })
                }
            }, {
                key: "setCookie",
                value: function(e, t, i) {
                    var n = i.expires + i.path + i.domain + i.sameSite + i.secure;
                    this.writeCookie(e + "=" + t + n);
                    var o = this.get(e);
                    if ((!o || o !== t) && "" !== i.domain && (!i.expiresTime || i.expiresTime - new Date > 0)) {
                        var a = i.expires + i.path + i.sameSite + i.secure;
                        this.writeCookie(e + "=" + t + a)
                    }
                }
            }, {
                key: "writeCookie",
                value: function(e) {
                    this.context.getDocument().cookie = e
                }
            }, {
                key: "setCookiesToSubdomain",
                value: function(e) {
                    this.cookiesToSubdomain = e
                }
            }]);
            return e
        }()
          , Ct = {
            initialize: !0,
            runCritsitCookieScrubbing: !0,
            safeCallListener: !0,
            setCookiePolicy: !0,
            setPrivacyConsent: !0,
            setPrivacySettings: !0,
            cleanUpCookies: !0,
            getVisitorCountry: !0,
            sendReportingClickActivity: !0,
            sendReportingViewActivity: !0
        }
          , It = function() {
            function e(t, i) {
                I(this, e);
                this.context = t || new T;
                this.cookie = i || new wt(t);
                this.banner = new bt(this.context,this.cookie)
            }
            D(e, [{
                key: "setUpQueue",
                value: function(e) {
                    var t = this.context.getWindow()
                      , i = t[a] = t[a] || [];
                    Array.isArray(i) || (i = t[a] = []);
                    i.push = e
                }
            }, {
                key: "processQueue",
                value: function(e) {
                    var t = this.context.getWindow()[a];
                    y(t, ["setCookiesToSubdomain", "addCookieDomain", "addEnabledFeatureGates", "setApiBaseUrl"], e);
                    var i = g(t, "getVisitorCountry");
                    this.banner.initialize(t, i);
                    for (; t.length; )
                        e(t.shift())
                }
            }, {
                key: "run",
                value: function() {
                    var e = this
                      , t = this.context.getWindow();
                    if (!t[o]) {
                        m("Initializing the banner runner...");
                        var i = function(t) {
                            try {
                                if (t && Array.isArray(t) && t.length > 0 && e.banner[t[0]]) {
                                    var i = t[0]
                                      , n = e.banner[t[0]]instanceof Function;
                                    if (Ct[i] || !n)
                                        return !1;
                                    var o = t.slice(1);
                                    return e.banner[i].apply(e.banner, o)
                                }
                            } catch (e) {
                                u(e)
                            }
                            return !1
                        };
                        this.setUpQueue(i);
                        this.processQueue(i);
                        t[o] = !0;
                        m("Done initializing the banner runner.")
                    }
                }
            }]);
            return e
        }()
          , Mt = function(e) {
            var t = function() {
                (new It).run()
            }
              , i = e.getDocument();
            !i.readyState || "complete" === i.readyState || i.addEventListener && "loaded" === i.readyState ? t() : l(e.getWindow(), "load", t, !0)
        };
        (function() {
            try {
                var e = new T
                  , t = e.getWindow();
                if (t[n])
                    return;
                Mt(e);
                t[n] = !0
            } catch (e) {
                u(e)
            }
        }
        )()
    }
    ]);
    /****** Cookie Banner version static-1.943 *****/

}
/*
     FILE ARCHIVED ON 22:31:02 Apr 04, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:12:53 Feb 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.063
  exclusion.robots.policy: 0.053
  cdx.remote: 0.11
  esindex: 0.009
  LoadShardBlock: 166.155 (6)
  PetaboxLoader3.datanode: 196.57 (7)
  load_resource: 105.273
  PetaboxLoader3.resolve: 37.099
*/
