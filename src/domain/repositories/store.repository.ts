import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as uuid from 'uuid';

import { Store } from '@Domain/entities/store.entity';

@Injectable()
export class StoreRepository {
  constructor(
    @InjectRepository(Store)
    private readonly storeManager: Repository<Store>,
  ) {}

  public findOneByCnpj = async (cnpj: string): Promise<Store> =>
    this.storeManager.findOneBy({ cnpj });

  public save = async (
    cnpj: string,
    fantasyName: string,
    socialReason: string,
    stateInscription: string,
    email: string,
    phone: string,
    addressId: number,
  ): Promise<Store> =>
    this.storeManager.save({
      uuid: uuid.v4(),
      cnpj,
      fantasyName,
      socialReason,
      stateInscription,
      email,
      phone,
      addressId,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdUser: 'find-api',
      updatedUser: 'find-api',
    });
}
