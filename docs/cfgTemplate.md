# Template Settings
---
!> To configure your site, modify the config file (installed [here](/setup?id=installation)) at this location: *`../DSN/[yourDSN]/Content/Includes/config.asp`*

---

## cfgVer
- Type: `String`
- Default: `723`

Version of the application listed. Currently only compatible with 723, referenced for future scaling with 722.

    cfgVer = "723"


## cfgSvcWorker
- Type: `Boolean`
- Default: `true`

Activate service worker (st-svcworker.js) for site caching & Progressive Web App (PWA) setup.

    cfgSvcWorker = "true"

## cfgShopID
- Type: `String`
- Default: `1`

Shop ID for the current store. Use separate config.asp files when multiple shops are set up on a DSN and identify their Shop ID here.

    cfgShopID = "1"

## cfgShopName
- Type: `String`

Name of the shop. This will be used on select pages and displays.

    cfgShopName = "My Awesome Store"

## cfgIconFolder
- Type: `String`
- Default Directory: `wwwyourdsn/Content/Images/Icons`

Specify the directory containing your site's favicons. This path is relative to your Content folder as the root directory, ___not___ your DSN.

    cfgIconFolder = "images/store2/favicons"

## cfgThemeColor
- Type: `String`

Theme color to be used for the PWA options and mobile browser color theme (Chrome, etc.). 

*Accepts #hex, rgb(), and plain-name values.*
    
    cfgThemeColor = "#cc0000"
    cfgThemeColor = "rgb(255,0,0)"
    cfgThemeColor = "red"
