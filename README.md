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
To install, download the [latest distribution](#download) and extract all files in the */dist/* folder to your DSN's root folder.

After installation, you -must- configure the site settings. See [Config](#config) section below.

## Config
To configure your site, modify the config file (installed above) at the following location:

```
../DSN/[yourDSN]/Content/Includes/config.asp
```

*(Read [config.asp](#) Wiki for detailed configuration options)*

## Structure
### Includes
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

### Page Classes
Some pages are easier to work with when applying an identifying class to the Page Properties. No classes are currently required for any functionality with st-bootstrap, but there are some recommended classes to help make things more smooth.

**Recommended**

Homepage `homepage`

#### Content Blocks

## Navigation

### Main Menu

### Slideout Menu (Mobile)

### Footer

## Page Elements
### Top Bar
A top bar can be added to the site by configuring your config.asp file. This top bar can be used to display phone, email and social media links.
*(Read [config.asp](#) Wiki for detailed configuration options)*


### Fullwidth

### Fullscreen

### Hero
You can automatically construct a hero image from your media. Simply attach the `.hero` class to a &lt;div&gt; containing your &lt;img&gt;.

###### **[Example]**
```html
<div class="hero">
    <img src="myAwesomeHeroImage.jpg" />
</div>
```

You can also predefine the height of your hero by using the ```data-hero-height``` attribute.
This value is measured in px, no unit should be appended to your value. The calculations are performed automatically.
```html
<div class="hero" data-hero-height="220">
    <img src="myAwesomeHeroImage.jpg" />
</div>
```

### Slider

## Custom Form Manager (CFM)
To enable a responsive rebuild of the custom forms on your page, you must insert the following line directly beneath the *boot-closepage.inc* in your Page Properties.

```html
<script src="../scripts/CFManagerBS4.js"></script>
```

**[Note]** It is _strongly_ recommended that you **_DO NOT_** set this file globally. Custom Forms do not currently have a separate identifying class to target; attaching this builder globally may incidentally target unintended forms.

## PayDirect

### Themes
The PayDirect block is configurable with several various theme styles.
To configure a theme for your PayDirect block, click the Page Properties link on the page containing the block and add one of the following classes to your Page Class:

Tempest `pd-theme-tempest`