import { HttpAdapterHost } from '@nestjs/core';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  public catch(exception: HttpException, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const responseBody =
      httpStatus == HttpStatus.BAD_REQUEST
        ? {
            path: request.url,
            timestamp: new Date().toISOString(),
            error_code: exception.getStatus().toString(),
            message: exception.message,
            description: exception.message.length
              ? exception.getResponse()['message']
              : undefined,
          }
        : {
            path: request.url,
            timestamp: new Date().toISOString(),
            error_code: exception.getStatus().toString(),
            message: exception.message,
            description: exception.getResponse()['message'],
          };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
