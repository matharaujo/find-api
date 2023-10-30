import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as dotenv from 'dotenv';
import * as path from 'path';
import request from 'supertest';

import { UserController } from '@Infrastructure/controllers/user.controller';
import { CreateUserUseCase } from '@Usecases/user/create-user.usecase';

dotenv.config({
  path: path.resolve(process.cwd() + `/.env.${process.env.NODE_ENV}`),
});

describe('[Controller] - User', () => {
  let application: INestApplication;

  const mockUseCase = () => ({
    execute: jest.fn(),
  });

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: CreateUserUseCase,
          useFactory: mockUseCase,
        },
      ],
    }).compile();

    application = moduleFixture.createNestApplication();
    await application.init();
  });

  it('[CONSTRUCTOR] - SUCCESS', () => {
    const controller = application.get<UserController>(UserController);

    expect(controller).toBeDefined();
    expect(CreateUserUseCase).toBeDefined();
  });

  it('[POST] - v1/users - SUCCESS', () => {
    return request(application.getHttpServer())
      .post('/v1/users')
      .send({
        name: 'name',
        email: 'email',
        username: 'username',
        password: 'password',
      })
      .expect(201);
  });

  afterAll(async () => {
    await application.close();
  });
});
