# google-analytics

Блок для трекинга событий в гугл аналитике.

---
**NB** клиентская реализация этого блока требует наличие 'i-bem__dom' и 'jquery' из библиотеки [bem-core](https://github.com/bem/bem-core). Если вы планируете ее использовать, не забудьте подключить bem-core к себе на проект.

---

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
