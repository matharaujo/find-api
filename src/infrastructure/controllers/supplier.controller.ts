import { Controller, Post, HttpCode, HttpStatus, Body } from '@nestjs/common';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiConflictResponse,
} from '@nestjs/swagger';

import { ConflictError } from '@Infrastructure/errors/conflict.error';
import { InternalServerError } from '@Infrastructure/errors/internal-server.error';
import { CreateSupplierUseCase } from '@Usecases/supplier/create-supplier.usecase';
import { CreateSupplierOutput } from '@Domain/ports/outputs/supplier/create-supplier.output.port';
import { CreateSupplierInput } from '@Domain/ports/inputs/supplier/create-supplier.input.port';

@Controller('v1/suppliers')
@ApiTags('v1/suppliers')
export class SupplierController {
  constructor(private readonly createSupplierUseCase: CreateSupplierUseCase) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiConflictResponse({ type: ConflictError })
  @ApiInternalServerErrorResponse({ type: InternalServerError })
  @ApiCreatedResponse({ type: CreateSupplierOutput })
  public async createSupplier(
    @Body() input: CreateSupplierInput,
  ): Promise<CreateSupplierOutput> {
    return this.createSupplierUseCase.execute(input);
  }
}
