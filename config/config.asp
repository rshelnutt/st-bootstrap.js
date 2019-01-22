<%

'TODO: Move DIMs to core file and import on headinclude.inc before this file - Calcs to new file and below

'---------------------------------------
' Template Settings
'---------------------------------------
    dim cfgVer, cfgShopID, cfgHomeCatID, cfgShopName, cfgBread
    dim cfgBrand, cfgBrandWidth, cfgBrandImg, cfgBrandPos, cfgSidebar, cfgFeatured, cfgYMAL

    cfgVer         = "723" 'int
    cfgShopID      = "1" 'int
    cfgHomeCatID   = "71" 'int
    cfgBread       = "true" 'boolean
    cfgShopName    = "On Tour Golf" 'string
    cfgBrand       = "otg-logo-original.svg" 'string [imagename.png, jpg, gif, svg]
    cfgBrandWidth  = "135px" 'int + px, %, em, rem
    cfgBrandPos    = "left" 'string [left right center menuLeft menuRight menuCenter none]
    cfgSidebar     = "left" 'string [left right none]
    cfgFeatured    = "2" 'int
    cfgYMAL        = "false" 'boolean

'---------------------------------------
' Site & Registration Settings
'---------------------------------------
    dim cfgPubAccess, cfgPubBrowse, cfgPubCheckout, cfgAllowRegister, cfgRequireActivation, cfgRegisteredGroup, cfgRegisteredPersonType

    cfgPubAccess            = "true" 'boolean
    cfgPubBrowse            = "true" 'boolean
    cfgPubCheckout          = "false" 'boolean
    cfgAllowRegister        = "true" 'boolean
    cfgRequireActivation    = "false" 'boolean
    cfgRegisteredGroup      = "Wholesale" 'string
    cfgRegisteredPersonType = "Wholesale" 'string

'---------------------------------------
' Contact Settings
'---------------------------------------
    dim cfgContactEmail, cfgContactPhone

    cfgContactEmail = "" 'string
    cfgContactPhone = "561.379.9367" 'string

'---------------------------------------
' Social Media Settings
'---------------------------------------
    dim cfgFb, cfgInsta, cfgTwitter, cfgYouTube, cfgPinterest, cfgLinkedIn, cfgSocialMail

    cfgFb         = ""
    cfgInsta      = ""
    cfgTwitter    = ""
    cfgYouTube    = ""
    cfgPinterest  = ""
    cfgLinkedIn   = ""
    cfgSocialMail = ""

'---------------------------------------
' Menu Settings
'---------------------------------------
    dim cfgSubBar, cfgMenuCustom, cfgNavCenterLink, cfgSlideMenu

    cfgSubBar        = "false" 'boolean
    cfgMenuCustom    = "false" 'boolean
    cfgNavCenterLink = "true" 'boolean
    cfgSlideMenu     = "true" 'boolean

'---------------------------------------
' Top Bar Settings
'---------------------------------------

    dim cfgMobileTopBarBg, cfgMobileSideBarBg, cfgMobileBgOverlay, cfgMobileBgOverlayAlpha

    cfgMobileTopBarBg       = "ball-hole-bg.jpg" 'string [imagename.png, jpg, gif, svg]
    cfgMobileSideBarBg      = "beach-golf.jpg" 'string [imagename.png, jpg, gif, svg]
    cfgMobileBgOverlay      = "#000" 'string [ColorName or #hex, empty for none]
    cfgMobileBgOverlayAlpha = "0.3" 'int [1 for 100%, 0.4 for 40%, etc]

'---------------------------------------
' Page Settings
'---------------------------------------
    dim cfgHomepage, cfgSearch, cfgLogin, cfgLoginModal, cfgRegister, cfgAccount, cfgCart, cfgContact, cfgHistory
    dim cfgSavedCarts, cfgOffers, cfgRecentlyViewed, cfgStoreFinder, cfgForgotPass, cfgFAQ, cfgTerms, cfgPrivacy

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

'---------------------------------------
' Category/Product List View
'---------------------------------------

    '---dim cfgCatParent, cfgCatChild
    '---cfgCatParent = "true"  '[True]Parent categories only [False]Child categories/Products
    '---cfgCatChild  = "false" '[True]Child category/No products [False]Products Only/Has no child categories

    dim cfgAccordion, cfgShowCatMSRP, cfgCatMSRPLabel, cfgProdShowID, cfgProdShowBrand, cfgProdShowProdLabel
    dim cfgProdShortname, cfgDiscountPercent, cfgOpenDescDesktop, cfgOpenDescMobile

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

'---------------------------------------
' Product View
'---------------------------------------
    dim cfgShowProdMSRP,cfgProdMSRPLabel,cfgContBtnLeaveOnPage
    dim cfgRestrictedMessageShow, cfgRestrictedMessageGroup, cfgRestrictedMessageName
    dim cfgRestrictPricebreakView, cfgHidePricebreakFromGroups
    dim cfgQtyInputStyle

    cfgShowProdMSRP             = cfgShowCatMSRP 'variable or boolean
    cfgProdMSRPLabel            = cfgCatMSRPLabel 'variable or string

    cfgContBtnLeaveOnPage       = "true" 'boolean

    cfgRestrictedMessageShow    = "true" 'Enable show restricted login message (boolean)
    cfgRestrictedMessageGroup   = "1" 'Show restricted login message to this group (array int,int,int)
    cfgRestrictedMessageName    = "Wholesale" 'name of the exclusive access group ie. Wholesale

    cfgRestrictPricebreakView   = "true" 'Enable group restrictive view of price breaks (boolean)
    cfgHidePricebreakFromGroups = "5" 'Show pricebreak to all groups except... (array int,int,int)

    cfgQtyInputStyle            = "block" 'empty(default), circle, block

'---------------------------------------
' Checkout Settings
'---------------------------------------
    dim cfgShowShippingEstimator

    cfgShowShippingEstimator = "false"









'---------------------------------------
' Calcuators - DO NOT MODIFY
'---------------------------------------
    Function ternary(bClause, sTrue, sFalse)
        If CBool(bClause) Then
            ternary = sTrue
        Else
            ternary = sFalse
        End If
    End Function

    Function InArray(element, arr)
        Dim i, x
        InArray = False

        If IsArray(arr) = True Then
            For i = 0 To Ubound(arr)
                If Trim(arr(i)) = element Then
                    InArray = True
                    Exit Function
                End If
            Next
        End If
    End Function

    Function CheckViewPermissions(status, val, arr, permission, default)
        dim buildArray
        buildArray = ""

        if arr <> "" then
            buildArray = Split(arr,",")
        end if

        if lcase(status) = "true" then
            if InArray(val,buildArray) = True then
                CheckViewPermissions = permission
            else
                CheckViewPermissions = default
            end if
        else
            CheckViewPermissions = default
        end if
    End Function

    if cfgRestrictedMessageName = "" then
        cfgRestrictedMessageName = "Wholesale"
    else
        cfgRestrictedMessageName = UCase(Left(cfgRestrictedMessageName,1)) & LCase(Right(cfgRestrictedMessageName, Len(cfgRestrictedMessageName) - 1))
    end if

    cfgProdShortname = ternary(cfgProdShortname = "true"," shortName","")

    'If cfgProdShortname = "true" Then
        'cfgProdShortname = " shortName"
    'Else
        'cfgProdShortname = ""
    'End If

    If InStr(cfgBrand,".png") > 0 Or InStr(cfgBrand,".jpg") > 0 Or InStr(cfgBrand,".jpeg") > 0 Or InStr(cfgBrand,".gif") > 0 Or InStr(cfgBrand,".svg") > 0 Then
       cfgBrand = "<a href='/'><img src='"& "../DSN/" & ChildDSN & "/Content/Images/" & cfgBrand & "' style='width:" & cfgBrandWidth & "; max-width: 200px;'></a>"
       cfgBrandImg = "1"
    End If

    If InStr(cfgMobileTopBarBg,".png") > 0 Or InStr(cfgMobileTopBarBg,".jpg") > 0 Or InStr(cfgMobileTopBarBg,".jpeg") > 0 Or InStr(cfgMobileTopBarBg,".gif") > 0 Or InStr(cfgMobileTopBarBg,".svg") > 0 Then
       cfgMobileTopBarBg = "../DSN/" & ChildDSN & "/Content/Images/" & cfgMobileTopBarBg
    End If

    If InStr(cfgMobileSideBarBg,".png") > 0 Or InStr(cfgMobileSideBarBg,".jpg") > 0 Or InStr(cfgMobileSideBarBg,".jpeg") > 0 Or InStr(cfgMobileSideBarBg,".gif") > 0 Or InStr(cfgMobileSideBarBg,".svg") > 0 Then
       cfgMobileSideBarBg = "../DSN/" & ChildDSN & "/Content/Images/" & cfgMobileSideBarBg
    End If

    if not cfgNavCenterLink = "true" Then
        if lcase(cfgBrandPos) = "menuleft" Or lcase(cfgBrandPos) = "menuright" Or lcase(cfgBrandPos) = "menucenter"  Then
            cfgNavCenterLink = "true"
        end if
    end if

    if cfgFeatured = "" then
        cfgFeatured = "1"
    end if

%>