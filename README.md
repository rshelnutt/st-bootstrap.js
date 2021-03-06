# st-bootstrap
Speartek Bootstrap Framework

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Config](#config)
4. [Structure](#structure)
  - [Includes](#includes)
  - [Page Classes](#page-classes)
  - [Content Classes](#content-classes)
  - [Web Blocks](#web-blocks)
5. [Navigation](#navigation)
  - [Main Menu](#main-menu)
  - [Slideout Menu (Mobile)](#slideout-menu-mobile)
  - [Footer](#footer)
6. [Page Elements](#page-elements)
  - [Top Bar](#top-bar)
  - [Hero](#hero)
  - [Sliders](#sliders)
    - [Standard Slider](#standard-slider)
    - [Media Slider](#media-slider)
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
To install, download the [latest distribution](https://github.com/rshelnutt/st-bootstrap/zipball/master) and extract all files in the */dist/* folder to your DSN's root folder.

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

#### Recommended
Homepage — `.homepage`

...yep. That's it.

### Content Classes
#### Contain
The `.contain` class can be applied to any container-level element or Content Properties section to restrict the width to a boxed layout (1140px). This is especially useful when using a full width site but you need a certain element to stay within the maximum 1140px boundary.

```html
<div class="contain">
    This content's width is restricted to a maximum of 1140px, with automatic margins on the left and right.
</div>
```


#### Fullwidth
The `.fullwidth` class can be applied to any container-level element or Content Properties section to make it span the full width of the screen. This is especially useful when using a constrained width site but you need a certain element to reach across the entire width of the page.

This class can be combined with both the [hero](#hero) and [slider](#sliders) elements for some great effects.

```html
<div class="fullwidth">
    This content spans across the entire page.
</div>
```


#### Fullscreen
The `.fullscreen` class, (similar to the [fullwidth](#fullwidth) class) can be applied to any top-level container element to make it span both the full width, and full viewport height of the screen (with the exception to the usage of [data-hero-height](#hero)).

The `.fullscreen` class can also be combined with both the [hero](#hero) and [slider](#sliders) elements.

**[Note]** This class forces the content to be absolutely positioned *behind* other content. It should be used strictly for media display purposes, directly beneath the top menu.

```html
<div class="hero fullscreen">
    This content spans the entire screen.
</div>
```

### Web Blocks
All default st-bootstrap web blocks are identified in the admin by Bootstrap's purple color and icon.

<div style="background-color:#7947bb;margin-top: 2rem;color: #fff;max-width:380px;padding:0.2rem 1rem 0.2rem 1rem;margin-bottom: 0.5rem;">boot-BlockName.asp</div>

<span style="color: #b1bec3;margin-bottom: 2rem;display: inline-block;font-size: 0.9rem;margin-left: 1rem;">[Responsive] Web block information is listed here</span> ![ST Bootstrap 4](https://www.speartek.com/st-app/dist/ico/ico-bs4.png "Bootstrap 4")

Each page using st-bootstrap should have at least two web blocks present. The general structure is:

Page Layout|
--- |
boot-Header.asp|
Content |
boot-Footer.asp |

## Navigation
st-bootstrap offers several options for menu configuration and setup.
### Main Menu

### Slideout Menu (Mobile)

### Footer

## Page Elements
### Top Bar
A top bar can be added to the site by configuring your config.asp file. This top bar can be used to display phone, email and social media links.
*(Read [config.asp](#) Wiki for detailed configuration options)*


### Hero
No super powers needed. Automatically construct a hero image from your media with ease. Simply attach the `.hero` class to a &lt;div&gt; containing your &lt;img&gt;.

###### **[Example]**
```html
<div class="hero">
    <img src="myAwesomeHeroImage.jpg" />
</div>
```

You can also pre-define the height of your hero by using the ```data-hero-height``` attribute.
This value is automatically measured in px - no measurement unit should be appended to this value.
```html
<div class="hero" data-hero-height="220">
    <img src="myAwesomeHeroImage.jpg" />
</div>
```

**[Pro Tip]** Add the [fullscreen](#fullscreen) class to your hero element with the ```data-hero-height``` attribute set for a perfect menu background effect that can be customized on every page.

### Sliders
Sliders are now a breeze to set up. Insert captions, images, and even external videos with the `.slider-media` class (see [Media Slider](#media-slider)).

More configuration options are on the way.

#### Standard Slider
Attach the `.slider` class to a &lt;div&gt; or &lt;ul&gt; and it's contents will be automatically constructed into a slider.
```html
<div class="slider">
    <img src="slide-1.jpg" />
    <img src="slide-2.jpg" />
    <img src="slide-3.jpg" />
</div>
```
or
```html
<ul class="slider">
    <li><img src="slide-1.jpg" /></li>
    <li><img src="slide-2.jpg" /></li>
    <li><img src="slide-3.jpg" /></li>
</ul>
```
#### Media Slider
To include external videos, as well as images, just add the `.slider-media` class to a &lt;ul&gt; slider.
**[Note]** The Media Slider is NOT compatible with &lt;div&gt; sliders!
```html
<ul class="slider slider-media">
    ...
</ul>
```

* ##### Supported Videos
   The media slider currently supports:
   - Images
   - YouTube Videos
   - Vimeo Videos
   - Direct link .mp4 files

  ##### Attaching Media
  Attach an images to a slide the same way as the [Standard Slider](#standard-slider).  
  Attach a video to a slide by inserting the direct, plain-text link to the video directly into your &lt;li&gt;.

  ###### **[Example]**
   ```html
   <ul class="slider slider-media">
       <li><img src="slide-1.jpg" /></li>
       <li>https://www.youtube.com/watch?v=UN3uF3990Q0</li>
   </ul>
   ```

  ##### Set Media Slider Height
   Manually define the media slider's height by using the `data-slider-height` attribute.
   This value is automatically measured in px - no measurement unit should be appended to this value.
   ```html
   <ul class="slider slider-media" data-slider-height="300">
       <li><img src="slide-1.jpg" /></li>
       <li>https://www.youtube.com/watch?v=UN3uF3990Q0</li>
   </ul>
   ```

  ##### Configuration Options
   Each video type has it's own unique options/attributes available:
   
  **Youtube**  
   `data-video-start` - Define the start time (in seconds) to begin the video playback - great for skipping ahead of openings or targeting better timeframes.  
   `data-video-playlist` - Define a playlist ID to play from after a video has completed.

  **Vimeo**  
   `data-video-start` - Define the start time (in seconds) to begin the video playback - great for skipping ahead of openings or targeting better timeframes.  

  **.mp4**  
   Attach a custom "cover image" for your hosted .mp4 video by inserting the desired image alongside the url in the &lt;li&gt;.  

  ###### **[Example]**
   ```html
   <ul class="slider slider-media">
       <li>
           <img src="slide-1.jpg" />
       </li>
       <li data-video-start="12" data-video-playlist="PLoCt_TmodrfmxTXFxOaCwJ7_8n8DCZetQ">
           https://www.youtube.com/watch?v=UN3uF3990Q0
       </li>
       <li data-video-start="6">
           https://vimeo.com/218706459
       </li>
       <li data-video-start="6">
           <img src="video-cover-image.jpg" />
           https://www.website.com/videos/video.mp4
       </li>
   </ul>
   ```

  ##### Titles/Captions
   Add a title or caption the slide by using any heading element (h1,h2,h3,etc..) in the same &lt;li&gt;.  
   All heading elements here are considered equal and are converted to &lt;p&gt; elements, regardless of numbering.
  ###### **[Example]**
   ```html
   <ul class="slider slider-media">
       <li>
           <h5>This is an image</h5>
           <img src="slide-1.jpg" />
       </li>
       <li data-video-start="6">
           <h3>This is from Vimeo</h3>
           https://vimeo.com/218706459
       </li>
   </ul>
   ```

## Custom Form Manager (CFM)
To enable a responsive rebuild of any custom form on a page, insert the following line directly beneath the *boot-closepage.inc* in your form's Page Properties.

```html
<script src="../scripts/CFManagerBS4.js"></script>
```

**[Note]** It is _strongly_ recommended that you **_DO NOT_** set this file globally for your website. Custom Forms do not currently have a separate identifying class to target; attaching this builder globally may incidentally target unintended forms.

## PayDirect

### Themes
The PayDirect block is configurable with several various theme styles.
To configure a theme for your PayDirect block, click the Page Properties link on the page containing the block and add one of the following classes to your Page Class:

Theme Name  |  Class
---|---
Clarity|`pd-theme-clarity`  
Mint|`pd-theme-mint`  
Lagoon|`pd-theme-lagoon`  
Tempest|`pd-theme-tempest`  
Rewards|`pd-theme-rewards`  
Amethyst|`pd-theme-amethyst`  
Sunburst|`pd-theme-sunburst`  
Firebrand|`pd-theme-firebrand`  