import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class AuthLoginDto {
    @IsEmail({}, { message: 'Invalid email' })
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}