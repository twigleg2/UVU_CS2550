# Design Principles

## Responsive Design

[CSS Responsive design](https://www.w3schools.com/css/css_rwd_intro.asp)

[CSS media queries](https://www.w3schools.com/css/css3_mediaqueries.asp)

Syntax:
```
@media not|only mediatype and (media-feature) and (media-feature) {
  CSS-Code;
}
```

### mediatype
- screen
- print
- all

### media-feature
- orientation - `landscape` or `portrait`
- max-height	
- min-height	
- height	
- max-width	
- min-width	
- width

### Linking multiple Style sheets

```
<link href="default-styles.css" rel="stylesheet">
<link href="phone-styles.css" rel="stylesheet" media="screen and (max-width: 600)">
<link href="print-styles.css" rel="stylesheet" media="print">
```
NOTE: stylesheets will be loaded and applied in order from top to bottom.  Anything in a later stylesheet that contradicts an earlier stylesheet will overwrite the previous styles.  

### Typical Device breakpoints:
``````
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}
``````

### Device Pixel Ratio (DPR)
screens that are intended to be viewed from far away, like a computer screen, have a low DPR, usually 1x.  
Screens that are intended to be viewed close to the eyes, like a smartphone, have a high DPR, like 2x or 3x.  
* If a screen has a DPR of 2x, then that device will use a 2x2 grid of physical pixels to display 1 logical pixel.

When displaying images, supplying multiple sizes for the browser to chose from can help improve loading speed.  This can be done with the `srcset` and `sizes` attribute on the `<img>` tag.  
1. First, supply an image that will be used as the default.  This image is assigned to the `src` attribute.  
2. (optional) Second,  create a list of screen sizes that you want to target in the `sizes` attribute.  Make sure to include the media screen width and the percentage of the screen you want the image to take up.  
3. Third, supply a list of images and, optionally, their width or DPR to the `srcset` attribute.  The browser will automatically do some math based on these things to select the most appropriate image.  
ex.

```
<img src="dog400.jpg"
     sizes="(min-width: 600px) 25vw, 
            (min-width: 400px) 50vw, 
            100vw"
     srcset="dog200.jpg 200w, 
             dog400.jpg 400w,
             dog800.jpg 800w"
>
```
```
<img src="singer_150.jpg" 
     srcset="singer_300.jpg 2x, singer_450.jpg 3x" 
     alt="Singer" width="150"
>
```

Another way this can be done is with the `<picture>` tag.  Unlike the example above, in which all attributes are part of the `<img>` tag, the picture tag acts like a div that contains all the possibilities, each with its own `<source>` tag.
1. Create an opening `<picture>` tag and a closing `</picture>` tag, just like you would with a div.
2. Between the opening and closing picture tag, provide an `<img>` tag with a `src` attribute.  This will be the default picture used if the browser determines none of the next steps to be a good fit for the web page.
3. Create one or more `<source>` tags.  Each of these can have a `media` attribute and a `srcset` attribute.  

```
<picture>
   <source media="(min-width: 600px)" srcset="dog-wide.jpg">
   <source media="(min-width: 400px)" srcset="dog.jpg">
   <img src="dog-narrow.jpg" alt="Dog">
</picture>
```

## Other design Principles

[Canva design youtube video](https://www.youtube.com/watch?v=UmHMVU6dceA&ab_channel=Canva)

[Adobe Color Wheel](https://color.adobe.com/create/color-wheel)