import { Module } from '@nestjs/common';

import { HealthModule } from '@Usecases/health/health.module';

@Module({
  imports: [HealthModule],
  providers: [HealthModule],
  exports: [HealthModule],
})
export class UsecasesModule {}
