import { Module } from '@nestjs/common';

import { HealthModule } from '@Usecases/health/health.module';
import { JwtModule } from '@Usecases/jwt/jwt.module';
import { UserModule } from '@Usecases/user/user.module';
import { SupplierModule } from '@Usecases/supplier/supplier.module';
import { StoreModule } from '@Usecases/store/store.module';

@Module({
  imports: [HealthModule, JwtModule, UserModule, SupplierModule, StoreModule],
  providers: [HealthModule, JwtModule, UserModule, SupplierModule, StoreModule],
  exports: [HealthModule, JwtModule, UserModule, SupplierModule, StoreModule],
})
export class UsecasesModule {}
