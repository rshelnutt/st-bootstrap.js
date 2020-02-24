# Integration Settings
----------------------------------
!> To configure your site, modify the config file (installed [here](/setup?id=installation)) at this location: *`../DSN/[yourDSN]/Content/Includes/config.asp`*

---


## cfgGoogleUA
- Type: `String`

Google Analytics property number. If this exists, Google Analytics tracking is automatically activated on all pages for the property of the Tracking Code supplied.

    cfgGoogleUA = "UA-000000000-1"
    
## cfgGoogleAW
- Type: `String`

Google Ad Words number. If this exists, Google Ad Words is automatically activated on all pages for the Tracking Code supplied.

    cfgGoogleAW = "AW-123456789"
    
## cfgGoogleGTM
- Type: `String`

Google Tag Manager number. If this exists, Google Tag Manager is automatically activated on all pages for the Tracking Code supplied.

    cfgGoogleGTM = "GTM-ABC123Z"
    
## cfgGoogleTransCompletePage
- Type: `String`
- Default: `empty`

Page number of your "Order Completion" page. This allows Google Analytics tracking for e-commerce transactions. Tracking code will not register if no value is entered.

    cfgGoogleTransCompletePage = "45"
    
## cfgFbPixelID
- Type: `String`
- Default: `empty`

Facebook Pixel ID code. Once this code is entered, your Facebook Pixel is automatically added to all applicable content and transaction pages.

    cfgFbPixelID = "123456789123456"
