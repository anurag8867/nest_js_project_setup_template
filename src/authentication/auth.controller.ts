import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  generateToken(@Body() generateTokenDto: Record<string, any>) {
    return this.authService.generateToken(
      generateTokenDto.username,
      generateTokenDto.userId,
    );
  }
}
