# Class Notes

## Basic Selectors:
element selector 
* `p {...}`

class selector 
* `.chapter {...}`
* looks like this in html: `<h2 class="chapter">`

ID selector 
* `#author {...}`
* ID's are unique.  only one can exist in html file.
* looks like this in html: `<h1 id="author">`

Descendant Selector
* `article p {...}`
* this selects only the `<p>` tags that are nested under `<article>` tags
* ```
  <article>
      <h2>Chapter 1:</h2> 
      <p>today I learned...</>
  </article>
  ```

Multiple Selector
* `h2, h3 {...}`
* this affects all `<h2>` and `<h3>` tags equally


## Advanced Selectors

Pseudo-class selector
* `:hover {...}` Mouse is hovering over element
* `:empty {...}` Element has no children elements
* these are based on user behavior or meta information 


Universal Selector
* `* {...}`  
* applies to everything
* `*.chapter {...}` and `.chapter {...}` are the same
  * This is usually implied, but understanding that it does exist can help with other css concepts



Child Selector (compare to descendant selector)
* `div > p {...}`
* Affects `<p>` elements that are descendant of `<div>`, but only if they are nested exactly one level below.
* Does not affect deeper nested items

General Sibling selector
* `h1 ~ p {...}`
* matches `<p>` when `<p>` comes after `<h1>` 
* must be at the same level of nesting
* any number of elements can occur between the two
  * this means that **all** `<p>` tangs after `<h1>` are affected

Adjacent sibling selector
* `h1 + p {...}`
* similar to the general sibling selector, but only affects `<p>` tags that **immediately** follow `<h1>` tags on the same level

Attribute Selector
* `[alt] {...}`
* selects all html elements that have an alt attribute
* `<img src="dog.jpg" alt="a border collie"`

Attribute Exact Value Selector
* `[target="_blank"] {...}`
* MAtches all elements that have a `target` attribute with the exact value `_blank`

Attribute contains whole word selector
* `[alt~="collie]" {...}`

Attribute begins with Selector
* `[class^="nav"] {...}`
* ex. `class="navigation item"`  `class="nav bar"`

Pseudo-element selector
* specified with two colons then a pseudo element
* `::after {...}` `::first-line`
* `p::first-line {...}` Affects only the first *rendered* line in a paragraph tag.
