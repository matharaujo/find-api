import { Injectable } from '@nestjs/common';

import { GetHealthCheckOutputPort } from '@Domain/ports/outputs/health/get-health-check.output.port';
import { version } from '@Root/package.json';

@Injectable()
export class GetHealthCheckUseCase {
  public execute(): GetHealthCheckOutputPort {
    return { version };
  }
}
