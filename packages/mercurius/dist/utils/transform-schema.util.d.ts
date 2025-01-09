import { GraphQLSchema } from 'graphql';
export declare const FEDERATION_SCHEMA =
  '\n  \n  scalar _Any\n  scalar _FieldSet\n  directive @external on FIELD_DEFINITION\n  directive @requires(fields: _FieldSet!) on FIELD_DEFINITION\n  directive @provides(fields: _FieldSet!) on FIELD_DEFINITION\n  directive @key(fields: _FieldSet!) on OBJECT | INTERFACE\n  directive @extends on OBJECT | INTERFACE\n\n  type _Service {\n    sdl: String\n  }\n';
export declare function gatherDirectives(type: any): any[];
export declare function typeIncludesDirective(
  type: any,
  directiveName: any,
): boolean;
/**
 * Inspired by https://github.com/mercurius-js/mercurius/blob/master/lib/federation.js#L231
 * Accept a GraphQLSchema to transform instead of a plain string containing a graphql schema
 * @param schema
 */
export declare function transformFederatedSchema(
  schema: GraphQLSchema,
): GraphQLSchema;
//# sourceMappingURL=transform-schema.util.d.ts.map
