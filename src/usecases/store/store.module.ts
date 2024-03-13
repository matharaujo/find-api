import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Store } from '@Domain/entities/store.entity';
import { Address } from '@Domain/entities/address.entity';
import { StoreRepository } from '@Domain/repositories/store.repository';
import { AddressRepository } from '@Domain/repositories/address.repository';
import { CreateStoreUseCase } from '@Usecases/store/create-store.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([Store, Address])],
  providers: [StoreRepository, AddressRepository, CreateStoreUseCase],
  exports: [CreateStoreUseCase],
})
export class StoreModule {}
