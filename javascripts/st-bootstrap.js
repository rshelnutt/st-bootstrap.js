'use strict';

// Remove Default Stylesheets
$('link[rel="stylesheet"][href*="template.css"]').attr('disabled', 'disabled').remove();
$('link[rel="stylesheet"][href*="normalize.css"]').attr('disabled', 'disabled').remove();

// Construct Bootstrap Page Layout
$(document).find('body > div:not(.modal)').removeClass().addClass('container d-flex flex-column flex-nowrap h-100');

$('.container-row').each(function () {
    $(this).removeClass('container-row').addClass('row');
});

$('.container-cell').each(function () {
    $(this).removeClass('container-cell').addClass('col');
});

// iFrame Login Modal
var bsLogin = $('#bootLogin').find('iframe');
bsLogin[0].contentWindow.location = '/blank.html';

$('#bootLogin').on('show.bs.modal', function () {
    bsLogin.attr('src', '../' + stappConfig.cfgLoginModal + '/sign-in-modal.htm');
});

// Auto iFrame Height
function resizeIframe(obj) {
    setTimeout(function () {
        obj[0].style.height = obj[0].contentWindow.document.body.scrollHeight + 'px';
    }, 50);
}

function autoHeight(autoFrame) {
    autoFrame.on('load', function () {
        resizeIframe(autoFrame)
    });
}

// Format US Thousands
function CommaFormatted(amount) {
    var delimiter = ","; // replace comma if desired
    var a = amount.split('.', 2);
    var d = a[1];
    var i = parseInt(a[0]);
    if (isNaN(i)) {
        return '';
    }
    var minus = '';
    if (i < 0) {
        minus = '-';
    }
    i = Math.abs(i);
    var n = new String(i);
    var a = [];
    while (n.length > 3) {
        var nn = n.substr(n.length - 3);
        a.unshift(nn);
        n = n.substr(0, n.length - 3);
    }
    if (n.length > 0) {
        a.unshift(n);
    }
    n = a.join(delimiter);
    if (d.length < 1) {
        amount = n;
    }
    else {
        amount = n + '.' + d;
    }
    amount = minus + amount;
    return amount;
}

// Populate Category's Products Property Data
function prodPropertyData(productdata, productID, option) {
    var propertyString = '';
    for (var sn = 0; sn < productdata.length; sn++) {
        if (productdata[sn].Product.ID === productID) {
            for (var sn1 = 0; sn1 < productdata[sn].Properties.length; sn1++) {
                switch (productdata[sn].Properties[sn1].ID) {
                    case 1:
                        if (productdata[sn].Properties[sn1].V.toLowerCase() === "yes") {
                            if (option === 'class') {
                                propertyString += ' prodSale'
                            }
                        }
                        break;
                    case 2:
                        if (productdata[sn].Properties[sn1].V.toLowerCase() === "yes") {
                            if (option === 'class') {
                                propertyString += ' prodNew'
                            }
                        }
                        break;
                    case 4:
                        if (productdata[sn].Properties[sn1].V && productdata[sn].Properties[sn1].V.length > 0) {
                            var prodMSRP = parseFloat(productdata[sn].Properties[sn1].V).toFixed(2);
                            prodMSRP = CommaFormatted(prodMSRP);
                            if (option === 'MSRP') {
                                propertyString = '<span class="prodPriceMSRPLabel">' + stappConfig.cfgCatMSRPLabel + '</span> <div class="prodPropMSRP">$' + prodMSRP + '</div>';
                            }
                        }
                        break;
                }
            }
        }
    }
    return propertyString;
}

// Set Brand Text/Logo Position
function setBrandPos(cfgBrandPos) {
    var utilBar = $('.nav-ui-utils > ul');
    var x = $('#mainMenu').find('.navbar-nav > li').length;
    var y = Math.floor(x / 2) - 1;
    var mobileBrand = $('.nav-item').find('.navbar-brand').parent();

    if ((!(stappConfig.cfgShopName === "")) || (!(stappConfig.cfgBrandImg === ""))) {
        var brandClasses = "nav-item navbar-brand d-none d-sm-block col-12 col-md-auto pl-3 ";
        switch (cfgBrandPos.toLowerCase()) {
            case "left":
                $(utilBar).prepend('<li class="' + brandClasses + 'text-center text-md-left"></li>');
                $('.nav-ui-brand .navbar-brand').addClass('text-center text-md-left');
                break;
            case "right":
                $(utilBar).append('<li class="' + brandClasses + 'text-right"></li>');
                $('.nav-ui-brand .navbar-brand').addClass('text-center text-md-right');
                $('.nav-ui-user').addClass('pr-3');
                $(utilBar).find('.nav-ui-user').prependTo(utilBar);
                break;
            case "center":
                $(utilBar).find('.nav-ui-search').after('<li class="' + brandClasses + 'text-center"></li>');
                $('.nav-ui-brand .navbar-brand').addClass('text-center');
                $(utilBar).find('.nav-ui-search').removeClass('flex-grow-1');
                break;
            case "menuleft":
                $('<li class="navbar-brand"></li>').insertBefore('#mainMenuNav .navbar-nav > li:first-of-type');
                $(mobileBrand).addClass('text-left');
                break;
            case "menuright":
                $('<li class="navbar-brand"></li>').insertAfter('#mainMenuNav .navbar-nav > li:last-of-type');
                $(mobileBrand).addClass('text-right');
                break;
            case "menucenter":
                $('<li class="navbar-brand"></li>').insertAfter('#mainMenuNav .navbar-nav > li:eq(' + y + ')');
                $(mobileBrand).addClass('text-center');
                break;
            case "none":
                break;
            default:
                console.log("%cSTApp Error: %c\"cfgBrandPos\" configured position is not a valid value. Please select from one of the following:\n" +
                    "left | right | center | menuLeft | menuRight | menuCenter | none", "color: red", "color: black");
        }
    }
}

// Set Logo/Branding Position
setBrandPos(stappConfig.cfgBrandPos);

// Set custom branding text or image on page
if (stappConfig.cfgBrandImg === "1") {
    var cfgBrand = $.trim(stappConfig.cfgBrand);
    $('.navbar-brand,.nav-side-logo').html(cfgBrand); //load config file
} else {
    var cfgBrand = $.trim(stappConfig.cfgShopName);
    $('.navbar-brand,.nav-side-logo').text(cfgBrand); //load config file
}

// Set Category & Product Image Heights
function setImages() {
    $('.categoryImg').each(function () {
        var padOffset = $(this).width() - 0;
        $(this).css('max-height', $(this).width());
        $(this).css('height', '100%');
        $(this).css('height', $(this).width());
        $(this).find('img').css('max-height', padOffset);
    });

    $('.prodImg').each(function () {
        $(this).css('max-height', $(this).width());
        $(this).css('height', '100%');
        $(this).css('height', $(this).width());
    });
}

// Adjust Product Description Dropdown Status
function setProdDescWrapper() {
    if ($(window).width() < 768) {
        if (stappConfig.cfgOpenDescMobile.toLowerCase() === "false") {
            $('.COMProdDescLink').addClass('collapsed').attr('aria-expanded', 'false');
            $('#COMProdDesc').removeClass('show');
        } else if (stappConfig.cfgOpenDescMobile.toLowerCase() === "true") {
            $('.COMProdDescLink').removeClass('collapsed').attr('aria-expanded', 'true');
            $('#COMProdDesc').addClass('show');
        }
    } else {
        if (stappConfig.cfgOpenDescDesktop.toLowerCase() === "false") {
            $('.COMProdDescLink').addClass('collapsed').attr('aria-expanded', 'false');
            $('#COMProdDesc').removeClass('show');
        } else if (stappConfig.cfgOpenDescDesktop.toLowerCase() === "true") {
            $('.COMProdDescLink').removeClass('collapsed').attr('aria-expanded', 'true');
            $('#COMProdDesc').addClass('show');
        }
    }
}

// Wrap Product Details on Checkout Screen
function chkoutProductWrapper() {
    setTimeout(function () {
        $('.RestCart_CartItem.productDetails').each(function () {
            var chkoutWrap = $(this).closest('.productFullWrap');
            if ($(window).width() < 768) {
                chkoutWrap.find('.prod_trans').prepend($(this));
            } else {
                chkoutWrap.find('.RestCart_CartItem.productImage').after($(this));
            }
        });
    }, 200);
}

// Set Viewport Classes & Positioning
function setViewportClass() {
    var searchFormUI = $('.ui-widgetTN'),
        searchFormUI2 = $('.ui-widgetTN2'),
        searchFormContainer = $(searchFormUI).parent(),
        searchFormContainer2 = $(searchFormUI2).parent(),
        searchForm = $('#SearchForm'),
        searchInput = $('#SearchText'),
        searchFormMobile = $('#SearchFormMobile'),
        searchTextMobileDummy = $('#SearchTextDummy'),
        prodImgLink = $('.COMProdContainer .MainProdBox a'),
        navbarBrand = $('.nav-item.navbar-brand');

    if ($(window).width() < 992) { // If viewport is Small Desktop (eBook, small laptop, etc)
        prodImgLink.attr({
            'href': 'Javascript:ShowLarger();',
            'title': 'View Larger'
        });

        // Set Fluid Widths on all direct child containers of Body for mobile responsiveness
        $('body > div:not(.gj-picker):not(.hero):not(.modal):not(.tmask):not(.tbox):not(#at20mc):not(.SearchFormMobile):not(.modal-backdrop)').addClass('container-fluid').removeClass('container');

        // Add Mobile Classes To Body
        $('body').addClass('mobile').removeClass('desktop mobile-sm');

        // Strip padding classes from Navigation Utilities
        $('.nav-ui-utils > .nav').removeClass('pl-3 pr-3');

        // Change Dropdown To Click
        $('#mainMenuNav').find('.dropdown-toggle').each(function () {
            $(this).attr({
                "data-toggle": "dropdown",
                "data-hover": ""
            });
        });

        // Set #topBar Background Image
        if (stappConfig.cfgMobileTopBarBg.length > 1) {
            $('#topBar').css('background-image', 'url("' + stappConfig.cfgMobileTopBarBg + '")');
        }

        // Set Brand Positioning & Styles
        if (stappConfig.cfgBrandPos.toLowerCase() === "menucenter") {
            $('.nav-ui-search').insertBefore('.nav-ui-user');
        }
        if (stappConfig.cfgBrandPos.toLowerCase() === "center") {
            $('.nav-ui-search').insertBefore('.nav-item.navbar-brand');
        }
        if (stappConfig.cfgBrandPos.toLowerCase() === "right") {
            $('.nav-item.navbar-brand').insertAfter('.nav-ui-search');
        }

        navbarBrand.addClass('pl-3').removeClass('pr-3 mr-0');

        if ($(window).width() < 768) { // If viewport is Tablet
            $('body').addClass('mobile-sm').removeClass('mobile-xs');
            prodImgLink.removeAttr('href title');

            navbarBrand.addClass('pr-3');
            if (stappConfig.cfgBrandPos.toLowerCase() === "left" || stappConfig.cfgBrandPos.toLowerCase() === "menuleft") {
                $('.nav-ui-search').insertBefore('.nav-ui-user');
            }
            if (stappConfig.cfgBrandPos.toLowerCase() === "center") {
                $('.nav-ui-search').insertAfter('.nav-ui-user');
            }
            if (stappConfig.cfgBrandPos.toLowerCase() === "right" || stappConfig.cfgBrandPos.toLowerCase() === "menuright") {
                $('.nav-item.navbar-brand').insertBefore('.nav-ui-user');
            }
        }

        if ($(window).width() < 576) { // If viewport is Mobile
            $('body').addClass('mobile-xs').removeClass('mobile-sm');

            if (stappConfig.cfgBrandPos.toLowerCase() === "left" || stappConfig.cfgBrandPos.toLowerCase() === "menuleft") {
                $('.nav-ui-search').insertAfter('.nav-ui-user');
            }

            if (stappConfig.cfgBrandPos.toLowerCase() === "menucenter") {
                $('.nav-ui-search').insertAfter('.nav-ui-user');
            }

            if (stappConfig.cfgBrandPos.toLowerCase() === "right" || stappConfig.cfgBrandPos.toLowerCase() === "menuright") {
                $('.nav-ui-user').insertBefore('.nav-ui-search');
            }

            if (!$(searchTextMobileDummy).length > 0) {
                $(searchFormContainer).prepend('<div class="ui-widgetTN2 ml-3 mr-3"><input id="SearchTextDummy" class="form-control mr-2 mt-2 mt-sm-0" type="text" placeholder="search for anything"><ion-icon name="search"></ion-icon></div>');
                $('body').append('<div id="SearchFormMobile"></div>');
                $('#SearchFormMobile').prepend(searchFormUI);
                $(searchInput).before('<span class="close"><ion-icon name="arrow-back"></ion-icon></span>');
            }

        } else {
            // Remove mobile search form
            if ($(searchTextMobileDummy).length > 0) {
                $('#SearchFormMobile').find('.close').remove();
                $(searchFormContainer2).prepend(searchFormUI);
                $('body').find(searchFormMobile).remove();
                $(searchFormUI2).remove();
            }
        }

    } else {
        // If viewport is Desktop (window width > 991)
        $('#topBar').css('backgroundImage', '');

        navbarBrand.removeClass('pl-3');
        navbarBrand.addClass('mr-3');
        $('.nav-ui-utils > .nav').addClass('pl-3 pr-3');

        $('body > div:not(.gj-picker):not(.hero):not(.modal):not(.tmask):not(.tbox):not(#at20mc):not(.SearchFormMobile):not(.modal-backdrop)').removeClass('container-fluid').addClass('container');
        $('body').addClass('desktop').removeClass('mobile mobile-sm mobile-xs');
        $('#mainMenuNav').find('.dropdown-toggle').each(function () {
            $(this).attr({
                "data-toggle": "",
                "data-hover": "dropdown"
            });
        });

        if (stappConfig.cfgBrandPos.toLowerCase() === "left" || stappConfig.cfgBrandPos.toLowerCase() === "menuleft") {
            $('.nav-ui-search').insertBefore('.nav-ui-user');
        }
    }

    // Toggle dropdown appearance depending on resolution
    $(".nav-item a[data-hover='dropdown']").parent().hover(function () {
        if ($(window).width() >= 991) {
            $(this).addClass("show");
        }
    }, function () {
        if ($(window).width() >= 991) {
            $(this).removeClass("show");
        }
    });

    $('.dropdown-has-content').hover(function () {
        if ($(window).width() >= 991) {
            $(this).parent().css('overflow', 'visible');
        }
    }, function () {
        if ($(window).width() >= 991) {
            $(this).parent().css('overflow', '');
        }
    });
}

// Keep child category submenus in top menu range
function subMenuConstruct() {
    $('.navbar-nav > .nav-item > .dropdown-menu > .dropdown-item > .dropdown-stage').each(function () {
        var menuBase = $('#mainMenu').outerWidth();

        //var subDropMenuWidth = $(this).closest('.dropdown-menu').outerWidth();
        var subItem = $(this).closest('.nav-item').outerWidth();
        var subItemLeft = $(this).closest('.nav-item').position().left;
        var subDropMenuLeft = $(this).closest('.dropdown-menu').position().left;

        var subStageLeft = Math.ceil(subItemLeft + (subItem - subDropMenuLeft));

        var offsetCalc = (menuBase + 1) - subStageLeft;
        var offsetCalcLeft = Math.ceil((subItemLeft - 1) + subDropMenuLeft);

        if ($(this).closest('.dropdown-menu').length > 0) {
            if (offsetCalc >= (menuBase * 0.4)) {
                // If dropdown stage width >= 40% of menu width then extend to right
                $(this).css('width', offsetCalc);
            } else {
                // If dropdown stage width < 40% of menu width (close to the end) then reverse text/image order and extend to left
                $(this).css({
                    'width': offsetCalcLeft,
                    'right': '100%',
                    'left': 'unset',
                    'flexDirection': 'row-reverse'
                });
            }
        }
    });
}

subMenuConstruct();

// Check Scrollability
function checkScroll() {
    var docHeight = document.getElementById("body").scrollHeight;
    var winHeight = window.innerHeight;
    if (docHeight > winHeight) {
        $('#body').addClass('overflow');
    } else {
        $('#body').removeClass('overflow');
    }
}

// Scroll To Anchor
function scrollToAnchor(aid) {
    var aTag = $("a[name='" + aid + "']");
    $('html,body').animate({scrollTop: aTag.offset().top}, 'fast');
}

// Reset Dropdowns
function resetDropdowns() {
    $('.nav-ui-user-menu').removeClass('show').attr('aria-expanded', 'false');
    $('.nav-ui-user-menu .dropdown-menu').removeClass('show');
}

// Construct Hero
$('.hero').each(function (hero) {
    hero = $(this);
    var heroDataHeight = hero.attr('data-hero-height'),
        heroDataType = hero.attr('data-type'),
        heroImg = hero.children('img'),
        heroParent = hero.parent().parent();

    if ($(this).is('ul')) {
        hero.addClass('slider');
    } else {
        hero.css({
            'backgroundImage': 'url("' + heroImg.attr('src') + '")'
        });
        heroImg.remove();
        if (typeof heroDataHeight !== typeof undefined && heroDataHeight !== false) {
            hero.css({
                'height': heroDataHeight + 'px'
            });
            if (!heroParent.hasClass('row-content')) {
                heroParent.css({
                    'height': heroDataHeight + 'px'
                });
            }
        }
    }

    if (typeof heroDataType !== typeof undefined && heroDataType !== false) {
        if (heroDataType = "media") {
            hero.addClass('slider-media');
        }
    }

    if (hero.hasClass('fullscreen')) {
        hero.parent().parent().addClass('hero-stage fullscreen');
    }

});

// Featured Slider Construct
$('.featured-slider').slick({
    lazyLoad: 'ondemand',
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// Media Slider Construct
$('.slider.slider-media').each(function (slider) {
    slider = $(this);

    var sliderClasses = slider.attr("class");

    slider.contents().wrapAll('<div class="' + sliderClasses + '" />');
    slider.find('li').each(function () {
        var element = this;

        var mediaLink = $(element).contents().not($(element).children()).filter(function () {
            return this.nodeType === 3
        });

        if ($(this).is(':contains("youtube.com")')) {
            var vidStart = $(this).attr('data-video-start'),
                vidStartLink = "",
                vidPlaylist = $(this).attr('data-video-playlist'),
                vidPlaylistLink = "";

            $(mediaLink).wrapAll('<div class="media" />');
            $(element).contents().wrapAll('<div class="item item-youtube" />');

            var elementItem = $(element).children('.item');

            if (typeof vidStart !== typeof undefined && vidStart !== false) {
                vidStartLink = "&amp;start=" + vidStart;
            }

            if (typeof vidPlaylist !== typeof undefined && vidPlaylist !== false) {
                vidPlaylistLink = "&amp;playlist=" + vidPlaylist;
            }

            var header = $(this).find(':header');
            $(header).text($.trim($(header).text()));
            $(header).wrap('<p class="caption" />').contents().unwrap();

            var linktext = $(this).find('.media');
            $(linktext).text($.trim($(linktext).text()));

            var link = $(linktext).text();
            var linkURL = link + '?enablejsapi=1&amp;controls=0&amp;fs=0&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;loop=1' + vidPlaylistLink + vidStartLink + ';';

            $(this).find('.media').html('<iframe allowfullscreen="" class="embed-player slide-media" frameborder="0" height="520" src="' + linkURL + '" width="980"></iframe>');
            $(this).find('.media').contents().unwrap();

            $(this).contents().unwrap();
        }

        if ($(this).is(':contains("vimeo.com")') && $(this).is(':not(:contains(".mp4"))')) {
            var vidStart = $(this).attr('data-video-start');

            $(mediaLink).wrapAll('<div class="media" />');
            $(element).contents().wrapAll('<div class="item item-vimeo" />');

            var elementItem = $(element).children('.item');

            if (typeof vidStart !== typeof undefined && vidStart !== false) {
                $(elementItem).attr({
                    'data-video-start': vidStart
                });
            }

            var header = $(this).find(':header');
            $(header).text($.trim($(header).text()));
            $(header).wrap('<p class="caption" />').contents().unwrap();

            var linktext = $(this).find('.media');
            $(linktext).text($.trim($(linktext).text()));

            var link = $(linktext).text();
            var linkURL = link + '?api=1&amp;byline=0&amp;portrait=0&amp;title=0&amp;background=1&amp;mute=1&amp;loop=1&amp;autoplay=0';

            $(this).find('.media').html('' +
                '<iframe allowfullscreen="" class="embed-player slide-media" frameborder="0" height="520" mozallowfullscreen="" src="'
                + linkURL +
                '" webkitallowfullscreen="" width="980">' +
                '</iframe>');
            $(this).find('.media').contents().unwrap();

            $(this).contents().unwrap();
        }

        if ($(this).is(':contains(".mp4")')) {
            $(mediaLink).wrapAll('<div class="media" />');
            $(element).contents().wrapAll('<div class="item item-video" />');

            var header = $(this).find(':header');
            $(header).text($.trim($(header).text()));
            $(header).wrap('<p class="caption" />').contents().unwrap();

            var poster = $(this).find('img');
            if (poster.length > 0) {
                poster = poster.attr('src');
            } else {
                poster = "";
            }

            var linktext = $(this).find('.media');
            $(linktext).text($.trim($(linktext).text()));

            var linkURL = $(linktext).text();

            $(this).find('.media').html('' +
                '<video class="slide-video slide-media" loop="" muted="" poster="' + poster + '" preload="metadata">' +
                '<source src="' + linkURL + '"     type="video/mp4" />' +
                '</video>');
            $(this).find('img').remove();
            $(this).find('.media').contents().unwrap();
            $(this).find(':header').wrap('<p class="caption" />').contents().unwrap();
            $(this).contents().unwrap();
        }

        if ($(this).find('img').length > 0 && $(this).is(':not(:contains(".mp4"))')) {
            $(element).contents().wrapAll('<div class="item item-image" />');

            var elementItem = $(element).children('.item');
            var header = $(this).find(':header');

            $(header).text($.trim($(header).text()));
            $(header).wrap('<figcaption class="caption" />').contents().unwrap();

            var linkURL = $(elementItem).children('img').attr('src');

            $(elementItem).prepend('<div class="slide-image slide-media" style="background-image:url(\'' +
                linkURL +
                '\');"><img class="image-entity" data-lazy="' + linkURL + '" /></div>');

            $(elementItem).children('img').remove();

            $(elementItem).children('img').css('border', '3px solid red');

            $(this).contents().unwrap();
        }
    });
    slider.contents().unwrap();
});

// Slider Video Compiler
var slideWrapper = $(".slider"),
    iframes = slideWrapper.find('.embed-player'),
    lazyImages = slideWrapper.find('.slide-image'),
    lazyCounter = 0;

// POST commands to YouTube or Vimeo API
function postMessageToPlayer(player, command) {
    if (player == null || command == null) return;
    player.contentWindow.postMessage(JSON.stringify(command), "*");
}

// When the slide is changing
function playPauseVideo(slick, control) {
    var currentSlide, slideType, startTime, player, video;

    currentSlide = slick.find(".slick-current");
    slideType = currentSlide.attr("class").split(" ")[1];
    player = currentSlide.find("iframe").get(0);
    startTime = currentSlide.data("video-start");

    if (slideType === "item-vimeo") {
        switch (control) {
            case "play":
                if ((startTime != null && startTime > 0) && !currentSlide.hasClass('started')) {
                    currentSlide.addClass('started');
                    postMessageToPlayer(player, {
                        "method": "setCurrentTime",
                        "value": startTime
                    });
                }
                postMessageToPlayer(player, {
                    "method": "play",
                    "value": 1
                });
                break;
            case "pause":
                postMessageToPlayer(player, {
                    "method": "pause",
                    "value": 1
                });
                break;
        }
    } else if (slideType === "item-youtube") {
        switch (control) {
            case "play":
                postMessageToPlayer(player, {
                    "event": "command",
                    "func": "mute"
                });
                postMessageToPlayer(player, {
                    "event": "command",
                    "func": "playVideo"
                });
                break;
            case "pause":
                postMessageToPlayer(player, {
                    "event": "command",
                    "func": "pauseVideo"
                });
                break;
        }
    } else if (slideType === "item-video") {
        video = currentSlide.children("video").get(0);
        if (video != null) {
            if (control === "play") {
                video.play();
            } else {
                video.pause();
            }
        }
    }
}

// Resize player
function resizePlayer(iframes, ratio) {
    if (!iframes[0]) return;
    var win = $(".slider"),
        width = win.width(),
        playerWidth,
        height = win.height(),
        playerHeight,
        ratio = ratio || 16 / 9;

    iframes.each(function () {
        var current = $(this);
        if (width / ratio < height) {
            playerWidth = Math.ceil(height * ratio);
            current.width(playerWidth).height(height).css({
                left: (width - playerWidth) / 2,
                top: 0
            });
        } else {
            playerHeight = Math.ceil(width / ratio);
            current.width(width).height(playerHeight).css({
                left: 0,
                top: (height - playerHeight) / 2
            });
        }
    });
    $(slideWrapper).css('transition', '');
}

// Check Product Input Quantity
function checkQty(element, val) {
    if (val >= 2) {
        element.removeAttr('disabled');
    } else {
        element.attr('disabled', '');
    }
}

// Page Loaded Functions
function onInit() {
    setImages();
    setViewportClass();
    checkScroll();
    setProdDescWrapper();
}

//Set Row Fullwidth
function setFullwidth() {
    $(document).find('.fullwidth').each(function () {
        var topRow = $(this).closest("[id^=row-]");
        topRow.addClass('row-fullwidth');
    });
}

// Construct hero fullscreen
function heroFullcreen() {
    if ($('.hero.fullscreen').length) {
        var navHeightSet = $('#header').outerHeight();
        var navHeight = Math.ceil((navHeightSet + 1) * -1);
        $('.hero-stage').css('marginTop', navHeight);
        $('.hero-stage.fullscreen').css('position', 'relative');
        $('.hero.fullscreen:not(.slider)').css('visibility', 'visible');
    }
}

// Construct Product Description Dropdown
var scrollPane = document.querySelector('.scroller');
var ps;

if (scrollPane) {
    ps = new PerfectScrollbar(scrollPane);
}

// DOM Ready
$(document).ready(function () {

    // Load all page functions
    onInit();

    // Construct Nav Background Overlay
    if (!(stappConfig.cfgMobileBgOverlay === "")) {
        $('.nav-side-logo, #topBar').addClass('nav-overlay');
    }

    //Set Header to Fullwidth
    function setHeaderFullwidth() {
        $('#header').each(function () {
            var topRow = $("[id^=row-]");
            if ($(this).closest(topRow).hasClass("row-fullwidth")) {
                $(this).addClass('fullwidth');
                $(this).closest(topRow).children('.col').removeClass('fullwidth');
            }
        });
    }

    setHeaderFullwidth();

    //Set Row Fullwidth
    setFullwidth();

    //Set Mobile Slide-out Menu Header Background Image
    if (stappConfig.cfgMobileSideBarBg.length > 1) {
        $('.nav-side-logo').css('background-image', 'url("' + stappConfig.cfgMobileSideBarBg + '")');
    }

    // Update Product Description Dropdown
    $('.COMProdDescLink').click(function () {
        setTimeout(function () {
            if (scrollPane) {
                ps.update();
            }
        }, 300);
    });

    // Initialize Slider
    slideWrapper.on("init", function (slick) {
        slick = $(slick.currentTarget);
        setTimeout(function () {
            playPauseVideo(slick, "play");
        }, 1000);
        resizePlayer(iframes, 16 / 9);
    });
    slideWrapper.on("beforeChange", function (event, slick) {
        slick = $(slick.$slider);
        playPauseVideo(slick, "pause");
    });
    slideWrapper.on("afterChange", function (event, slick) {
        slick = $(slick.$slider);
        playPauseVideo(slick, "play");
    });
    slideWrapper.on("lazyLoaded", function (event, slick, image, imageSource) {
        lazyCounter++;
        if (lazyCounter === lazyImages.length) {
            lazyImages.addClass('show');
            // slideWrapper.slick("slickPlay");
        }
    });

    // Construct Slider
    slideWrapper.slick({
        // fade:true,
        autoplaySpeed: 4000,
        lazyLoad: "progressive",
        speed: 600,
        arrows: false,
        dots: true,
        cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)"
    });

    // Toggle Quantity Input
    $('.minus,.add').on('click', function (inputTarget) {
        inputTarget = $(this);
        var $qty = $(this).closest('.COMProdQtyInput').find('#ProductQuantity'),
            currentVal = parseInt($qty.val()),
            tgtMinus = $(this).closest('.COMProdQtyInput').children('.minus'),
            isAdd = $(this).hasClass('add');
        if (inputTarget.hasClass('minus') && tgtMinus.is('[disabled]')) {
            event.preventDefault();
        } else {
            !isNaN(currentVal) && $qty.val(
                isAdd ? ++currentVal : (currentVal > 0 ? --currentVal : currentVal)
            );
            UpdateProduct();
        }
        checkQty(tgtMinus, currentVal);
    });

    $("#ProductQuantity").click(function () {
        $(this).select();
    });

    // Trigger Mobile Menu
    var mobileInlineMenuButton = $(document).find('body.mobile #mainMenu > button');
    var mobileInlineMenu = $('#mainMenuNav');

    mobileInlineMenuButton.on('click touch', function () {
        if ($(this).hasClass('collapsed')) {
            $(this).closest('#mainMenu').css('zIndex', '5');
            $('body').append('<div class="modal-backdrop fade" style="z-index: 4; cursor:pointer;" />');
            setTimeout(function () {
                $('.modal-backdrop').addClass('show');
            }, 0);
        } else {
            if (mobileInlineMenu.hasClass('show')) {
                $(this).closest('#mainMenu').css('zIndex', '');
                $('.modal-backdrop').removeClass('show');
                setTimeout(function () {
                    $('.modal-backdrop').remove();
                }, 200);
            }
        }
    });

    // Trigger Modal Close
    $(document).on('click touch', function (e) {
        var tar = e.target;
        if ($(tar).hasClass('modal-backdrop') && !mobileInlineMenu.hasClass('collapsed') && !mobileInlineMenu.hasClass('collapsing')) {
            var mobileInlineMenuHeight = $(mobileInlineMenu).height();
            mobileInlineMenuButton.addClass('collapsed').attr('aria-expanded', 'false');

            mobileInlineMenu.removeClass('collapse').css('height', mobileInlineMenuHeight + 'px').removeClass('show').addClass('collapsing');
            mobileInlineMenu.css('height', '0px');
            $('.modal-backdrop').removeClass('show');

            mobileInlineMenuButton.closest('#mainMenu').css('zIndex', '');

            setTimeout(function () {
                $('.modal-backdrop').remove();
                mobileInlineMenu.css('height', '').removeClass('collapsing').addClass('collapse');
            }, 400);
        }
    });

    // Remove document follow on link click with # anchor
    $('a[href="#"]').click(function (e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    });

});

window.onload = function () {
    chkoutProductWrapper();
};

// Set body display when page is ready
setTimeout(function () {
    heroFullcreen();
    $(document).find('body').css('opacity', '1');
}, 200);

// Re-initialize functions when resizing window
$(window).on("resize", function () {
    $(slideWrapper).css('transition', 'none');
    resizePlayer(iframes, 16 / 9);

    if ($('.mobile #customFilters').is(':visible')) {
        customFiltersToggle();
    }

    setTimeout(function () {
        setImages();
    }, 150);

    setViewportClass();
    checkScroll();
    setProdDescWrapper();

    resetDropdowns();
    subMenuConstruct();

    chkoutProductWrapper();

    setFullwidth();

    if ($(window).width() >= 991) {
        heroFullcreen();
    }

    if (scrollPane) {
        ps.update();
    }
});
