import {
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Body,
  UnauthorizedException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { BadRequestError } from '@Infrastructure/errors/bad-request.error';
import { InternalServerError } from '@Infrastructure/errors/internal-server.error';
import { CreateJwtOutput } from '@Domain/ports/outputs/jwt/create-jwt.output.port';
import { CreateJwtInput } from '@Domain/ports/inputs/jwt/create-jwt.input.port';
import { CreateJwtUseCase } from '@Usecases/jwt/create-jwt.usecase';

@Controller('v1/jwt')
@ApiTags('v1/jwt')
export class JwtController {
  constructor(private readonly createJwtUseCase: CreateJwtUseCase) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBadRequestResponse({ type: BadRequestError })
  @ApiUnauthorizedResponse({ type: UnauthorizedException })
  @ApiInternalServerErrorResponse({ type: InternalServerError })
  @ApiCreatedResponse({ type: CreateJwtOutput })
  public async createJwt(
    @Body() input: CreateJwtInput,
  ): Promise<CreateJwtOutput> {
    return this.createJwtUseCase.execute(input);
  }
}
