# Display and Positioning

## [Display](https://www.w3schools.com/cssref/pr_class_display.php)

Block:
* Rendered on it's own line
* line break before and after
* takes up maximum space
* examples:
  * `<h1>` `<p>` `<div>`

Inline: 
* Opposite of Block
* NOT rendered on it's own line
* NO line breaks before and after
* takes up minimal space
* Examples:
  * `<a>` `<span>`

Inline-block:
* Behaves like an inline element with one exception
* Can specify the height and width of the element
* examples:
  * `<img>`

None:
* The element is not rendered on the page

There are many more display properties  
NOTE: We'll spend an entire class on flex and grid later.

## [Position](https://www.w3schools.com/css/css_positioning.asp)

Static:
* The element is placed according to the normal flow of the page. **Cannot** be moved
  * top, bottom, left, right, z-index have NO effect
* This is the default behavior.

Relative:
* The element is placed according to the normal flow of the page. Can be moved
  * top, bottom, left, right, and z-index properties move the element relative to its default location.
* Moving this element does NOT affect any other element on the page.

Absolute:
* The element is removed from the normal page flow
* Placed relative to it's closest ancestor (if any)
  * can be moved with top, bottom, left, right, z-index
* Every other element on the page behaves as if this one does not exist

Fixed:
* The element is placed relative to the viewport, not relative to the web page
  * This means it stays in the same place, even if the page scrolls
  * top, bottom, left, right move the element around the viewport
* The element is, naturally, removed from the normal flow of the page

Sticky:
* Toggles between relative and Fixed
  * Relative while the user has it's assigned location on-screen
  * Fixed when the user scrolls away from it's assigned location.
* You MUST set `top:` or `bottom:` for vertical scrolling
* You MUST set `left:` or `right:` for horizontal scrolling
* NOTE: Safari may require that you use the webkit prefix,  `position: -webkit-sticky` and may only work on block elements `display: block`

## Practice Activity
How would you make an image scroll with your screen?  
How would you overlay text onto an image?  
How would you put text below an image (a description), and have them both scroll with the screen?  