# Checkout Settings
---
!> To configure your site, modify the config file (installed [here](/setup?id=installation)) at this location: *`../DSN/[yourDSN]/Content/Includes/config.asp`*

---

## cfgShowShippingEstimator
- Type: `Boolean`
- Default: `false`

Show the shipping costs estimator on the right hand side during checkout.

    cfgShowShippingEstimator = "true"
    
## cfgCheckoutCountryDefault
- Status: _Beta_
- Type: `String`
- Default: `US`

Set the default country to be used during Checkout for Shipping and Billing. Must use two (2) character format (ie. `US`,`CA`,`MX`).

    cfgCheckoutCountryDefault = "CA"
