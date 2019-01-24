# st-bootstrap
Speartek Bootstrap Framework

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Config](#config)
4. [Structure](#structure)
  - [Includes](#includes)
  - [Page Classes](#page-classes)
  - [Content Blocks](#content-blocks)
5. [Navigation](#navigation)
  - [Main Menu](#main-menu)
  - [Slideout Menu (Mobile)](#slideout-menu-mobile)
  - [Footer](#footer)
6. [Page Elements](#page-elements)
  - [Top Bar](#top-bar)
  - [Hero](#hero)
  - [Slider](#slider)
7. [Custom Form Manager(CFM)](#custom-form-manager-cfm)
8. [PayDirect](#paydirect)
  - [Themes](#themes)

## Requirements
- Speartek 723
- Bootstrap 4.2.1
- jQuery 3.3.1+
- perfect-scrollbar 1.4.0
- slick-carousel 1.8.1
- FontAwesome 5.6.3+
- Ionicons 4.3+

## Installation
To install, download the [latest distribution](#download) and extract all files in the <i>/dist/</i> folder to your DSN's root folder.

After installation, you -must- configure the site settings. See [Config](#config) section below.

## Config
To configure your site, modify the config file (installed above) at the following location:

```../DSN/[yourDSN]/Content/Includes/config.asp```

<i>(View [config.asp](#) Wiki for detailed configuration options)</i>

## Structure
#### Includes
To set up your includes, navigate to `Content Manager > Edit Site Content > (Select page to edit) > Page Properties`

Insert the following in the corresponding sections:

**Meta Tags / Head of Page Code**
```asp
<!-- #include file="../Content/Includes/boot-headinclude.inc" -->
```
**Close HTML**
```asp
<!-- #include file="../Content/Includes/boot-closepage.inc" -->
```

#### Page Classes
Some pages are easier to work with when applying an identifying class to the Page Properties. No classes are currently required for any functionality with st-bootstrap, but there are some recommended classes to help make things more smooth.

**Recommended**

Homepage `homepage`

#### Content Blocks

## Navigation
#### Main Menu
#### Slideout Menu (Mobile)
#### Footer

## Page Elements
#### Top Bar
#### Hero
#### Slider

## Custom Form Manager (CFM)
To enable a responsive rebuild of the custom forms on your page, you must insert the following line directly beneath your  *boot-closepage.inc* in your Page Properties.

```html
<script src="../scripts/CFManagerBS4.js"></script>
```

**[Note]** It is _strongly_ recommended that you **_DO NOT_** set this file globally. Custom Forms do not currently have a separate identifying class to target; attaching this builder may incidentally target unintended forms.

## PayDirect

#### Themes
The PayDirect block is configurable with several various theme styles.
To configure a theme for your PayDirect block, click the Page Properties link on the page containing the block and add one of the following classes to your Page Class:

Tempest `pd-theme-tempest`