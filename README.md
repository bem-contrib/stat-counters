# Statistics counters BEM-library

The library provides site statistics counters to use in BEM-based project.

## Blocks inside
  - Yandex-metrica
  - ~~Google-analytics~~ (in progress)

## How to use
1. Get the library
```sh
$ bower install bem-stat-counters --save
```

2. Include the library to levels declaration in your compiler tool config *(e.g. [enb](https://github.com/enb-make/enb), bem-tools)*

enb example
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

bem-tools example
```js
// TODO
```

3. Declare any library block in your bemjson

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
### Yandex metrica
Block has one required param `id` and other optional params, see example below
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
