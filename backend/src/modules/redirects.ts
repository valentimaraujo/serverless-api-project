import {
  Handler,
  APIGatewayProxyResult,
} from 'aws-lambda';
import middify from '@libs/middify';
import formatJSONResponse from '@libs/formatJsonResponse';

export const handler: Handler = middify(
  async (): Promise<APIGatewayProxyResult> => {
    return formatJSONResponse(404, 'Page Not found');
  }
);