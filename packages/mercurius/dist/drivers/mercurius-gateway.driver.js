"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercuriusGatewayDriver = void 0;
const graphql_1 = require("@nestjs/graphql");
const register_mercurius_hooks_util_1 = require("../utils/register-mercurius-hooks.util");
const register_mercurius_plugin_util_1 = require("../utils/register-mercurius-plugin.util");
class MercuriusGatewayDriver extends graphql_1.AbstractGraphQLDriver {
    get instance() {
        return this.httpAdapterHost?.httpAdapter?.getInstance?.();
    }
    async start(options) {
        const httpAdapter = this.httpAdapterHost.httpAdapter;
        const platformName = httpAdapter.getType();
        if (platformName !== 'fastify') {
            throw new Error(`No support for current HttpAdapter: ${platformName}`);
        }
        const { plugins, hooks, schema: _, // Schema stubbed to be compatible with other drivers, ignore.
        ...mercuriusOptions } = options;
        const app = httpAdapter.getInstance();
        await app.register(require('@mercuriusjs/gateway'), {
            ...mercuriusOptions,
        });
        await (0, register_mercurius_plugin_util_1.registerMercuriusPlugin)(app, plugins);
        (0, register_mercurius_hooks_util_1.registerMercuriusHooks)(app, hooks, 'graphqlGateway');
    }
    async stop() { }
    generateSchema(options) {
        return null;
    }
}
exports.MercuriusGatewayDriver = MercuriusGatewayDriver;
