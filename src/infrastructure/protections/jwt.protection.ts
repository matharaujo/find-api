import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import * as path from 'path';

import { User } from '@Domain/entities/user.entity';
import { CreateJwtOutput } from '@Domain/ports/outputs/jwt/create-jwt.output.port';

const env = process.env.NODE_ENV ? `/.env.${process.env.NODE_ENV}` : '/.env';
dotenv.config({ path: path.resolve(process.cwd() + env) });

@Injectable()
export class JwtProtection {
  constructor(private jwtService: JwtService) {}

  public async signIn(user: User, password: string): Promise<string> {
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    return this.jwtService.signAsync(
      {
        sub: user.uuid,
        username: user.username,
      },
      {
        secret: process.env.JWT_SECRET,
      },
    );
  }
}
