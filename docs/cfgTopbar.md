# Top Bar Settings
----------------
!> To configure your site, modify the config file (installed [here](/setup?id=installation)) at this location: *`../DSN/[yourDSN]/Content/Includes/config.asp`*

---

## cfgMobileTopBarBg
- Type: `String`

Insert the filename of the image to be used as the background for the mobile header (behind the logo). Image must be inside of your `../dsn/wwwdsncom/content/images` folder.

*(Accepts .png, .jpg, .gif formats)*

    cfgMobileTopBarBg = "mobile-header-bg.jpg"
    
## cfgMobileSideBarBg
- Type: `String`

Insert the filename of the image to be used as the background for the mobile slide-out menu (behind the logo). Image must be inside of your `../dsn/wwwdsncom/content/images` folder.

*(Accepts .png, .jpg, .gif formats)*

    cfgMobileSideBarBg = "slide-menu-bg.jpg"
    
## cfgMobileBgOverlay
- Type: `String`

Set the background overlay color for [cfgMobileSideBarBg](#cfgMobileSideBarBg). Opacity is set by [cfgMobileBgOverlayAlpha](#cfgMobileBgOverlayAlpha).

*Accepts #hex, rgb(), and plain-name values.*

    cfgMobileBgOverlay = "#e6e6e6"
    cfgMobileBgOverlay = "rgb(25,25,25)"
    cfgMobileBgOverlay = "gray"
    
## cfgMobileBgOverlayAlpha
- Type: `Integer`

Set the background overlay opacity level for [cfgMobileSideBarBg](#cfgMobileSideBarBg). Color is set by [cfgMobileBgOverlay](#cfgMobileBgOverlay).

*(1 for 100%, 0.4 for 40%, etc)*

    cfgMobileBgOverlayAlpha = "0.25"
