import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as dotenv from 'dotenv';
import * as path from 'path';
import request from 'supertest';

import { SupplierController } from '@Infrastructure/controllers/supplier.controller';
import { CreateSupplierUseCase } from '@Usecases/supplier/create-supplier.usecase';

dotenv.config({
  path: path.resolve(process.cwd() + `/.env.${process.env.NODE_ENV}`),
});

describe('[Controller] - Supplier', () => {
  let application: INestApplication;

  const mockUseCase = () => ({
    execute: jest.fn(),
  });

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [SupplierController],
      providers: [
        {
          provide: CreateSupplierUseCase,
          useFactory: mockUseCase,
        },
      ],
    }).compile();

    application = moduleFixture.createNestApplication();
    await application.init();
  });

  it('[CONSTRUCTOR] - SUCCESS', () => {
    const controller = application.get<SupplierController>(SupplierController);

    expect(controller).toBeDefined();
    expect(SupplierController).toBeDefined();
  });

  it('[POST] - v1/suppliers - SUCCESS', () => {
    return request(application.getHttpServer())
      .post('/v1/suppliers')
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
