import { INestApplication, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { json } from 'express';

import { HttpExceptionFilter } from '@Infrastructure/filters/http-exception.filter';

export class ServerConfiguration {
  public static configure(server: INestApplication): void {
    server.enableCors();
    server.useGlobalFilters(
      new HttpExceptionFilter(server.get(HttpAdapterHost)),
    );
    server.useGlobalPipes(new ValidationPipe({ transform: true }));
    server.setGlobalPrefix('api');
    server.use(json({ limit: '20mb' }));
  }
}
