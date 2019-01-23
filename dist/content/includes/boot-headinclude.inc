<!--#include file="../../../../Content/ASP/boot-build.asp"-->
<!--#include file="../Includes/config.asp"-->
<!--#include file="../../../../Content/ASP/boot-calc.asp"-->
<%
dim YouMayAlsoLikePID
YouMayAlsoLikePID = 0
%>

<!-- #include file="boot-redirects.inc" -->

<!-- Meta -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Favicon -->
<link href='../dsn/<%=ChildDSN%>/Content/Images/favicon.png' rel='icon' type='image/png'>

<!-- FontAwesome -->
<!--<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">-->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.6.3/css/all.min.css">
<script src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.6.3/js/fontawesome.min.js"></script>

<!--Animations-->
<link rel="stylesheet" type="text/css" href="../vlInclude/animate.css">

<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.3.1.min.js" crossorigin="anonymous"></script>
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.0.1/jquery-migrate.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>

<!--Perfect Scroll-->
<link rel="stylesheet" href="../st-app/lib/perfect-scrollbar/perfect-scrollbar.css">

<!-- Bootstrap -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>

<!-- Date Picker -->
<link href="../vlInclude/gijgo-core.css" rel="stylesheet" type="text/css">
<script src="../vlInclude/gijgo-core.js"></script>
<link href="../vlInclude/datepicker.css" rel="stylesheet" type="text/css">
<script src="../vlInclude/datepicker.js"></script>

<!--Slick-->
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css"/>
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

<!--Core Components-->
<link rel="stylesheet" type="text/css" href="../st-app/modules/st-bootstrap/dist/styles.min.css">
<script src="../st-app/modules/st-bootstrap/dist/st-bundle.js"></script>
<script src="//unpkg.com/color-name-list@3.52.1/dist/colornames.umd.js"></script>

<!-- Configuration -->
<script>
	var stappConfig = {
	    'cfgVer'                  : '<%=cfgVer%>',
	    'cfgShopID'               : '<%=cfgShopID%>',
	    'cfgBread'                : '<%=cfgBread%>',
	    'cfgShopName'             : '<%=cfgShopName%>',
	    'cfgBrand'                : "<%=cfgBrand%>",
	    'cfgBrandImg'             : '<%=cfgBrandImg%>',
	    'cfgBrandPos'             : '<%=cfgBrandPos%>',
	    'cfgPubAccess'            : '<%=cfgPubAccess%>',
	    'cfgSidebar'              : '<%=cfgSidebar%>',
	    'cfgFeatured'             : '<%=cfgFeatured%>',
	    'cfgYMAL'                 : '<%=cfgYMAL%>',
	    'cfgMobileTopBarBg'       : "<%=cfgMobileTopBarBg%>",
	    'cfgMobileSideBarBg'      : "<%=cfgMobileSideBarBg%>",
	    'cfgMobileBgOverlay'      : '<%=cfgMobileBgOverlay%>',
	    'cfgMobileBgOverlayAlpha' : '<%=cfgMobileBgOverlayAlpha%>',
	    'cfgOpenDescDesktop'      : '<%=cfgOpenDescDesktop%>',
	    'cfgOpenDescMobile'       : '<%=cfgOpenDescMobile%>',
	    'cfgLogin'                : '<%=cfgLogin%>',
	    'cfgLoginModal'           : '<%=cfgLoginModal%>',
	    'cfgCatMSRPLabel'         : '<%=cfgCatMSRPLabel%>',
	    'cfgForgotPass'           : '<%=cfgForgotPass%>',
	    'cfgAllowRegister'        : '<%=cfgAllowRegister%>',
	    'cfgRegister'             : '<%=cfgRegister%>'
	};
</script>

<script>
    // Color Picker
    // function require(script) {
    //     $.ajax({
    //         url: script,
    //         dataType: "script",
    //         async: true,           // <-- This is the key
    //         success: function () {
    //             // all good...
    //         },
    //         error: function () {
    //             throw new Error("Could not load script " + script);
    //         }
    //     });
    // }
    // require("https://unpkg.com/color-name-list@3.52.1/dist/colornames.umd.js");

    function navOverlay(){
    	if (stappConfig.cfgMobileBgOverlay) {
    		$("<style>.nav-overlay::after { background-color: " + stappConfig.cfgMobileBgOverlay + "; opacity: " + stappConfig.cfgMobileBgOverlayAlpha + " }</style>" ).appendTo( "head" );
    	}
    }
    navOverlay();

</script>