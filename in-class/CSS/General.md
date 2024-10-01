# other properties

## color
* `rgb(0,0,0)`
* `#FFFFFF`

## Box Sizing
* [mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)  
* [w3schools](https://www.w3schools.com/css/css3_box-sizing.asp)

## Specificity
It's very common for one element to have conflicting styles applied to it.  The style that ultimately gets used depends on *specificity*.  

* inline - styles that are written inline with your HTML have the highest specificity (value = 1000) and will almost always dominate any other style. 
* IDs - styles that are applied to an ID selector have the second highest specificity (value = 100) and will dominate classes and regular element selectors
* classes - styles applied to a CSS class have the third highest specificity (value = 10).  
  * pseudo-classes and attribute selectors are also at this same level of specificity
* Elements - Lastly, elements and pseudo-elements have the lowest specificity (value = 1)

Now, it's possible for a CSS selector to include more than one of the above items.  For example, `p.main` includes a class and an element, while `#navbar button.odd` includes an ID, a class, and an element!  How does CSS handle these scenarios? It adds together the different specificity values and ranks the totals, with the highest being the winner.  

If two selectors have the same specificity value, then the one that occurs later in the CSS file will be applied.

NOTE: Inherited styles have a specificity value = 0, so they are easily overwritten.

## Units

Units are used to modify properties like `font-size`, `width`, and `margin`  

### Absolute units
These are not recommended for use in digital sources because the screen size can vary wildly.  However, they can be great when designing for a page that will be printed.

* cm - centimeter
* mm - millimeter
* in - inches
* px - pixels
* pt - points
* pc - picas  
  
Helpful conversions:  

* 96 px = 1 in
* 16 px = 12 pt
* 1 pc = 12 pt
* 1 in = 72 pt
* 1 in = 2.54 cm
  
NOTE:
*  pt is intended for use in print media
*  px is intended for use in digital media
   *  pixels (px) are relative to the viewing device.  a high-resolution display might have multiple physical pixels turn on to display one px.
  
### Relative Units
Relative units tend to be more convenient when trying to build a site that looks good on more than one screen size.

* em - relative to the font size of the parent element 
  * ex:  2 em = twice the size of the current font
* rem - relative to the font size of the root element
* vh - a percentage of the viewport height
  * ex:  10vh = 10% of the height of the viewport
* vw - a percentage of the viewport width
* vmin - a percentage of the viewport width or height, whichever is smaller
* vmax - a percentage of the viewport width or height, whichever is larger
* % - relative to the parent element
  * ex: 50% = half the size of the parent element

## [Calculations in CSS](https://www.w3schools.com/css/css_math_functions.asp)

CSS has the ability to do math using the `calc()`, `max()`, and `min()` functions

* calc(100% - 10px)
* max(50%, 300px)
* min(50%, 100px)
  * min (or max) chooses the smallest (or largest) value from the list


## [CSS Variables](https://www.w3schools.com/css/css3_variables.asp)
you can declare a variable in CSS inside of a selector using two dashes in front of a name you choose, like this:
```
div {
    --mainColor: #382E3E;
    --accentColor: #9910E8;
}
```
Then you can use those variables like this:
```
div a {
    color: var(--accentColor)
}
```

NOTE: You can only use a variable inside of an element where it was declared.  Using the example above, these two color variables can only be used inside of div elements.  If you want your variables to be globally accessible, put them inside of the `:root` pseudo class:
```
:root {
    --mainColor: #382E3E;
    --accentColor: #9910E8;
}
```
You can also give the var() function a fallback value incase the specified variable name does not exist:
```
div a {
    color: var(--accentColor, #777777)
}
```

## [Gradients](https://www.w3schools.com/css/css3_gradients.asp)