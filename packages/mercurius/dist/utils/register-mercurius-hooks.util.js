"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMercuriusHooks = registerMercuriusHooks;
const validation_util_1 = require("./validation.util");
function registerMercuriusHooks(app, hooks, key = 'graphql') {
    if ((0, validation_util_1.isUndefined)(hooks) || (0, validation_util_1.isNull)(hooks)) {
        return;
    }
    Object.entries(hooks).forEach(([hookName, hookFn]) => {
        if ((0, validation_util_1.isUndefined)(hookFn) || (0, validation_util_1.isNull)(hookFn)) {
            return;
        }
        if ((0, validation_util_1.isArray)(hookFn)) {
            hookFn.forEach((fn) => app[key].addHook(hookName, fn));
            return;
        }
        app[key].addHook(hookName, hookFn);
    });
}
