# Page Elements
---

## Top Bar
A top bar can be added to the site by configuring your config.asp file. This top bar can be used to display phone, email and social media links.
*(Read [Configuration - Top Bar](/cfgTopbar.md) section for detailed configuration options)*

---

## Hero
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

> After setting the ```data-hero-height``` attribute, add the [.fullscreen](/structure?id=fullscreen) class to your hero element for a perfect menu background effect that can be customized on every page.

---

## Sliders
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

!> The Media Slider is NOT compatible with &lt;div&gt; sliders!

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
