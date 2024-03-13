import { HttpException, HttpStatus } from '@nestjs/common';

import { SupplierRepository } from '@Domain/repositories/supplier.repository';
import { AddressRepository } from '@Domain/repositories/address.repository';
import { CreateSupplierUseCase } from '@Usecases/supplier/create-supplier.usecase';

describe('[UseCases] - Supplier - CreateSupplierUseCase', () => {
  let supplierRepository: SupplierRepository;
  let addressRepository: AddressRepository;
  let createSupplierUseCase: CreateSupplierUseCase;

  beforeEach(() => {
    supplierRepository = new SupplierRepository({} as any);
    addressRepository = new AddressRepository({} as any);
    createSupplierUseCase = new CreateSupplierUseCase(
      supplierRepository,
      addressRepository,
    );
  });

  it('[Execute] - SUCESS', async () => {
    jest.spyOn(supplierRepository, 'findOneByCnpj').mockResolvedValue(null);
    jest
      .spyOn(addressRepository, 'findOneById')
      .mockResolvedValue({ id: 1 } as any);
    jest
      .spyOn(supplierRepository, 'save')
      .mockResolvedValue({ uuid: 'uuid' } as any);

    const result = await createSupplierUseCase.execute({
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
      .spyOn(supplierRepository, 'findOneByCnpj')
      .mockResolvedValue({ uuid: 'uuid' } as any);

    try {
      await createSupplierUseCase.execute({
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
    jest.spyOn(supplierRepository, 'findOneByCnpj').mockResolvedValue(null);
    jest.spyOn(addressRepository, 'findOneById').mockResolvedValue(null);

    try {
      await createSupplierUseCase.execute({
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
