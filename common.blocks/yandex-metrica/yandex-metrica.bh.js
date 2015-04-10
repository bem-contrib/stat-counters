'use strict';

module.exports = function (bh) {

    bh.match('yandex-metrica', function (ctx) {
        var params = ctx.json().params;
        var scriptContent;
        var noScriptContent;

        if (!params) {
            throw Error('Missing counter parameters object');
        }

        if (!params.id) {
            throw Error('Missing counter ID');
        }

        scriptContent = [
            '(function (d, w, c) {',
            '    (w[c] = w[c] || []).push(function() {',
            '        try {',
            '            w.yaCounter' + params.id + ' = new Ya.Metrika(' + JSON.stringify(params) + ');',
            '        } catch(e) { }',
            '    });',
            '',
            '    var n = d.getElementsByTagName("script")[0],',
            '        s = d.createElement("script"),',
            '        f = function () { n.parentNode.insertBefore(s, n); };',
            '    s.type = "text/javascript";',
            '    s.async = true;',
            '    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";',
            '',
            '    if (w.opera == "[object Opera]") {',
            '        d.addEventListener("DOMContentLoaded", f, false);',
            '    } else { f(); }',
            '})(document, window, "yandex_metrika_callbacks");'
        ].join('\n');

        noScriptContent = {
            tag: 'div',
            content: {
                tag: 'img',
                attrs: {
                    src: '//mc.yandex.ru/watch/' + params.id,
                    style: 'position:absolute; left:-9999px;'
                }
            }
        };

        return [
            {
                tag: 'script',
                content: scriptContent
            },
            {
                tag: 'noscript',
                content: noScriptContent
            }
        ];
    });

};
