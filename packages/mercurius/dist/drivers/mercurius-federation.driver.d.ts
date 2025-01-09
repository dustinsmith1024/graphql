import {
  AbstractGraphQLDriver,
  GraphQLFederationFactory,
} from '@nestjs/graphql';
import { FastifyBaseLogger, FastifyInstance } from 'fastify';
import { GraphQLSchema } from 'graphql';
import { IncomingMessage, Server, ServerResponse } from 'http';
import { MercuriusDriverConfig } from '../interfaces/mercurius-driver-config.interface';
export declare class MercuriusFederationDriver extends AbstractGraphQLDriver<MercuriusDriverConfig> {
  private readonly graphqlFederationFactory;
  constructor(graphqlFederationFactory: GraphQLFederationFactory);
  get instance(): FastifyInstance<
    Server,
    IncomingMessage,
    ServerResponse,
    FastifyBaseLogger
  >;
  start(options: MercuriusDriverConfig): Promise<void>;
  stop(): Promise<void>;
  generateSchema(options: MercuriusDriverConfig): Promise<GraphQLSchema>;
}
//# sourceMappingURL=mercurius-federation.driver.d.ts.map
