window.addEventListener("popstate", function (event) {
	if (typeof event.state == "object") {
		if (event.state.obsolete !== true) {
			history.replaceState({"obsolete": true}, "");
			history.pushState(event.state, "");
		}
	}

	if (typeof event.state == "object") {
		if (event.state.obsolete === true) {
			history.back();
		}
	}
}, false);

// DOM Loaded
document.addEventListener("DOMContentLoaded", function() {
    var trackableElement;
    var menu = document.querySelector(".nav-side-menu");
    var appMenu = document.querySelector(".app-menu-container");
    var overlay = document.querySelector(".nav-side-menu-background");
    var burger = document.querySelector(".app-menu-burger");
    var sidelink = document.querySelector(".sideMenuSearch");

    var touchingElement = false;
    var startTime;
    var startX = 0,
        startY = 0;
    var currentX = 0,
        currentY = 0;

    var isOpen = false;
    var isMoving = false;
    var menuWidth = 0;
    var lastX = 0;
    var lastY = 0;
    var moveX = 0; // where in the screen is the menu currently
    var dragDirection = "";
    var maxOpacity = 0.75; // in case if you want to change this, don"t forget to change the value of the opacity in the css class .menu--visible .menu-background

    var init = function(element, start, move, end) {
        trackableElement = element;

        startTime = new Date().getTime(); // start time of the touch

        addEventListeners();
    };

    var addEventListeners = function() {
        trackableElement.addEventListener("touchstart", onTouchStart, false);
        trackableElement.addEventListener("touchmove", onTouchMove, false);
        trackableElement.addEventListener("touchend", onTouchEnd, false);

        overlay.addEventListener("click", closeMenuOverlay, false); // I want to be able to click the overlay and immediately close the menu (in the space between the actual menu and the page behind it)
        burger.addEventListener("click", clickOpenMenu, false); // I want to be able to click the burger and immediately open the menu
        // sidelink.addEventListener("click", closeMenuLink, false); // Side Navigation search link click
    };

	function removeHash() {
		history.replaceState('', '', ' ');
	}

    function onTouchStart(evt) {
        startTime = new Date().getTime();
        startX = evt.touches[0].pageX;
        startY = evt.touches[0].pageY;

        touchingElement = true;

        touchStart(startX, startY)
    }

    function onTouchMove(evt) {
        if (!touchingElement)
            return;

        currentX = evt.touches[0].pageX;
        currentY = evt.touches[0].pageY;
        const translateX = currentX - startX; // distance moved in the x axis
        const translateY = currentY - startY; // distance moved in the y axis

        touchMove(evt, currentX, currentY, translateX, translateY)
    }

    function onTouchEnd(evt) {
        if (!touchingElement)
            return;

        touchingElement = false;
        const translateX = currentX - startX; // distance moved in the x axis
        const translateY = currentY - startY; // distance moved in the y axis

        const timeTaken = (new Date().getTime() - startTime);

        touchEnd(currentX, currentY, translateX, translateY, timeTaken)
    }


    function touchStart(startX, startY) {
        // console.log("touchStart triggered");
        var menuOpen = document.querySelector(".nav-side-menu.menu--visible");

        if (menuOpen !== null) {
            isOpen = true;
        } else {
            isOpen = false;
        }

        menu.classList.add("no-transition");
        appMenu.classList.add("no-transition");

        isMoving = true;
        menuWidth = document.querySelector(".app-menu").offsetWidth;
        lastX = startX;
        lastY = startY;

        if (isOpen) {
            moveX = 0;
        } else {
            moveX = -menuWidth;
        }

        dragDirection = "";
        menu.classList.add("menu--background-visible");
    }

    function touchMove(evt, currentX, currentY, translateX, translateY) {
        if (!dragDirection) {
            if (Math.abs(translateX) >= Math.abs(translateY)) {
                dragDirection = "horizontal";
            } else {
                dragDirection = "vertical";
            }

            requestAnimationFrame(updateUi); // this is what effectively does the animation (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧
        }
        if (dragDirection === "vertical") {
            lastX = currentX;
            lastY = currentY;
        } else {
            evt.preventDefault();

            if (moveX + (currentX - lastX) < 0 && moveX + (currentX - lastX) > -menuWidth) {
                moveX = moveX + (currentX - lastX);
            }

            lastX = currentX;
            lastY = currentY;

            overlay.classList.add("no-transition");

            var percentageBeforeDif = (Math.abs(moveX) * 100) / menuWidth;
            var percentage = 100 - percentageBeforeDif;

            var newOpacity = (((maxOpacity) * percentage) / 100);

            if (overlay.style.opacity !== newOpacity.toFixed(2) && newOpacity.toFixed(1) % 1 !== 0) {
                overlay.style.opacity = newOpacity.toFixed(2);
            }
        }
    }

    function touchEnd(currentX, currentY, translateX, translateY, timeTaken) {
        isMoving = false;
        var velocity = 0.3;

        if (currentX === 0 && currentY === 0) { //Once you let go
            if (isOpen) {
                appMenu.classList.remove("no-transition");
                menu.classList.remove("no-transition");
            } else {
                menu.classList.remove("menu--background-visible");
                menu.classList.remove("no-transition");

            }
        } else { //If you are still touching
            if (isOpen) {
                if ((translateX < (-menuWidth) / 2) || (Math.abs(translateX) / timeTaken > velocity)) {
                    closeMenu(translateX);
                    isOpen = false;
                } else {
                    openMenu();
                    isOpen = true;
                }
            } else {
                if (translateX > menuWidth / 2 || (Math.abs(translateX) / timeTaken > velocity)) {
                    openMenu();
                    isOpen = true;
                } else {
                    closeMenu(translateX);
                    isOpen = false;
                }
            }
        }

        menu.classList.remove("no-transition");
        appMenu.classList.remove("no-transition");
        overlay.classList.remove("no-transition");

        menu.classList.add("menu--animatable");
    }

    function updateUi() {
        if (isMoving) {
            var element = document.querySelector(".app-menu-container");

            element.style.transform = "translateX(" + moveX + "px)";
            element.style.webkitTransform = "translateX(" + moveX + "px)";

            requestAnimationFrame(updateUi);
        }
    }

    function closeMenu(translateX) {
        function OnTransitionEnd() {
            overlay.style.opacity = "";
            overlay.style.display = "";

            if (!isOpen) {
                menu.classList.remove("menu--background-visible");
                menu.classList.remove("menu--animatable");
            }
            menu.removeEventListener("transitionend", OnTransitionEnd, false);

			removeHash();
        }

        if (translateX < 0 || !isOpen) {
            appMenu.style.transform = "";
            appMenu.style.webkitTransform = "";

            menu.classList.remove("menu--background-visible");
            menu.classList.remove("menu--visible");

            menu.addEventListener("transitionend", OnTransitionEnd, false);
        }
    }

    function openMenu() {
        appMenu.style.transform = "";
        appMenu.style.webkitTransform = "";

        menu.classList.add("menu--visible");
        menu.classList.add("menu--background-visible");

        overlay.style.opacity = "";

		location.hash = "openedMenu";
    }

    function closeMenuOverlay(translateX) {
        // console.log("closeMenuOverlay triggered");
        function OnTransitionEnd() {
            overlay.style.display = "";

            menu.classList.remove("menu--background-visible");
            menu.classList.remove("menu--animatable");

            menu.removeEventListener("transitionend", OnTransitionEnd);
        }

        if (isOpen === true) {
            menu.addEventListener("transitionend", OnTransitionEnd, false);
            menu.classList.remove("menu--visible");
			removeHash();
            isOpen = false
        }

    }

    function clickOpenMenu() {
        if (!isOpen === true) {
            isOpen = true;
            menu.classList.add("menu--background-visible");

            requestAnimationFrame(function() {
                setTimeout(function() {
                    menu.classList.add("menu--visible");
                    menu.classList.add("menu--animatable");
                }, 1)
            });

			location.hash = "openedMenu";
        }
    }

    function closeMenuLink(translateX) {
        closeMenuOverlay(translateX);
        isOpen = false;
    }

	window.onhashchange = function(translateX){
		if (location.hash.length > 0) {
			if (location.hash === "#openedMenu") {
				if (isOpen === false) {
					clickOpenMenu();
				}
			} else if (location.hash === "#mobileSearch" || location.hash === "#searchFiltered" || location.hash === "#categoryFiltered") {
			}
		} else {
			if (isOpen === true) {
				closeMenuOverlay(translateX);
			} else {
				$('#SearchFormMobile').removeClass('mobile-search-active');
			}

		}
	};

	var setDocWidth = $(window).width(), height = $(window).height();
	window.onresize = function(){
		if($(window).width() !== setDocWidth && $(window).height() !== height){
			closeMenuLink();
			isOpen = false;
			$('#SearchFormMobile').removeClass('mobile-search-active');
			removeHash();
		}
	};

    init(document.querySelector(".app-menu-container"));
});



$(document).on('click touch','#SearchTextDummy',function(){
	window.scrollTo(0, 0);
	document.body.scrollTop = 0;

	$('#SearchFormMobile').addClass('mobile-search-active');

	$('#SearchText').get(0).focus();
	$('#SearchText').focus(function () {
		window.scrollTo(0, 0);
		document.body.scrollTop = 0;
	});

	location.hash = "mobileSearch";

});

/*$(document).on('click touch','.sideMenuSearch',function(){
	$('#SearchFormMobile').addClass('mobile-search-active');
	$('#SearchText').focus();
	location.hash = "mobileSearch";
});*/

$(document).on('click touch','.sideMenuSignIn',function(){
	location.hash = "";
});

$(document).on('click touch','#SearchFormMobile .close',function(){
	$('#SearchFormMobile').removeClass('mobile-search-active');
	history.replaceState('', '', ' ');
});

