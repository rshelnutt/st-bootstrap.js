# Category/Product List Settings
---
!> To configure your site, modify the config file (installed [here](/setup?id=installation)) at this location: *`../DSN/[yourDSN]/Content/Includes/config.asp`*

---

## cfgCatBannerDisplay
- Type: `string`
- Options: `hero`, `herofull`,`[empty for default]`

Define the display style for the **boot-CategoryImageHeader.asp** block.

    cfgCatBannerDisplay = "true"

## cfgCatBannerHeight
- Type: `int`
- Default: `[none]`

Define the height (in pixels) of the **boot-CategoryImageHeader.asp** block - *do not include* the measurement unit. 

    cfgCatBannerHeight = "350"

## cfgAccordion
- Type: `Boolean`
- Default: `false`
- ToDo: Merge with cfgAccordionDisplay and change options value for empty - add `both` option.

Show accordion sidebar menu on commerce pages (global, fine-tuned by [cfgAccordionDisplay](#cfgAccordionDisplay)).

    cfgAccordion = "true"
    
## cfgAccordionDisplay
- Type: `String`
- Options: `category`, `product`,`[empty for both]`

[cfgAccordion](#cfgAccordion) must be set `true`. Display the accordion sidebar only on category pages, only on product views, or allow on both. 

    cfgAccordionDisplay = "product"
    
## cfgAccordionShowAll
- Type: `Boolean`
- Default: `false`

Defines if accordion should show all subcategories for each category. By default, accordion only shows subcategories of the currently selected category.

    cfgAccordionShowAll = "false"
    
## cfgBreadcrumb
- Type: `String`
- Options: `category`,`product`,`both`,`[empty for none]`

Display the breadcrumb bar only on category pages, only on product views, allow on both. No value disables the breadcrumb bar globally.

    cfgBreadcrumb = "both"
    
## cfgBreadcrumbPosition
- Type: `String`
- Options: `fullwidth`,`inline`
- Default: `inline`

Set the display of the breadcrumb bar in relation to the content. 

- `fullwidth` will stretch the breadcrumb across the entire width of the page, above any side navigation and content.
- `inline` keeps the breadcrumb bar bound to the width of just the content area.

    cfgBreadcrumbPosition = "fullwidth"
    
## cfgBreadcrumbHomeText
- Type: `String`
- Default: `Home`

Change the default text of the first navigation (homepage) link in the breadcrumb bar.

    cfgBreadcrumbHomeText = "Shop Products"
    
## cfgShowCatMSRP
- Type: `Boolean`
- Default: `false`

Show the MSRP (standard pricing) on products in Category view.

!> Product must have property type `MSRP` assigned. 

    cfgShowCatMSRP = "false"
    
## cfgCatMSRPLabel
- Type: `String`
- Default: `MSRP`

Change the label text for MSRP (standard pricing) on products in Category view.

    cfgCatMSRPLabel = "Regular Price"
    
## cfgProdShowID
- Type: `Boolean`
- Default: `false`

Set `true` to display the Product's __ID__ in Category view.

    cfgProdShowID = "false"
    
## cfgCatShowBrand
- Type: `Boolean`
- Default: `false`

Set `true` to display the Product's __brand__ in Category view.

    cfgCatShowBrand = "false"
    
## cfgCatShowPartLabel
- Type: `Boolean`
- Default: `false`

Set `true` to display the Product's __part number__ in Category view.

    cfgCatShowPartLabel = "false"
    
## cfgProdShortname
- Type: `Boolean`
- Default: `false`

Set to `true` to truncate the product names in Category view to a single line with ellipsis. 

    cfgProdShortname = "true"
    
## cfgDiscountPercent
- Type: `Boolean`
- Default: `false`

Show the percentage of discount on products with price breaks in Category view.

    cfgDiscountPercent = "false"
    
## cfgFilterDisplay
- Type: `String`
- Options: `inline`,`modal`,`sidebar`,`[empty for none]`

Set the display position and type of Filters for Category views.

- `inline` sets the filters above the content in a collapsible block.
- `modal` embeds the filters in a bootstrap-enabled popup modal, triggered by a button on the page.
- `sidebar` positions the filters as a sidebar to the left of the category content.

    cfgFilterDisplay = "sidebar"
    
## cfgQuickOrder
- Status: _WIP_
- Type: `Boolean`
- Default: `false`
- ToDo: Add option to assign quick order view page ID. Pending development of clean Quick Order for 723.

Enable the quick order toggle option for category views.

    cfgQuickOrder = "true"
