import { HttpException, HttpStatus } from '@nestjs/common';

import { StoreRepository } from '@Domain/repositories/store.repository';
import { AddressRepository } from '@Domain/repositories/address.repository';
import { CreateStoreUseCase } from '@Usecases/store/create-store.usecase';

describe('[UseCases] - Store - CreateStoreUseCase', () => {
  let storeRepository: StoreRepository;
  let addressRepository: AddressRepository;
  let createStoreUseCase: CreateStoreUseCase;

  beforeEach(() => {
    storeRepository = new StoreRepository({} as any);
    addressRepository = new AddressRepository({} as any);
    createStoreUseCase = new CreateStoreUseCase(
      storeRepository,
      addressRepository,
    );
  });

  it('[Execute] - SUCESS', async () => {
    jest.spyOn(storeRepository, 'findOneByCnpj').mockResolvedValue(null);
    jest
      .spyOn(addressRepository, 'findOneById')
      .mockResolvedValue({ id: 1 } as any);
    jest
      .spyOn(storeRepository, 'save')
      .mockResolvedValue({ uuid: 'uuid' } as any);

    const result = await createStoreUseCase.execute({
      cnpj: 'cnpj',
      fantasyName: 'fantasyName',
      socialReason: 'socialReason',
      stateInscription: 'stateInscription',
      email: 'email@email.com',
      phone: '99999999999',
      addressId: 1,
    });

    expect(result).not.toBeNull();
    expect(result.uuid).not.toBeNull();
  });

  it('[Execute] - ERROR - CNPJ IS ALREADY REGISTERED', async () => {
    jest
      .spyOn(storeRepository, 'findOneByCnpj')
      .mockResolvedValue({ uuid: 'uuid' } as any);

    try {
      await createStoreUseCase.execute({
        cnpj: 'cnpj',
        fantasyName: 'fantasyName',
        socialReason: 'socialReason',
        stateInscription: 'stateInscription',
        email: 'email@email.com',
        phone: '99999999999',
        addressId: 1,
      });
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect((error as HttpException).getStatus()).toBe(HttpStatus.CONFLICT);
      expect((error as HttpException).getResponse()).toBe(
        'CNPJ is already registered!',
      );
    }
  });

  it('[Execute] - ERROR - ADDRESS NOT REGISTERED', async () => {
    jest.spyOn(storeRepository, 'findOneByCnpj').mockResolvedValue(null);
    jest.spyOn(addressRepository, 'findOneById').mockResolvedValue(null);

    try {
      await createStoreUseCase.execute({
        cnpj: 'cnpj',
        fantasyName: 'fantasyName',
        socialReason: 'socialReason',
        stateInscription: 'stateInscription',
        email: 'email@email.com',
        phone: '99999999999',
        addressId: 1,
      });
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect((error as HttpException).getStatus()).toBe(
        HttpStatus.PRECONDITION_FAILED,
      );
      expect((error as HttpException).getResponse()).toBe(
        'Address not registered!',
      );
    }
  });
});
