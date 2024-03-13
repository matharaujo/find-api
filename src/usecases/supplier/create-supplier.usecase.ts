import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { SupplierRepository } from '@Domain/repositories/supplier.repository';
import { AddressRepository } from '@Domain/repositories/address.repository';
import { CreateSupplierInput } from '@Domain/ports/inputs/supplier/create-supplier.input.port';
import { CreateSupplierOutput } from '@Domain/ports/outputs/supplier/create-supplier.output.port';

@Injectable()
export class CreateSupplierUseCase {
  constructor(
    private readonly supplierRepository: SupplierRepository,
    private readonly addressRepository: AddressRepository,
  ) {}

  public async execute(
    input: CreateSupplierInput,
  ): Promise<CreateSupplierOutput> {
    await this.checkIfCnpjExists(input.cnpj);
    await this.checkIFAddressExists(input.addressId);

    const transaction = await this.supplierRepository.save(
      input.cnpj,
      input.fantasyName,
      input.socialReason,
      input.stateInscription,
      input.email,
      input.phone,
      input.addressId,
    );

    return { uuid: transaction.uuid };
  }

  private async checkIfCnpjExists(cnpj: string): Promise<void> {
    const supplier = await this.supplierRepository.findOneByCnpj(cnpj);

    if (supplier) {
      throw new HttpException(
        'CNPJ is already registered!',
        HttpStatus.CONFLICT,
      );
    }
  }

  private async checkIFAddressExists(id: number): Promise<void> {
    const address = await this.addressRepository.findOneById(id);

    if (!address) {
      throw new HttpException(
        'Address not registered!',
        HttpStatus.PRECONDITION_FAILED,
      );
    }
  }
}
