import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as dotenv from 'dotenv';
import * as path from 'path';
import request from 'supertest';

import { JwtController } from '@Infrastructure/controllers/jwt.controller';
import { CreateJwtUseCase } from '@Usecases/jwt/create-jwt.usecase';

dotenv.config({
  path: path.resolve(process.cwd() + `/.env.${process.env.NODE_ENV}`),
});

describe('[Controller] - Jwt', () => {
  let application: INestApplication;

  const mockUseCase = () => ({
    execute: jest.fn(),
  });

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [JwtController],
      providers: [
        {
          provide: CreateJwtUseCase,
          useFactory: mockUseCase,
        },
      ],
    }).compile();

    application = moduleFixture.createNestApplication();
    await application.init();
  });

  it('[CONSTRUCTOR] - SUCCESS', () => {
    const controller = application.get<JwtController>(JwtController);

    expect(controller).toBeDefined();
    expect(CreateJwtUseCase).toBeDefined();
  });

  it('[POST] - v1/jwt - SUCCESS', () => {
    return request(application.getHttpServer())
      .post('/v1/jwt')
      .send({
        username: 'username',
        password: 'password',
      })
      .expect(201);
  });

  afterAll(async () => {
    await application.close();
  });
});
