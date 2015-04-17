module.exports = function(config) {
    config.includeConfig('enb-bem-tmpl-specs');

    config.module('enb-bem-tmpl-specs')
        .createConfigurator('tmpl-specs')
        .configure({
            destPath : 'common.tmpl-specs',
            levels : ['common.blocks'],
            sourceLevels : [
                {
                    path : 'libs/bem-core/common.blocks',
                    check : false
                },
                { path : 'common.blocks', check : true }
            ],
            coverage : {
                engines : ['bh']
            },
            engines : {
                bh : {
                    tech : 'enb-bh/techs/bh-server-include',
                    options : {
                        jsAttrName : 'data-bem',
                        jsAttrScheme : 'json',
                        sourcemap : true
                    }
                },
                'bemhtml-dev' : {
                    tech : 'enb-bemxjst/techs/bemhtml-old',
                    options : { devMode : true }
                },
                'bemhtml-prod' : {
                    tech : 'enb-bemxjst/techs/bemhtml-old',
                    options : { devMode : false }
                }
            }
        });
};
