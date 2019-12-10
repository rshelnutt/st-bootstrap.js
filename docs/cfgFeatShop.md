# Featured Shop Category Settings
------------------------
!> To configure your site, modify the config file (installed [here](/setup?id=installation)) at this location: *`../DSN/[yourDSN]/Content/Includes/config.asp`*

---

## cfgFeaturedShopCat
- Type: `Integer`

Define the featured shop's category ID # to list it's subcategories. 

    cfgFeaturedShopCat     = "4"
    
## cfgFeaturedShopHideCat
- Type: `Integer`

Enter the ID(s) of any subcategory in the [cfgFeaturedShopCat](#cfgFeaturedShopCat) category you wish to hide from the list. Use comma separated values for multiple entries. 

    cfgFeaturedShopHideCat = "6,8,12"
    
## cfgFeaturedShopTitle
- Status: _Beta_
- Type: `String`

Set the heading title for the Featured Shop section of your page.

    cfgFeaturedShopTitle = "Featured Categories"
    
## cfgFeaturedShopStyle
- Type: `String`
- Options: `strike`,`[empty for default]`

Set the header style to be either standard, or have a horizontal strike-through effect (does not strike through the text).

    cfgFeaturedShopStyle = "strike"
    
## cfgFeaturedShopCount
!> This feature is not yet available.

- Status: _WIP_
- Type: `Integer`

Set the maximum number of categories that will appear per row for the Featured Shop Category.

    cfgFeaturedShopCount = "4"
