# [Display: Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
`display: grid` or `display: inline-grid`

## Container Properties
`column-gap:`, `row-gap:`, or just `gap:`  
* sets the gaps between columns and rows (on the grid lines)  

`grid-template-columns` and `grid-template-rows`
* set the number and size of columns/rows.  they do not all have to be the same.
* ex: `grid-template-columns: 100px 10vw auto 25px`
* units include:
  * auto
  * vw - viewport width.  
  * vh - viewport height.  
  * vmin - viewport smaller dimension
  * vmax - viewport larger dimension
  * % - percent of parent element size
    * ex: 10vw = 10% of the viewport width.
    * `grid-template-column: 50%`

`justify-content:`
* horizontally align the grid inside the container

`align-content:`
* vertically align the grid inside the container

## item properties
### Grid lines:  
Each row and column have grid lines, which exist between items.  lines start with 1 (not 0) at the beginning of the container.

`grid-column-start:` 
* places the item at a specific grid line

`grid-colum-end: ` 
* places the item just before a specific grid line 

Items can span multiple columns/rows.  
ex: the item below will span 2 columns because it starts at line 1 and ends at line 3.
```
.item1 {
  grid-column-start: 1;
  grid-column-end: 3;
}
```

`grid-column:`, `grid-row:`
* shorthand that combines both start and end.
* ex: start at column line 1 and end at column line 3
```
.item1 {
    grid-column: 1 / 3
} 
```
* ex: start at row 2 and span 2 rows
```
.item1 {
    grid-row: 2 / span 2
}
```

`grid-area`
* allows you to give names to items, which you can then place by name in the grid.

`grid-template-areas`
* place named items here.  each row should be inside quotes.  ex:  "main main main side"

[check out this example on W3 schools](https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_grid-area_named3)

## Box Sizing
* [1](https://www.w3schools.com/css/css3_box-sizing.asp)
* [2](https://www.w3schools.com/cssref/css3_pr_box-sizing.php)