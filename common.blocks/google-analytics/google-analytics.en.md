# google-analytics

Track event on Google Analytics.

---
**NB** client implementation of this block requires 'i-bem__dom' and 'jquery' from [bem-core](https://github.com/bem/bem-core) library. If you're going to use it, don't forget to include the bem-core to your project.

---

Usage:

- by DOM-event

``` js
{
    block : 'block-to-track',
    mix : [
        { block : 'google-analytics', js : {
            info : ['user', 'start'],
            on : ['block-to-track', 'click'] // 0 - block name, 1 - event name
        }}
    ]
}
```

- on js init

``` js
{
    block : 'block-to-track',
    mix : [
        { block : 'google-analytics', js : {
            info : ['user', 'start']
        }}
    ]
}
```
