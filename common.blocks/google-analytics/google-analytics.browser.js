/**
 * @module google-analytics
 */
modules.define('google-analytics',
['i-bem__dom', 'jquery'],
function(provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name, {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    var _this = this;

                    if(this.params.on && this.params.info) {
                        this.findBlockOn(this.params.on[0])
                            .bindTo(this.params.on[1], function() {
                                _this.push(_this.params.info);
                            });
                    } else if(this.params.info) {
                        this.push(this.params.info);
                    }
                }
            }
        },

        push : function(eventParams) {
            ga.apply(this, ['send', 'event'].concat(eventParams));
        }
    }));
});
