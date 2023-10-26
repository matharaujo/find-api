import { INestApplication } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';

import { version } from '@Root/package.json';

export class SwaggerConfiguration {
  public static configure(server: INestApplication): void {
    const document = SwaggerModule.createDocument(
      server,
      {
        openapi: '3.1.0',
        info: {
          title: 'API Documentation',
          version: version,
        },
      },
      {
        deepScanRoutes: true,
      },
    );

    SwaggerModule.setup('docs', server, document, {
      swaggerOptions: {
        defaultModelsExpandDepth: 0,
      },
    });
  }
}
