import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '@Domain/entities/user.entity';
import { UserRepository } from '@Domain/repositories/user.repository';
import { JwtProtection } from '@Infrastructure/protections/jwt.protection';
import { CreateJwtUseCase } from '@Usecases/jwt/create-jwt.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [JwtService, JwtProtection, UserRepository, CreateJwtUseCase],
  exports: [CreateJwtUseCase],
})
export class JwtModule {}
