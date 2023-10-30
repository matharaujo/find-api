import { Module } from '@nestjs/common';

import { UsecasesModule } from '@Usecases/usecases.module';
import { DatabaseConfiguration } from '@Infrastructure/configurations/database.configuration';
import { HealthController } from '@Infrastructure/controllers/health.controller';
import { UserController } from '@Infrastructure/controllers/user.controller';

@Module({
  imports: [DatabaseConfiguration, UsecasesModule],
  providers: [DatabaseConfiguration, UsecasesModule],
  controllers: [HealthController, UserController],
})
export class InfrastructureModule {}
