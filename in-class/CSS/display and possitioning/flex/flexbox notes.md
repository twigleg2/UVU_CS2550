# [Display: Flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

You learned about display block, inline, inline-block, and none, this is another display type.  
To begin,  set you container CSS to `display: flex;`

## The container

### Vocabulary
First, it's important to understand the following:
* main axis - the direction specified by `flex-direction`.
* cross axis - the direction perpendicular to the main axis

### flex-direction
* row (default)
* column
* row-reverse
* colum-reverse

### flex-wrap
* nowrap (default)
* wrap
* wrap-reverse

### flex-flow
* shorthand for combing flex-direction and flex-wrap
* ex: `flex-flow: row wrap`

### justify-content
Determines how to align items within the container when there is extra space on the *main* axis.  The main axis is the flex-direction. (ex.  if `flex-direction` set to `row`, the main axis is the x-axis)
* flex-start (default)
* flex-end
* center
* space-around
* space-between
* space-evenly

### align-items
Similar to justify content, but uses the *cross* axis (ex.  If `justify-content` uses the x-axis because `flex-direction` is set to `row`, then `align-items` will use the y-axis)
* normal (default)
* stretch
* center
* flex-start
* flex-end
* baseline

### align-content
This property determines how multiple lines are laid out on the cross axis
* stretch (default)
* center
* flex-start
* flex-end
* space-between
* space-around
* space-evenly

### TIP: pefect centering
To get your items to be perfectly centered on both the x- and y-axis, set both `justify-content` and `align-items` to `center`

Everything above applies to the flexbox *container*.  there are also properties that can be applied to the individual items within the container


## The items within a container

### Order
All items have a default value of 0.  Items with the same value with be displayed in the order they exist in the html.  The order can be positive or negative.  
```
.pictureBox { 
    order: 1;
}
```

### align-self
* auto (default)
* stretch
* center
* flex-start
* flex-end
* baseline