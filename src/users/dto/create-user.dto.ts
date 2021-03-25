import { IsEmail, IsInt, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateUserDto {

    @IsString({message : 'Name field is required'})
    name: string;

    @IsString({message : 'Surname field is required'})
    surname: string;

    @IsOptional()
    @IsInt()
    phone: Number;

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}
