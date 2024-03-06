import { Module } from '@nestjs/common';

import { HealthModule } from '@Usecases/health/health.module';
import { JwtModule } from '@Usecases/jwt/jwt.module';
import { UserModule } from '@Usecases/user/user.module';
import { SupplierModule } from '@Usecases/supplier/supplier.module';

@Module({
  imports: [HealthModule, JwtModule, UserModule, SupplierModule],
  providers: [HealthModule, JwtModule, UserModule, SupplierModule],
  exports: [HealthModule, JwtModule, UserModule, SupplierModule],
})
export class UsecasesModule {}
