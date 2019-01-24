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

You can also pre-define the height of your hero by using the ```data-hero-height``` attribute.\
This value is automatically measured in px, no unit should be appended to your value.
```html
<div class="hero" data-hero-height="220">
    <img src="myAwesomeHeroImage.jpg" />
</div>
```

### Slider
Sliders are now a breeze to set up. Insert images, and even external video links with the `.slider-media` class.

Attach the `.slider` class to a &lt;div&gt; or &lt;ul&gt; and it's contents will be automatically formatted with default settings.
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

To include external videos, add the `.slider-media` class to your `.slider` element.
```html
<ul class="slider slider-media">
    ...
</ul>
```

##### Supported Videos
This slider currently supports images, videos from YouTube and Vimeo, and direct link .mp4 files.

- Attaching images to a slide is the same as the standard slider above.
- To attach a video to a slide, insert the direct, plain-text link to the video directly into your &lt;li&gt;.

###### **[Example]**
```html
<ul class="slider slider-media">
    <li><img src="slide-1.jpg" /></li>
    <li>https://www.youtube.com/watch?v=UN3uF3990Q0</li>
</ul>
```
Each video type has it's own unique options/attributes available:

**Youtube**
`data-video-start` - Define the start time (in seconds) to begin the video playback - great for skipping ahead of openings or targeting better timeframes

`data-video-playlist` - Define a playlist ID to play from after a video has completed

**Vimeo**
`data-video-start` - Define the start time (in seconds) to begin the video playback - great for skipping ahead of openings or targeting better timeframes

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

###### **[Example]**
```html
<ul class="slider slider-media">
    <li>
        <h3>This is an image</h3>
        <img src="slide-1.jpg" />
    </li>
    <li data-video-start="6">
        <h3>This is from Vimeo</h3>
        https://vimeo.com/218706459
    </li>
</ul>
```

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