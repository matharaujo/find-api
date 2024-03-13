import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as dotenv from 'dotenv';
import * as path from 'path';
import request from 'supertest';

import { StoreController } from '@Infrastructure/controllers/store.controller';
import { CreateStoreUseCase } from '@Usecases/store/create-store.usecase';

dotenv.config({
  path: path.resolve(process.cwd() + `/.env.${process.env.NODE_ENV}`),
});

describe('[Controller] - Store', () => {
  let application: INestApplication;

  const mockUseCase = () => ({
    execute: jest.fn(),
  });

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [StoreController],
      providers: [
        {
          provide: CreateStoreUseCase,
          useFactory: mockUseCase,
        },
      ],
    }).compile();

    application = moduleFixture.createNestApplication();
    await application.init();
  });

  it('[CONSTRUCTOR] - SUCCESS', () => {
    const controller = application.get<StoreController>(StoreController);

    expect(controller).toBeDefined();
    expect(StoreController).toBeDefined();
  });

  it('[POST] - v1/stores - SUCCESS', () => {
    return request(application.getHttpServer())
      .post('/v1/stores')
      .send({
        cnpj: 'cnpj',
        fantasyName: 'fantasyName',
        socialReason: 'socialReason',
        stateInscription: 'stateInscription',
        email: 'email@email.com',
        phone: '99999999999',
        addressId: 1,
      })
      .expect(201);
  });

  afterAll(async () => {
    await application.close();
  });
});
