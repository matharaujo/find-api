import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as uuid from 'uuid';

import { Address } from '@Domain/entities/address.entity';

@Injectable()
export class AddressRepository {
  constructor(
    @InjectRepository(Address)
    private readonly addressManager: Repository<Address>,
  ) {}

  public findOneById = async (id: number): Promise<Address> =>
    this.addressManager.findOneBy({ id });

  public save = async (
    zipcode: string,
    street: string,
    number: string,
    complement: string,
    reference: string,
    district: string,
    city: string,
    state: string,
    country: string,
  ): Promise<Address> =>
    this.addressManager.save({
      uuid: uuid.v4(),
      zipcode,
      street,
      number,
      complement,
      reference,
      district,
      city,
      state,
      country,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdUser: 'find-api',
      updatedUser: 'find-api',
    });
}
