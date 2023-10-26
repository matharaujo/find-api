import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class GetHealthCheckOutputPort {
  @ApiProperty({ name: 'version' })
  @Expose({ name: 'version' })
  version: string;
}
