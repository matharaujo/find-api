import { Module } from '@nestjs/common';

import { HealthModule } from '@Usecases/health/health.module';
import { UserModule } from '@Usecases/user/user.module';

@Module({
  imports: [HealthModule, UserModule],
  providers: [HealthModule, UserModule],
  exports: [HealthModule, UserModule],
})
export class UsecasesModule {}
