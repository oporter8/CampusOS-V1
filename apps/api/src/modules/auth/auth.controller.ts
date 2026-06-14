import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() body: RegisterDto,
  ) {
    const hashedPassword =
      await this.authService.hashPassword(
        body.password,
      );

return {
  success: true,
  user: {
    email: body.email,
    name: body.name,
  },
};
    
  @Post('login')
  async login(
    @Body() body: LoginDto,
  ) {
    const token =
      this.authService.generateToken(
        'temp-user-id',
        body.email,
      );

    return {
      success: true,
      token,
    };
  }
}
