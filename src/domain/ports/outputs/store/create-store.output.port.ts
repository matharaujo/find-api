import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CreateStoreOutput {
  @ApiProperty({ name: 'uuid' })
  @Expose({ name: 'uuid' })
  uuid: string;
}
