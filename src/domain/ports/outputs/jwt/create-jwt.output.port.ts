import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CreateJwtOutput {
  @ApiProperty({ name: 'token' })
  @Expose({ name: 'token' })
  token: string;
}
