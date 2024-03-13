import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEmail,
  IsNumberString,
  MaxLength,
} from 'class-validator';

export class CreateStoreInput {
  @ApiProperty({ name: 'cnpj' })
  @Expose({ name: 'cnpj' })
  @IsNotEmpty()
  @IsNumberString()
  @MaxLength(14)
  public cnpj: string;

  @ApiProperty({ name: 'fantasy_name' })
  @Expose({ name: 'fantasy_name' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  public fantasyName: string;

  @ApiProperty({ name: 'social_reason' })
  @Expose({ name: 'social_reason' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  public socialReason: string;

  @ApiProperty({ name: 'state_inscription' })
  @Expose({ name: 'state_inscription' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(14)
  public stateInscription: string;

  @ApiProperty({ name: 'email' })
  @Expose({ name: 'email' })
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(90)
  public email: string;

  @ApiProperty({ name: 'phone' })
  @Expose({ name: 'phone' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(90)
  public phone: string;

  @ApiProperty({ name: 'address_id' })
  @Expose({ name: 'address_id' })
  @IsNotEmpty()
  @IsNumber()
  public addressId: number;
}
