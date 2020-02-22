import { IsAlphanumeric, IsAscii } from 'class-validator';

export class User {

    userId: number;

    @IsAlphanumeric()
    userName: string;

    @IsAscii()
    password: string;
}