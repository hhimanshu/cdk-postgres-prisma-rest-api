import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs';
import {LambdaResourceType} from '../lambdas';

export const HttpResource = {
  users: 'users',
};
export type LambdaIntegrationType = Pick<
  LambdaResourceType,
  'resource' | 'httpMethod'
> & {
  fn: NodejsFunction;
};
