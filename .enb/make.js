'use strict';

module.exports = function(config) {
    var platforms = ['common'];

    config.includeConfig('enb-bem-tmpl-specs');

    configureSets(platforms, {
        tmplSpecs : config.module('enb-bem-tmpl-specs').createConfigurator('tmpl-specs')
    });

    function configureSets(platforms, sets) {
        platforms.forEach(function(platform) {
            sets.tmplSpecs.configure({
                destPath : platform + '.tmpl-specs',
                levels : ['common.blocks'],
                sourceLevels : ['common.blocks'],
                coverage : true,
                engines : {
                    bh : {
                        tech : 'enb-bh/techs/bh-bundle',
                        options : {
                            jsAttrName : 'data-bem',
                            jsAttrScheme : 'json',
                            sourcemap : true
                        }
                    },
                    bemhtml : {
                        tech : 'enb-bemxjst/techs/bemhtml'
                    }
                }
            });
        });
    }
};
