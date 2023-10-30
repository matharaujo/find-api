import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { GetJWTOutput } from '@Root/src/domain/ports/outputs/jwt/get-jwt.output.port';

@Injectable()
export class JwtProtection {
  constructor(private jwtService: JwtService) {}

  public async signIn(user: any, password: any): Promise<GetJWTOutput> {
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    return {
      accessToken: await this.jwtService.signAsync({
        sub: user.userId,
        username: user.username,
      }),
    };
  }
}
