import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class InternalServerError {
  @ApiProperty({ name: 'path', example: '/api/path' })
  @Expose({ name: 'path' })
  public path: string;

  @ApiProperty({ name: 'timestamp', example: '0000-00-00T00:00:00.000Z' })
  @Expose({ name: 'timestamp' })
  public timestamp: string;

  @ApiProperty({ name: 'message', example: 'INTERNAL_SERVER_ERROR' })
  @Expose({ name: 'message' })
  public message: string;

  @ApiProperty({ name: 'description', example: 'Internal server error' })
  @Expose({ name: 'description' })
  public description: string;
}
