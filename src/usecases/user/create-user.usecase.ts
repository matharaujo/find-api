import { Injectable } from '@nestjs/common';

import { UserRepository } from '@Domain/repositories/user.repository';
import { CreateUserInput } from '@Domain/ports/inputs/user/create-user.input.port';
import { CreateUserOutput } from '@Domain/ports/outputs/user/create-user.output.port';
import { EncryptData } from '@Root/src/infrastructure/protections/data.protection';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(input: CreateUserInput): Promise<CreateUserOutput> {
    input.password = EncryptData(input.password);

    const transaction = await this.userRepository.save(
      input.name,
      input.username,
      input.email,
      input.password,
    );

    return { uuid: transaction.uuid };
  }
}
