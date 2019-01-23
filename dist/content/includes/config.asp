<%
' Template Settings
'---------------------------------------
    cfgVer         = "723" 'int
    cfgShopID      = "1" 'int
    cfgHomeCatID   = "71" 'int
    cfgBread       = "true" 'boolean
    cfgShopName    = "On Tour Golf" 'string
    cfgBrand       = "otg-logo-original.svg" 'string [imagename.png, jpg, gif, svg]
    cfgBrandHeight  = "103px" 'int + px, %, em, rem
    cfgBrandPos    = "left" 'string [left right center menuLeft menuRight menuCenter none]
    cfgSidebar     = "none" 'string [left right none]
    cfgFeatured    = "2" 'int
    cfgYMAL        = "false" 'boolean

' Site & Registration Settings
'---------------------------------------
    cfgPubAccess            = "true" 'boolean
    cfgPubBrowse            = "true" 'boolean
    cfgPubCheckout          = "false" 'boolean
    cfgAllowRegister        = "true" 'boolean
    cfgRequireActivation    = "false" 'boolean
    cfgRegisteredGroup      = "Wholesale" 'string
    cfgRegisteredPersonType = "Wholesale" 'string

' Contact Settings
'---------------------------------------
    cfgContactEmail = "" 'string
    cfgContactPhone = "561.379.9367" 'string

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
    cfgSubBar        = "false" 'boolean
    cfgMenuCustom    = "false" 'boolean
    cfgNavCenterLink = "true" 'boolean
    cfgSlideMenu     = "true" 'boolean

' Top Bar Settings
'---------------------------------------
    cfgMobileTopBarBg       = "ball-hole-bg.jpg" 'string [imagename.png, jpg, gif, svg]
    cfgMobileSideBarBg      = "beach-golf.jpg" 'string [imagename.png, jpg, gif, svg]
    cfgMobileBgOverlay      = "#000" 'string [ColorName or #hex, empty for none]
    cfgMobileBgOverlayAlpha = "0.3" 'int [1 for 100%, 0.4 for 40%, etc]

' Page Settings
'---------------------------------------
    cfgHomepage       = "70" 'string
    cfgSearch         = "85" 'string
    cfgLogin          = "78" 'string
    cfgLoginModal     = "78" 'string
    cfgRegister       = "76" 'string
    cfgAccount        = "74" 'string
    cfgCart           = "75" 'string
    cfgContact        = "80" 'string
    cfgHistory        = "83" 'string
    cfgSavedCarts     = "" 'string
    cfgOffers         = "" 'string
    cfgRecentlyViewed = "" 'string
    cfgStoreFinder    = "" 'string
    cfgForgotPass     = "82" 'string
    cfgFAQ            = "" 'string
    cfgTerms          = "" 'string
    cfgPrivacy        = "" 'string

' Category/Product List View
'---------------------------------------
    cfgAccordion         = "false" 'boolean
    cfgShowCatMSRP       = "true" 'boolean
    cfgCatMSRPLabel      = "MSRP" 'string
    cfgProdShowID        = "false" 'boolean
    cfgProdShowBrand     = "false" 'boolean
    cfgProdShowProdLabel = "false" 'boolean
    cfgProdShortname     = "true" 'boolean
    cfgDiscountPercent   = "false" 'boolean
    cfgOpenDescDesktop   = "true" 'boolean
    cfgOpenDescMobile    = "false" 'boolean

' Product View
'---------------------------------------
    cfgShowProdMSRP             = cfgShowCatMSRP 'variable or boolean
    cfgProdMSRPLabel            = cfgCatMSRPLabel 'variable or string

    cfgContBtnLeaveOnPage       = "true" 'boolean

    cfgRestrictedMessageShow    = "true" 'Enable show restricted login message (boolean)
    cfgRestrictedMessageGroup   = "1" 'Show restricted login message to this group (array int,int,int)
    cfgRestrictedMessageName    = "Wholesale" 'name of the exclusive access group ie. Wholesale

    cfgRestrictPricebreakView   = "true" 'Enable group restrictive view of price breaks (boolean)
    cfgHidePricebreakFromGroups = "5" 'Show pricebreak to all groups except... (array int,int,int)

    cfgQtyInputStyle            = "block" 'empty(default), circle, block

' Checkout Settings
'---------------------------------------
    cfgShowShippingEstimator = "false"
%>