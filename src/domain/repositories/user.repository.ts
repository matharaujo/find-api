import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as uuid from 'uuid';

import { User } from '@Domain/entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userManager: Repository<User>,
  ) {}

  public save = async (
    name: string,
    username: string,
    email: string,
    password: string,
  ): Promise<User> =>
    this.userManager.save({
      uuid: uuid.v4(),
      name,
      username,
      email,
      password,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdUser: 'find-api',
      updatedUser: 'find-api',
    });
}
