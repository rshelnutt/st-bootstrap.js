<%
' Template Settings
'---------------------------------------
cfgVer = "723"
cfgSvcWorker = "true"
cfgShopID = "1"
cfgShopName = "Template"
cfgThemeColor = "#253992"

' Integration Settings
'---------------------------------------
cfgGoogleUA = "UA-000000000-1"
cfgGoogleTransCompletePage = ""
cfgFbPixelID = ""

' Site & Registration Settings
'---------------------------------------
cfgAdminGroup = ""
cfgPubAccess = "true"
cfgPubBrowse = "true"
cfgPubCheckout = "true"
cfgAllowRegister = "true"
cfgModalRegisterLinkText = "" 'default is Register
cfgRegisterPass = "false"
cfgRegisterPassSet = ""
cfgRequireActivation = "false"
cfgRegisteredGroup = "Distributor"
cfgRegisteredPersonType = "Member"

' Form Settings
'---------------------------------------
cfgCFMAnimatedLabels = "false"

' Social Media Settings
'---------------------------------------
cfgSocialSubBarPos = ""
cfgFb = "#"
cfgInsta = "#"
cfgTwitter = "#"
cfgYouTube = "#"
cfgPinterest = "#"
cfgSnapchat = "#"
cfgLinkedIn = "#"
cfgSocialMail = ""

' SubBar Settings
'---------------------------------------
cfgAnnouncementBar = "Top Bar Info"
cfgSubBar = "true"
cfgSubBarFullwidth = "false"
cfgCustomSubBarText  = "" 'string
cfgContactSubBarShow = "" 'string [email, phone, both, empty for default]
cfgContactEmail = ""
cfgContactPhone = ""

' Menu Settings
'---------------------------------------
cfgBrand = "" 'string [imagename.png, jpg, gif, svg]
cfgBrandHeight = "90px" 'int + px, %, em, rem
cfgBrandPos = "menuLeft" 'string [left right center menuLeft menuRight menuCenter none]
cfgCartIcon = ""
cfgMenuPos = "top" 'string [top left right none]
cfgMenuPerfectCenter = "" 'boolean [used with menucenter in cfgBrandPos]
cfgMenuCustom = "true"
cfgMenuFullwidth = "false" 'mixed [false,true,contain]
cfgDropMenuWidth = "" 'string [center, spread (used with cfgNavCenterLink true), empty for default]
cfgNavCenterLink = "false"
cfgMobileMenuText = ""
cfgSlideMenu = "true"
cfgMobileTopActive = "false"

' Top Bar Settings
'---------------------------------------
cfgMobileTopBarBg = "" 'string [imagename.png, jpg, gif, svg]
cfgMobileSideBarBg = "" 'string [imagename.png, jpg, gif, svg]
cfgMobileBgOverlay = "" 'string [hex #000000 or text color name]
cfgMobileBgOverlayAlpha = "" 'int [1 for 100%, 0.4 for 40%, etc]

' Page Settings
'---------------------------------------
cfgHomepage = ""
cfgCategories = ""
cfgSearch = ""
cfgLogin = ""
cfgLoginModal = ""
cfgRegister = ""
cfgAccount = ""
cfgCart = ""
cfgContact = ""
cfgHistory = ""
cfgSavedCarts = ""
cfgOffers = ""
cfgRecentlyViewed = ""
cfgStoreFinder = ""
cfgStoreManager = ""
cfgForgotPass = ""
cfgFAQ = ""
cfgTerms = ""
cfgShippingReturn = ""
cfgPrivacy = ""

' Featured Shop Settings
'---------------------------------------
cfgFeaturedShopCat     = "" 'int [Featured Shop Category Page #]
cfgFeaturedShopHideCat = "1" 'array [Featured Shop Hide Cat Array - separate with #,#,#]
cfgFeaturedShopTitle   = "Featured Shop"
cfgFeaturedShopStyle   = "" 'string [strike, empty for none]
cfgFeaturedShopCount   = "4"

' Featured Category Settings
'---------------------------------------
cfgFeaturedCategory = "1" 'int [Featured Products Category #]
cfgFeaturedTitle    = "Featured Products"
cfgFeaturedStyle    = "" 'string [strike, empty for none]
cfgFeaturedCount    = "4"

' Category/Product List View
'---------------------------------------
cfgCatBannerDisplay = "" 'string [hero, heroFull, (empty for default)]
cfgCatBannerHeight = "" 'int
cfgAccordion = "true"
cfgAccordionDisplay = "category" 'string [category, product, both]
cfgAccordionShowAll = "true" 'boolean (show all categories)
cfgBreadcrumb = "both" 'string [category, product, both, (empty for none)]
cfgBreadcrumbPosition = "fullwidth" '[fullwidth, inline (default)]
cfgBreadcrumbHomeText = "" 'enter the name for the Breadcrumb top-level home link, default is "Home"
cfgShowCatMSRP = "false"
cfgCatMSRPLabel = ""
cfgProdShowID = "true"
cfgCatShowBrand = "true"
cfgCatShowPartLabel = "true"
cfgProdShortname = "false"
cfgDiscountPercent = ""
cfgFilterDisplay = "modal" 'string [inline, modal, (empty for none)]

' Product View
'---------------------------------------
cfgOpenDescDesktop = "true"
cfgOpenDescMobile = "true"

cfgShowProdMSRP = "false" 'variable or "boolean"
cfgProdMSRPLabel = "" 'variable or "string"

cfgContBtnLeaveOnPage = "true"
cfgProductReviews = "false"
cfgZoomType = "interactive" 'string [hover, interactive, (empty for default)]

cfgRestrictedMessageShow = "false" 'Show restricted login message (boolean)
cfgRestrictedMessageGroup = "" 'Show restricted login message to this group (array int,int,int)
cfgRestrictedMessageName = "" 'Name of the exclusive access group (ie. Wholesale)

cfgRestrictPricebreakView = "" 'Restrict view of price breaks (boolean)
cfgHidePricebreakFromGroups = "" 'Show pricebreak to all groups except... (array int,int,int)

cfgQtyInputStyle = "block" 'empty (default), circle, block

cfgRelatedTitle = ""

' Checkout Settings
'---------------------------------------
cfgShowShippingEstimator = "false"
cfgCheckoutCountryDefault = "US" 'string - Two character country code

' Footer Settings
'---------------------------------------
cfgFooterLinksPos = "top"
cfgSocialFooterPos = "bottom"
cfgFooterCopy = "All Rights Reserved"
cfgFooterDelimiter = "&bull;"

%>