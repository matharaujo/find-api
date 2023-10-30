import { Controller, Post, HttpCode, HttpStatus, Body } from '@nestjs/common';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';

import { BadRequestError } from '@Infrastructure/errors/bad-request.error';
import { InternalServerError } from '@Infrastructure/errors/internal-server.error';
import { CreateUserUseCase } from '@Usecases/user/create-user.usecase';
import { CreateUserOutput } from '@Domain/ports/outputs/user/create-user.output.port';
import { CreateUserInput } from '@Domain/ports/inputs/user/create-user.input.port';

@Controller('v1/users')
@ApiTags('v1/users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBadRequestResponse({ type: BadRequestError })
  @ApiInternalServerErrorResponse({ type: InternalServerError })
  @ApiCreatedResponse({ type: CreateUserOutput })
  public async createUser(
    @Body() input: CreateUserInput,
  ): Promise<CreateUserOutput> {
    return this.createUserUseCase.execute(input);
  }
}
