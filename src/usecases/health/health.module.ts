import { Module } from '@nestjs/common';

import { GetHealthCheckUseCase } from '@Usecases/health/get-health-check.usecase';

@Module({
  providers: [GetHealthCheckUseCase],
  exports: [GetHealthCheckUseCase],
})
export class HealthModule {}
