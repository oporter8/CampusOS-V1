import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async register(
    email: string,
    password: string,
    name?: string,
  ) {
    const existingUser =
      await this.usersService.findByEmail(
        email,
      );

    if (existingUser) {
      throw new ConflictException(
        'User already exists',
      );
    }

    const passwordHash =
      await bcrypt.hash(password, 12);

    const user =
      await this.usersService.createUser(
        email,
        passwordHash,
        name,
      );

    const token =
      this.generateToken(
        user.id,
        user.email,
      );

    return {
      user,
      token,
    };
  }

  async login(
    email: string,
    password: string,
  ) {
    const user =
      await this.usersService.findByEmail(
        email,
      );

    if (!user) {
      throw new UnauthorizedException(
        'Invalid credentials',
      );
    }

    const valid =
      await bcrypt.compare(
        password,
        user.passwordHash,
      );

    if (!valid) {
      throw new UnauthorizedException(
        'Invalid credentials',
      );
    }

    const token =
      this.generateToken(
        user.id,
        user.email,
      );

    return {
      user,
      token,
    };
  }

  generateToken(
    userId: string,
    email: string,
  ) {
    return this.jwtService.sign({
      sub: userId,
      email,
    });
  }
}
