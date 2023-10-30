import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateJwtInput {
  @ApiProperty({ name: 'username' })
  @Expose({ name: 'username' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  public username: string;

  @ApiProperty({ name: 'password' })
  @Expose({ name: 'password' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  public password: string;
}
