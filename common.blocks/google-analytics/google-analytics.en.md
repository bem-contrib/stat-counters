# google-analytics

Track event on Google Analytics.

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
