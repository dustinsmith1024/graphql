import { AbstractGraphQLDriver } from '@nestjs/graphql';
import { FastifyBaseLogger, FastifyInstance } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from 'http';
import { MercuriusGatewayDriverConfig } from '../interfaces';
export declare class MercuriusGatewayDriver extends AbstractGraphQLDriver<MercuriusGatewayDriverConfig> {
  get instance(): FastifyInstance<
    Server,
    IncomingMessage,
    ServerResponse,
    FastifyBaseLogger
  >;
  start(options: MercuriusGatewayDriverConfig): Promise<void>;
  stop(): Promise<void>;
  generateSchema(options: MercuriusGatewayDriverConfig): any;
}
//# sourceMappingURL=mercurius-gateway.driver.d.ts.map
