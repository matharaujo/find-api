import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '@Root/src/domain/entities/user.entity';
import { UserRepository } from '@Domain/repositories/user.repository';
import { CreateUserUseCase } from '@Usecases/user/create-user.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserRepository, CreateUserUseCase],
  exports: [CreateUserUseCase],
})
export class UserModule {}
