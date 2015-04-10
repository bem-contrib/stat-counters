module.exports = {
    options: {
        eqeqeq: true,
        evil: true,
        expr: true,
        forin: true,
        loopfunc: true,
        maxdepth: 4,
        maxlen: 120,
        noarg: true,
        supernew: true,
        undef: true,
        unused: true
    },

    groups: {
        bemhtml: {
            options: {
                predef: ['apply', 'applyCtx', 'applyNext', 'attrs', 'bem', 'block', 'cls', 'content', 'def', 'elem', 'js', 'local', 'match', 'mix', 'mod', 'mode', 'tag']
            },
            includes: ['*.blocks/**/*.bemhtml']
        },

        bhjs: {
            options: {
                node: true
            },
            includes: ['*.blocks/**/*.bh.js']
        }
    }
};
