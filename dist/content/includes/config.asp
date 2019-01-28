<%
' Template Settings
'---------------------------------------
    cfgVer         = "723" 'int
    cfgShopID      = "1" 'int
    cfgHomeCatID   = "" 'int
    cfgBread       = "" 'boolean
    cfgShopName    = "" 'string
    cfgBrand       = "" 'string [imagename.png, jpg, gif, svg]
    cfgBrandHeight = "" 'int + px, %, em, rem
    cfgBrandPos    = "" 'string [left right center menuLeft menuRight menuCenter none]
    cfgSidebar     = "" 'string [left right none]
    cfgFeatured    = "" 'int [Featured products Category #]
    cfgYMAL        = "" 'boolean

' Site & Registration Settings
'---------------------------------------
    cfgPubAccess            = "" 'boolean
    cfgPubBrowse            = "" 'boolean
    cfgPubCheckout          = "" 'boolean
    cfgAllowRegister        = "" 'boolean
    cfgRequireActivation    = "" 'boolean
    cfgRegisteredGroup      = "" 'string
    cfgRegisteredPersonType = "User" 'string

' Contact Settings
'---------------------------------------
    cfgContactEmail = "" 'string
    cfgContactPhone = "" 'string

' Social Media Settings
'---------------------------------------
    cfgFb         = ""
    cfgInsta      = ""
    cfgTwitter    = ""
    cfgYouTube    = ""
    cfgPinterest  = ""
    cfgLinkedIn   = ""
    cfgSocialMail = ""

' Menu Settings
'---------------------------------------
    cfgSubBar        = "" 'boolean
    cfgMenuCustom    = "" 'boolean
    cfgNavCenterLink = "" 'boolean
    cfgSlideMenu     = "" 'boolean

' Top Bar Settings
'---------------------------------------
    cfgMobileTopBarBg       = "" 'string [imagename.png, jpg, gif, svg]
    cfgMobileSideBarBg      = "" 'string [imagename.png, jpg, gif, svg]
    cfgMobileBgOverlay      = "" 'string [ColorName or #hex, empty for none]
    cfgMobileBgOverlayAlpha = "" 'int [1 for 100%, 0.4 for 40%, etc]

' Page Settings
'---------------------------------------
    cfgHomepage       = "" 'string
    cfgSearch         = "" 'string
    cfgLogin          = "" 'string
    cfgLoginModal     = "" 'string
    cfgRegister       = "" 'string
    cfgAccount        = "" 'string
    cfgCart           = "" 'string
    cfgContact        = "" 'string
    cfgHistory        = "" 'string
    cfgSavedCarts     = "" 'string
    cfgOffers         = "" 'string
    cfgRecentlyViewed = "" 'string
    cfgStoreFinder    = "" 'string
    cfgForgotPass     = "" 'string
    cfgFAQ            = "" 'string
    cfgTerms          = "" 'string
    cfgPrivacy        = "" 'string

' Category/Product List View
'---------------------------------------
    cfgAccordion         = "" 'boolean
    cfgShowCatMSRP       = "" 'boolean
    cfgCatMSRPLabel      = "" 'string
    cfgProdShowID        = "" 'boolean
    cfgProdShowBrand     = "" 'boolean
    cfgProdShowProdLabel = "" 'boolean
    cfgProdShortname     = "" 'boolean
    cfgDiscountPercent   = "" 'boolean
    cfgOpenDescDesktop   = "" 'boolean
    cfgOpenDescMobile    = "" 'boolean

' Product View
'---------------------------------------
    cfgShowProdMSRP             = cfgShowCatMSRP 'variable or "boolean"
    cfgProdMSRPLabel            = cfgCatMSRPLabel 'variable or "string"

    cfgContBtnLeaveOnPage       = "" 'boolean

    cfgRestrictedMessageShow    = "" 'Show restricted login message (boolean)
    cfgRestrictedMessageGroup   = "" 'Show restricted login message to this group (array int,int,int)
    cfgRestrictedMessageName    = "" 'Name of the exclusive access group (ie. Wholesale)

    cfgRestrictPricebreakView   = "" 'Restrict view of price breaks (boolean)
    cfgHidePricebreakFromGroups = "" 'Show pricebreak to all groups except... (array int,int,int)

    cfgQtyInputStyle            = "" 'empty (default), circle, block

' Checkout Settings
'---------------------------------------
    cfgShowShippingEstimator = "" 'boolean
%>