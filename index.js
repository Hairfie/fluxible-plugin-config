'use strict';

function configPlugin(config) {
    var config = config;

    return {
        name: 'ConfigPlugin',
        plugContext: function () {
            return {
                plugStoreContext: function (storeContext) {
                    storeContext.config = config;
                },
                plugActionContext: function (actionContext) {
                    actionContext.config = config;
                },
                plugComponentContext: function (componentContext) {
                    componentContext.config = config;
                }
            };
        },
        dehydrate: function () {
            return { config: config };
        },
        rehydrate: function (state) {
            config = state.config;
        }
    };
}

module.exports = configPlugin;
