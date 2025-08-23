import { IsDateString, IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsEmail()
    email:string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsString()
    @IsOptional()
    biography: string;

    @IsDateString()
    @IsNotEmpty()
    dateOfBirth: string;

    @IsString()
    @IsNotEmpty()
    country: string;
}
