import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { StoreRepository } from '@Domain/repositories/store.repository';
import { AddressRepository } from '@Domain/repositories/address.repository';
import { CreateStoreInput } from '@Domain/ports/inputs/store/create-store.input.port';
import { CreateStoreOutput } from '@Domain/ports/outputs/store/create-store.output.port';

@Injectable()
export class CreateStoreUseCase {
  constructor(
    private readonly storeRepository: StoreRepository,
    private readonly addressRepository: AddressRepository,
  ) {}

  public async execute(input: CreateStoreInput): Promise<CreateStoreOutput> {
    await this.checkIfCnpjExists(input.cnpj);
    await this.checkIFAddressExists(input.addressId);

    const transaction = await this.storeRepository.save(
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
    const store = await this.storeRepository.findOneByCnpj(cnpj);

    if (store) {
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
