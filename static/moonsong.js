'use strict';
// cavestory.org/moonsong-comments.php
if (document.getElementById) {
    var moonsong = document.getElementById('moonsong');
    if (typeof moonsong.style.overflow !== 'undefined') {
        if (typeof moonsong.style.left !== 'undefined') {
            var dragon = document.getElementById('dragonl');
            var cloud1 = document.getElementById('cloud1l');
            var cloud2 = document.getElementById('cloud2l');
            var cloud3 = document.getElementById('cloud3l');
            var cloud4 = document.getElementById('cloud4l');
            var dragonwing = document.getElementById('dragonwing');
            var scrollprogress1 = 0;
            var scrollprogress2 = 0;
            var scrollprogress3 = 0;
            var scrollprogress4 = 0;
            var wingstage = 0;
            var scrolldragon = 0;
            var realprog = 13;
            var wingruns = 0;
            var runs = 0;
            var animeth = 0;
            var datemeth = 0;
            var datestart = 0;
            var chkts = false;
            var noticab = true;
            var cantr = false;
            if (document.all) {
                if (navigator.appName == 'Microsoft Internet Explorer') {
                    if (navigator.platform == 'MacPPC') {
                        noticab = false;
                        moonsong.innerHTML = '<img src="/images/moonsong561.gif">';
                    }
                }
            }
            if (noticab) {
                if (typeof navigator.vendor !== 'undefined') {
                    if (navigator.vendor == 'iCab') {
                        if (parseInt(navigator.vendorSub + '') == 3) {
                            noticab = false;
                        }
                    }
                }
                if (typeof CSS !== 'undefined') {
                    if (typeof CSS.supports !== 'undefined') {
                        cantr = CSS.supports('transform', 'translateX(1px)');
                    }
                }
                if (noticab) {
                    cloud1.style.width = '960px';
                    cloud2.style.width = '960px';
                    cloud3.style.width = '960px';
                    cloud4.style.width = '960px';
                }
                if (Date.now) { datemeth = 1; }
                if (datemeth) {
                    datestart = Date.now();
                } else {
                    datestart = (new Date()).getTime();
                }
                if (window.requestAnimationFrame) {
                    animeth = 3;
                } else if (window.webkitRequestAnimationFrame) {
                    animeth = 4;
                } else if (window.mozRequestAnimationFrame) {
                    animeth = 5;
                } else if (window.oRequestAnimationFrame) {
                    animeth = 6;
                } else if (window.msRequestAnimationFrame) {
                    animeth = 7;
                }
                window.onload = function() {
                    switch (animeth) {
                        case 3:
                            window.requestAnimationFrame(scrollClouds);
                            break;
                        case 4:
                            window.webkitRequestAnimationFrame(scrollClouds);
                            break;
                        case 5:
                            window.mozRequestAnimationFrame(scrollClouds);
                            break;
                        case 6:
                            window.oRequestAnimationFrame(scrollClouds);
                            break;
                        case 7:
                            window.msRequestAnimationFrame(scrollClouds);
                            break;
                        default:
                            window.setTimeout(sTTestA, 46);
                            window.setTimeout('sTTestB()', 100);
                    }
                };
            }
        }
    }
}
function sTTestA() {
    if (animeth < 1) {
        animeth = 1;
        scrollClouds();
    }
}
function sTTestB() {
    if (animeth < 1) {
        animeth = 2;
        scrollClouds();
    }
}
function scrollClouds(e) {
    var datenow = 0;
    var cont = 1;
    if (animeth) {
        if (!chkts) {
            if (e) {
                if (typeof e == "number") {
                    datemeth = 2;
                    datestart = e;
                }
            }
            chkts = true;
        }
        if (datemeth == 2) {
            datenow = e;
        } else if (datemeth == 1) {
            datenow = Date.now();
        } else {
            datenow = (new Date()).getTime();
        }
        if (datenow - datestart >= 46) {
            datestart = datenow;
        } else {
            cont = 0;
        }
    }
    if (cont) {
        var sp1 = scrollprogress1;
        var sp2 = scrollprogress2;
        var sp3 = scrollprogress3;
        var sp4 = scrollprogress4;
        if (sp1 > -304) { sp1 -= 16; } else { sp1 = 0; }
        if (sp2 > -312) { sp2 -= 8; } else { sp2 = 0; }
        if (sp3 > -316) { sp3 -= 4; } else { sp3 = 0; }
        if (sp4 > -318) { sp4 -= 2; } else { sp4 = 0; }
        if (noticab) {
            if (cantr) {
                cloud1.style.transform = 'translateX(' + sp1 + 'px)';
                cloud2.style.transform = 'translateX(' + sp2 + 'px)';
                cloud3.style.transform = 'translateX(' + sp3 + 'px)';
                cloud4.style.transform = 'translateX(' + sp4 + 'px)';
            } else {
                cloud1.style.left = sp1 + 'px';
                cloud2.style.left = sp2 + 'px';
                cloud3.style.left = sp3 + 'px';
                cloud4.style.left = sp4 + 'px';
            }
        } else {
            cloud1.style.backgroundPosition = sp1 + 'px 0';
            cloud2.style.backgroundPosition = sp2 + 'px 0';
            cloud3.style.backgroundPosition = sp3 + 'px 0';
            cloud4.style.backgroundPosition = sp4 + 'px 0';
        }
        if (runs < 3) {
            if (!wingruns) {
                if (wingstage) {
                    dragonwing.style.backgroundPosition = '0 0';
                    wingstage = 0;
                } else {
                    dragonwing.style.backgroundPosition = '6px 0';
                    wingstage = 1;
                }
                wingruns = 1;
            } else {
                wingruns = 0;
            }
            runs++;
        } else {
            dragon.style.top = realprog + 'px';
            if (scrolldragon > 12) {
                if (scrolldragon < 25) {
                    scrolldragon++;
                    realprog++;
                } else {
                    scrolldragon = 0;
                    realprog = 13;
                }
            } else {
                scrolldragon++;
                realprog--;
            }
            runs = 0;
        }
        scrollprogress1 = sp1;
        scrollprogress2 = sp2;
        scrollprogress3 = sp3;
        scrollprogress4 = sp4;
    }
    switch (animeth) {
        case 2:
            window.setTimeout('scrollClouds()', 46);
            break;
        case 3:
            window.requestAnimationFrame(scrollClouds);
            break;
        case 4:
            window.webkitRequestAnimationFrame(scrollClouds);
            break;
        case 5:
            window.mozRequestAnimationFrame(scrollClouds);
            break;
        case 6:
            window.oRequestAnimationFrame(scrollClouds);
            break;
        case 7:
            window.msRequestAnimationFrame(scrollClouds);
            break;
        default:
            window.setTimeout(scrollClouds, 46);
    }
}
