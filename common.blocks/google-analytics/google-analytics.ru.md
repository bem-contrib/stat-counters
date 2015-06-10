# google-analytics

Блок для трекинга событий в гугл аналитике.

Использование:

- по DOM-событию

``` js
{
    block : 'block-to-track',
    mix : [
        { block : 'google-analytics', js : {
            info : ['user', 'start'],
            on : ['block-to-track', 'click'] // 0 - имя блока, 1 - тип события для биндинга
        }}
    ]
}
```

- по js инициализации

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
