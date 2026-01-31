import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { JwtService } from "@nestjs/jwt";
import { AuthLoginDto } from "../dtos/auth/auth-login.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) { }

    async login(loginDto: AuthLoginDto) {
        const user = await this.userService.findByEmail(loginDto.email);

        if (!user) {
            throw new UnauthorizedException('Email ou senha inválidos');
        }

        const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Email ou senha inválidos');
        }

        const payload = {
            sub: user.id,
            email: user.email,
            name: user.name,
        };

        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}