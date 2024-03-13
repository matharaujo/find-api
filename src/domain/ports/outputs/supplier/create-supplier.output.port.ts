import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CreateSupplierOutput {
  @ApiProperty({ name: 'uuid' })
  @Expose({ name: 'uuid' })
  uuid: string;
}
