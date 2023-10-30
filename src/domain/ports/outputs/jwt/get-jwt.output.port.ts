import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class GetJWTOutput {
  @ApiProperty({ name: 'access_token' })
  @Expose({ name: 'access_token' })
  accessToken: string;
}
