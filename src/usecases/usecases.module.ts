import { Module } from '@nestjs/common';

import { HealthModule } from '@Usecases/health/health.module';
import { JwtModule } from '@Usecases/jwt/jwt.module';
import { UserModule } from '@Usecases/user/user.module';

@Module({
  imports: [HealthModule, JwtModule, UserModule],
  providers: [HealthModule, JwtModule, UserModule],
  exports: [HealthModule, JwtModule, UserModule],
})
export class UsecasesModule {}
