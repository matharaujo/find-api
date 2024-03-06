import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Supplier } from '@Domain/entities/supplier.entity';
import { Address } from '@Domain/entities/address.entity';
import { SupplierRepository } from '@Domain/repositories/supplier.repository';
import { AddressRepository } from '@Domain/repositories/address.repository';
import { CreateSupplierUseCase } from '@Usecases/supplier/create-supplier.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([Supplier, Address])],
  providers: [SupplierRepository, AddressRepository, CreateSupplierUseCase],
  exports: [CreateSupplierUseCase],
})
export class SupplierModule {}
