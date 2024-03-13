import { Controller, Post, HttpCode, HttpStatus, Body } from '@nestjs/common';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiConflictResponse,
  ApiPreconditionFailedResponse,
} from '@nestjs/swagger';

import { ConflictError } from '@Infrastructure/errors/conflict.error';
import { InternalServerError } from '@Infrastructure/errors/internal-server.error';
import { PreconditionFailedError } from '@Infrastructure/errors/precondition-failed.error';
import { CreateStoreUseCase } from '@Usecases/store/create-store.usecase';
import { CreateStoreOutput } from '@Domain/ports/outputs/store/create-store.output.port';
import { CreateStoreInput } from '@Domain/ports/inputs/store/create-store.input.port';

@Controller('v1/stores')
@ApiTags('v1/stores')
export class StoreController {
  constructor(private readonly createStoreUseCase: CreateStoreUseCase) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiConflictResponse({ type: ConflictError })
  @ApiPreconditionFailedResponse({ type: PreconditionFailedError })
  @ApiInternalServerErrorResponse({ type: InternalServerError })
  @ApiCreatedResponse({ type: CreateStoreOutput })
  public async createStore(
    @Body() input: CreateStoreInput,
  ): Promise<CreateStoreOutput> {
    return this.createStoreUseCase.execute(input);
  }
}
