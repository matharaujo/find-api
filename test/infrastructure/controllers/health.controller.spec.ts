import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as dotenv from 'dotenv';
import * as path from 'path';
import request from 'supertest';

import { HealthController } from '@Infrastructure/controllers/health.controller';
import { GetHealthCheckUseCase } from '@Usecases/health/get-health-check.usecase';

dotenv.config({
  path: path.resolve(process.cwd() + `/.env.${process.env.NODE_ENV}`),
});

describe('[Controller] - Health', () => {
  let application: INestApplication;

  const mockUseCase = () => ({
    execute: jest.fn(),
  });

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [
        {
          provide: GetHealthCheckUseCase,
          useFactory: mockUseCase,
        },
      ],
    }).compile();

    application = moduleFixture.createNestApplication();
    await application.init();
  });

  it('[CONSTRUCTOR] - SUCCESS', () => {
    const controller = application.get<HealthController>(HealthController);

    expect(controller).toBeDefined();
    expect(GetHealthCheckUseCase).toBeDefined();
  });

  it('[GET] - v1/health/check - SUCCESS', () => {
    return request(application.getHttpServer())
      .get('/v1/health/check')
      .expect(200);
  });

  afterAll(async () => {
    await application.close();
  });
});
