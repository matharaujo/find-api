import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as uuid from 'uuid';

import { Supplier } from '@Domain/entities/supplier.entity';

@Injectable()
export class SupplierRepository {
  constructor(
    @InjectRepository(Supplier)
    private readonly supplierManager: Repository<Supplier>,
  ) {}

  public findOneByCnpj = async (cnpj: string): Promise<Supplier> =>
    this.supplierManager.findOneBy({ cnpj });

  public save = async (
    cnpj: string,
    fantasyName: string,
    socialReason: string,
    stateInscription: string,
    email: string,
    phone: string,
    addressId: number,
  ): Promise<Supplier> =>
    this.supplierManager.save({
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
