'use strict';

module.exports = function (bh) {

    bh.match('google-analytics', function (ctx) {
        var params = ctx.json().params,
            scriptContent;

        if(!params) {
            throw Error('Missing counter parameters object');
        }

        if(!params.id) {
            throw Error('Missing counter ID');
        }

        scriptContent = [
            '(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){',
            '(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),',
            'm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)',
            '})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');',
            '',
            params.userId?
                'ga(\'create\', \'' + params.id + '\', \'auto\', { \'userId\': \'' + params.userId + '\' });' :
                'ga(\'create\', \'' + params.id + '\', \'auto\');',
            'ga(\'send\', \'pageview\');'
        ].join('\n');

        return [
            {
                tag : 'script',
                content : scriptContent
            }
        ];
    });

};
