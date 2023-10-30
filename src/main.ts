import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as path from 'path';

import { InfrastructureModule } from '@Infrastructure/infrastructure.module';
import { ServerConfiguration } from '@Infrastructure/configurations/server.configuration';
import { SwaggerConfiguration } from '@Infrastructure/configurations/swagger.configuration';

async function bootstrap(): Promise<void> {
  const env = process.env.NODE_ENV ? `/.env.${process.env.NODE_ENV}` : '/.env';
  dotenv.config({ path: path.resolve(process.cwd() + env) });

  const server = await NestFactory.create(InfrastructureModule);

  ServerConfiguration.configure(server);
  SwaggerConfiguration.configure(server);

  const port = process.env.PORT_API || 8000;

  await server.listen(port);

  Logger.log(`Docs ready at http://localhost:${port}/docs`, `NestApplication`);
}

bootstrap();
