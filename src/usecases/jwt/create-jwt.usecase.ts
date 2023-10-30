import { Injectable } from '@nestjs/common';

import { JwtProtection } from '@Infrastructure/protections/jwt.protection';
import { UserRepository } from '@Domain/repositories/user.repository';
import { CreateJwtInput } from '@Domain/ports/inputs/jwt/create-jwt.input.port';
import { CreateJwtOutput } from '@Domain/ports/outputs/jwt/create-jwt.output.port';

@Injectable()
export class CreateJwtUseCase {
  constructor(
    private readonly jwtProtection: JwtProtection,
    private readonly userRepository: UserRepository,
  ) {}

  public async execute(input: CreateJwtInput): Promise<CreateJwtOutput> {
    const transaction = await this.userRepository.findOneByUsername(
      input.username,
    );

    const token = await this.jwtProtection.signIn(transaction, input.password);

    return { token };
  }
}
