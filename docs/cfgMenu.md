# Main Menu Settings
---
!> To configure your site, modify the config file (installed [here](/setup?id=installation)) at this location: *`../DSN/[yourDSN]/Content/Includes/config.asp`*

---


## cfgBrand
- Type: `String`

Insert the filename of the logo to be used on your site. Image must be inside of your `../dsn/wwwdsncom/content/images` folder. If no filename is supplied, the [cfgShopName](#cfgShopName) will be used instead.

*(Accepts .png, .jpg, .gif, .svg formats)*

    cfgBrand = "main-logo.svg"
    
## cfgBrandHeight
- Type: `String`

Set the maximum height of your logo's appearance in the menu.

*(Accepts px, %, em, rem entries)*

    cfgBrandHeight = "65px" 
    
## cfgBrandPos
- Status: _WIP_
- Type: `String`
- Options: `left`,`right`,`center`,`menuLeft`,`menuRight`,`menuCenter`,`[empty for no logo]`

Set the position of your logo in the main menu.

__[NOTE]__ This option has been debugged repeatedly and may be functionally rebuilt in the near future. It's very possible you may need to make desired adjustments to the display of the logo manually.

    cfgBrandPos = "menuCenter"
    
## cfgCartIcon
- Type: `String`
- Default: `<ion-icon name='cart'></ion-icon>`

Insert the HTML to use for the Cart icon in the main menu.

    cfgCartIcon = "<i class="fas fa-shopping-cart"></i>"
    
## cfgMenuPos
- Status: _ALPHA TESTING_
- Type: `String`
- Options: `top`,`left`,`right`

Set the position of the main menu to appear at the top, left or right of the screen.

    cfgMenuPos = "top"
    
## cfgMenuPerfectCenter
- Type: `Boolean`
- Default: `false`

Force all top-level main navigation links to be the exact same width, regardless of inner text length.

    cfgMenuPerfectCenter = "true"
    
## cfgMenuCustom
- Type: `Boolean`
- Default: `false`

Replace the default, commerce driven menu links with a custom menu list. Unordered list of links must be present in a content block directly after _bootstrap-header.asp_.  

    cfgMenuCustom = "false"
    
## cfgMenuFullwidth
- Type: `Mixed`
- Options: `false`,`true`,`contain`

Set Main Menu fullwidth settings.
- `false` - Menu background and links are bound within the 1140px width maximum.
- `true` - Menu background and links will reach across the entire width of the page.
- `contain` - Menu background will reach across the entire width of the page. Links are bound within the 1140px width maximum.

    cfgMenuFullwidth = "contain"
    
## cfgDropMenuWidth
- Type: `String`
- Default: `Auto`
- Options: `center`,`spread`,`[empty for default]`

Set the width and position of the drop menu in relation to the corresponding parent's link width in the main menu.

    cfgDropMenuWidth = "spread"
    
## cfgNavCenterLink
- Type: `Boolean`
- Default: `false`

Automatically center the text of main menu links and give them equal widths. 

?> __[Note]__ If [cfgBrandPos](#cfgBrandPos) is set to `menuLeft`, `menuRight`, or `menuCenter` this option is forcibly set to `true`.

    cfgNavCenterLink = "true"
    

## cfgMobileMenuType
- Type: `String`
- Default: Accordion drop-down menu
- Options: `inline`,`sidebar`,`both`,`[empty for default]`

Set the display type of the mobile navigation bar.

    cfgMobileMenuType = "both"
    

## cfgMobileMenuText
- Type: `String`
- Default: `Shop`

Change the default text of the main menu on mobile devices. Applicable only when [cfgMobileMenuType](#cfgMobileMenuType) is set to default `(empty)`. 

    cfgMobileMenuText = "View Our Products"
    
## cfgSlideMenu
- Type: `Boolean`
- Default: `true`

Specify whether or not the slide-out menu should be enabled on mobile devices.

    cfgSlideMenu = "true"
    
## cfgMobileTopActive
- Type: `Boolean`
- Default: `true`

Specify whether or not the top-level accordion links in mobile menus are clickable.

    cfgMobileTopActive = "true"
