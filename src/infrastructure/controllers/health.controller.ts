import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';

import { GetHealthCheckUseCase } from '@Usecases/health/get-health-check.usecase';
import { GetHealthCheckOutputPort } from '@Domain/ports/outputs/health/get-health-check.output.port';

@Controller('v1/health')
@ApiTags('v1/health')
export class HealthController {
  constructor(private readonly getHealthCheckUseCase: GetHealthCheckUseCase) {}

  @Get('check')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: GetHealthCheckOutputPort })
  public async getHealthCheck(): Promise<GetHealthCheckOutputPort> {
    return this.getHealthCheckUseCase.execute();
  }
}
