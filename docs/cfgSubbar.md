# Sub Bar Settings
---
!> To configure your site, modify the config file (installed [here](/setup?id=installation)) at this location: *`../DSN/[yourDSN]/Content/Includes/config.asp`*

---


## cfgAnnouncementBar
- Type: `String`

Show text notification inside the announcements bar at the top of the page. Bar will not appear if left blank.  

    cfgAnnouncementBar = "Free shipping on orders over $75 - Today Only!"
    
## cfgSubBar
- Type: `Boolean`
- Default: `true`

Enable/disable the SubBar at the top of the page above the menu.

    cfgSubBar = "true"
    
## cfgSubBarFullwidth
- Type: `Boolean`

Set SubBar to reach across the entire page, outside the 1140px maximum width of the default content boundaries. Inner text is still bound to the 1140px width. 

    cfgSubBarFullwidth = "true"
    
## cfgCustomSubBarText
- Type: `String`

Enter custom text to be used in the SubBar section. This text will replace the phone & email information that is shown by default. HTML is also allowed.

    cfgCustomSubBarText  = "<a href='catalog.pdf'>Download Our Catalog</a>"
    
## cfgSubBarInlineUtils
- Type: `Boolean`
- Default: `false`

Move account utility options such as Login, Register, and User Menus from the main menu and into the SubBar. 

    cfgSubBarInlineUtils = "true"
    
## cfgContactSubBarShow
- Type: `String`
- Options: `email`,`phone`,`both`,`[empty for none]`

Select what contact information will be displayed in the SubBar. This is overwritten by [cfgCustomSubBarText](#cfgCustomSubBarText).

    cfgContactSubBarShow = "both"
    
## cfgContactEmail
- Type: `String`

Enter the email to be used in the Contact section of the SubBar, if desired.

    cfgContactEmail = "info@email.com"
    
## cfgContactPhone
- Type: `String`

Enter the phone number to be used in the Contact section of the SubBar, if desired.

    cfgContactPhone = "123-456-7890"
