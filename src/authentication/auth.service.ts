import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async generateToken(username, userId) {
    if (!username) {
      throw new BadRequestException(`UserName is missing`);
    }
    if (!userId) {
      throw new BadRequestException(`UserId is missing`);
    }
    const payload = { username: username, sub: userId };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
