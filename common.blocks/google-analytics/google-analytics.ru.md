# google-analytics

Блок для трекинга событий в гугл аналитике.

Использование:

- по js событию

``` js
{
    block : 'block-to-track',
    mix : [
        { block : 'google-analytics', js : {
            info : ['user', 'start new transaction from success'],
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
            info : ['user', 'start new transaction from success']
        }}
    ]
}
```
