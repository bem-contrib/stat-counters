var path = require('path'),
    PLATFORMS = {
        'common' : ['common']
    };

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
                levels : getSpecLevels(platform),
                sourceLevels : getLevels(platform),
                coverage : true,
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
        });
    }
};

function getLevels(platform) {
    var levels = [];

    PLATFORMS[platform].forEach(function(name) {
        levels.push({
            path : path.join('libs', 'bem-core', name + '.blocks'),
            check : false
        });
    });

    PLATFORMS[platform].forEach(function(name) {
        levels.push(name + '.blocks');
    });

    return levels;
}

function getSpecLevels(platform) {
    var levels = [];

    PLATFORMS[platform].forEach(function(name) {
        levels.push(name + '.blocks');
    });

    return levels;
}
