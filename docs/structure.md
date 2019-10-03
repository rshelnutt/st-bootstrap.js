# Page Structure
---

## Includes
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

---

## Web Blocks
All default st-bootstrap web blocks are identified in the admin by Bootstrap's purple color and icon.

<div style="background-color:#7947bb;margin-top: 2rem;color: #fff;max-width:380px;padding:0.2rem 1rem 0.2rem 1rem;margin-bottom: 0.5rem;">boot-BlockName.asp</div>

<span style="color: #b1bec3;margin-bottom: 2rem;display: inline-block;font-size: 0.9rem;margin-left: 1rem;">[Responsive] Web block information is listed here</span> ![ST Bootstrap 4](https://www.speartek.com/st-app/dist/ico/ico-bs4.png "Bootstrap 4")

Each page using st-bootstrap should have at least two web blocks present. The general structure is:

Page Layout|
--- |
boot-Header.asp|
Content |
boot-Footer.asp |

---

## Page Classes
Some pages are easier to work with when applying an identifying class to the Page Properties. No classes are currently required for any functionality with st-bootstrap, but there are some recommended classes to help make things more smooth.

#### Recommended
Homepage — `.homepage`

...yep. That's it.

---

## Content Classes
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
