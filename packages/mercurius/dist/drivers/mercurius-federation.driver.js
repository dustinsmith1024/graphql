"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercuriusFederationDriver = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("graphql");
const mercurius_1 = require("mercurius");
const build_mercurius_federated_schema_util_1 = require("../utils/build-mercurius-federated-schema.util");
const register_mercurius_hooks_util_1 = require("../utils/register-mercurius-hooks.util");
const register_mercurius_plugin_util_1 = require("../utils/register-mercurius-plugin.util");
// TODO:
// const { mercuriusFederationPlugin } = require('@mercuriusjs/federation');
let MercuriusFederationDriver = class MercuriusFederationDriver extends graphql_1.AbstractGraphQLDriver {
    constructor(graphqlFederationFactory) {
        super();
        this.graphqlFederationFactory = graphqlFederationFactory;
    }
    get instance() {
        return this.httpAdapterHost?.httpAdapter?.getInstance?.();
    }
    async start(options) {
        const { plugins, hooks, ...adapterOptions } = options;
        if (adapterOptions.definitions && adapterOptions.definitions.path) {
            await this.graphQlFactory.generateDefinitions((0, graphql_2.printSchema)(adapterOptions.schema), adapterOptions);
        }
        const httpAdapter = this.httpAdapterHost.httpAdapter;
        const platformName = httpAdapter.getType();
        if (platformName !== 'fastify') {
            throw new Error(`No support for current HttpAdapter: ${platformName}`);
        }
        const app = httpAdapter.getInstance();
        // TODO: replace with mercuriusFederationPlugin
        await app.register(mercurius_1.default, {
            ...adapterOptions,
        });
        await (0, register_mercurius_plugin_util_1.registerMercuriusPlugin)(app, plugins);
        (0, register_mercurius_hooks_util_1.registerMercuriusHooks)(app, hooks);
    }
    async stop() { }
    generateSchema(options) {
        return this.graphqlFederationFactory.generateSchema(options, build_mercurius_federated_schema_util_1.buildMercuriusFederatedSchema);
    }
};
exports.MercuriusFederationDriver = MercuriusFederationDriver;
exports.MercuriusFederationDriver = MercuriusFederationDriver = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [graphql_1.GraphQLFederationFactory])
], MercuriusFederationDriver);
