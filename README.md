# Statistics counters BEM library

A library for web analytics that provides site statistics counters to any BEM-based project.

## Blocks inside
  - [yandex-metrica](#link_to_the_block_in_your_repo) — uses [Yandex.Metrica](https://metrica.yandex.com) service.
  - ~~[google-analytics](#link_to_the_block_in_your_repo)~~ (in progress) — uses [Google Analytics](http://www.google.com/analytics) service.

## How to use

Get the library:

```sh
$ bower install bem-stat-counters --save
```

Include the library to the levels declaration in your compiler tool configuration (e.g. [ENB](https://github.com/enb-make/enb) or [bem-tools](https://ru.bem.info/tools/bem/bem-tools/)):

*ENB example*
```js
function getLevels(config) {
    return [
        // vendors levels
        {
            path: 'vendors/stat-counters',
            check: false
        },
        // your own levels
    ].map(function(levelPath) { return config.resolvePath(levelPath); });
}
```

*bem-tools example*
```js
// TODO
```

Declare a counter in your project BEMJSON:

```js
{
    block: 'footer',
    content: [
        // smth content,
        {
            block: 'yandex-metrica',
            params: {
                id: configs.metrika.id,
                webvisor: true,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true
            }
        }
    ]
}
```

## How to declare blocks
### yandex-metrica

Set the following parameters of the block:

* `id` — required
* `webvisor` — optoinal
* `clickmap` — optional
* `trackLinks` — optional
* `accurateTrackBounce` — optional

*Example*
```js
 {
    block: 'yandex-metrica',
    params: {
        id: configs.metrika.id, // required param
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true
    }
}
```
