import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserInput {
  @ApiProperty({ name: 'name' })
  @Expose({ name: 'name' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  public name: string;

  @ApiProperty({ name: 'username' })
  @Expose({ name: 'username' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  public username: string;

  @ApiProperty({ name: 'email' })
  @Expose({ name: 'email' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  public email: string;

  @ApiProperty({ name: 'password' })
  @Expose({ name: 'password' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  public password: string;
}
