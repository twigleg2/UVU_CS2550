# CSS Animations

Each CSS animation has a few properties.  Each animation requires a combination of some or all of the following:
* animation-name
* animation-duration
* animation-timing-function
* animation-delay
* animation-iteration-count
* animation-direction
* animation-fill-mode

### Shorthand
There exists a shorthand property that combines the properties above into one line:
* animation


### Keyframes
Each animation must also have some keyframes specified.  Keyframes are the intermediate stages of the animation.  Think of them like checkpoints that the animation must pass through before it can continue on to the next checkpoint.    
keyframes must have a beginning and an end, and also may have any number of intermediate stages. 

```
@keyframes animationNameHere {
    from {
        /* starting properties */
    }
    to {
        /* ending properties */
    }
}
```

```
@keyframes threeStageAnimation {
    0% {
        /* starting properties */
    }

    50% {
        /* intermediate properties */
    }

    100% {
        /* ending properties */
    }
}
```

### Things to note
* The `animation-name` property must match the name given to the keyframe set.
* The `animation-duration` property **must** be specified or the animation will not play, because the default value is 0.
* if you want your animation to change position on the page, it's position cannot be static
  * Remember that static is the default value for the position property, so you must set it to something else (usually relative)
* an animation can be paused using the `animation-play-state` property. 
    * property can be set to `playing` or `paused`
    * apply this to a pseudo class like `:hover `



## practice activities
* can you make a custom "loading spinner"?
* can you make some text get larger or change size when someone mouses over it?
* can you make a picture or icon fly in from off screen?
  * Can you make it rotate while it does this?