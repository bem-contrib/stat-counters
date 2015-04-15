# Statistics counters BEM library
[![Build Status](https://travis-ci.org/remnev/stat-counters.svg)](https://travis-ci.org/remnev/stat-counters)

A library for web analytics that provides site statistics counters to any BEM-based project.

## Blocks inside
  - [yandex-metrica](#yandex-metrica) — uses [Yandex.Metrica](https://metrica.yandex.com) service.
  - [google-analytics](#google-analytics) — uses [Google Analytics](https://www.google.com/analytics) service.

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
            path: 'vendors/stat-counters/common.blocks',
            check: false
        },
        // your own levels
    ].map(function(levelPath) { return config.resolvePath(levelPath); });
}
```

*bem-tools example*
```js
exports.getConfig = function() {

    return extend({}, this.__base() || {}, {

        bundleBuildLevels: this.resolvePaths([
            // vendors levels
            'vendors/stat-counters/common.blocks'
            // your own levels
        ])

    });

};
```

*bem-tools example if you use [bem-project-stub](https://github.com/bem/project-stub)*
```js
getLevelsMap: function() {
   return {
       desktop: [
            // vendors levels
            'vendors/stat-counters/common.blocks'
            // your own levels
       ]
   };
}
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

### google-analytics

Set the following parameters of the block:

* `id` — required

*Example*
```js
 {
    block: 'google-analytics',
    params: {
        id: 'UA-XXXXXXXX-X'
    }
}
```

## License

MIT [License](https://github.com/remnev/stat-counters/blob/master/LICENSE)
