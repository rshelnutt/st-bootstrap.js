# Site & Registration Settings
---
!> To configure your site, modify the config file (installed [here](/setup?id=installation)) at this location: *`../DSN/[yourDSN]/Content/Includes/config.asp`*

---


## cfgAdminGroup
- Type: `String`

Name of Group to be given front-end admin view access. Currently only applicable for "Add A Store/Location" functionality.

    cfgAdminGroup = "Administrators"
    
## cfgPubAccess
- Type: `Boolean`
- Default: `true`

Define whether or not the public can log in to the website.

    cfgPubAccess = "true"
    
## cfgPubBrowse
- Type: `Boolean`
- Default: `true`

Define whether or not the public can view and access the list of products and/or product categories without being logged in.

    cfgPubBrowse = "true"
    
## cfgPubCheckout
- Type: `Boolean`
- Default: `true`

Define whether or not the public can purchase and check out products without being logged in.

    cfgPubCheckout = "false"
    
## cfgAllowRegister
- Type: `Boolean`
- Default: `true`

Define whether or not the public can register for an account.

    cfgAllowRegister = "false"
    
## cfgModalRegisterLinkText
- Type: `String`
- Default: `Register`

Change the Register link text on the pop-up login modal.

    cfgModalRegisterLinkText = "Register Today!"
    
## cfgRegisterPass
- Type: `Boolean`
- Default: `false`

Allow registrations to be automatically activated when the applicant supplies a secret password matching the text set by [cfgRegisterPassSet](#cfgRegisterPassSet).

    cfgRegisterPass = "true"
    
## cfgRegisterPassSet
- Type: `String`

Define the password to be used with [cfgRegisterPass](#cfgRegisterPass).

    cfgRegisterPassSet = "MyPassword$123!"
    
## cfgRequireActivation
- Type: `Boolean`
- Default: `false`

Require Registration applications to be manually activated by administrators before they can be used. If [cfgRegisterPassSet](#cfgRegisterPassSet) is true and user enters the correct password, this step is bypassed automatically.

    cfgRequireActivation = "true"
    
## cfgRegisteredGroup
- Type: `String`
- Default: `Default`

Group that will be applied to users who register using the default form.

    cfgRegisteredGroup = "Wholesale Credit Card"
    
## cfgRegisteredPersonType
- Type: `String`
- Default: `Member`

Person Type that will be applied to users who register using the default form.

    cfgRegisteredPersonType = "Member"
