import { Module } from '@nestjs/common';

import { UsecasesModule } from '@Usecases/usecases.module';
import { HealthController } from '@Infrastructure/controllers/health.controller';

@Module({
  imports: [UsecasesModule],
  providers: [UsecasesModule],
  controllers: [HealthController],
})
export class InfrastructureModule {}
