import { IsNumber, IsString } from 'class-validator';

export class CreateUserRequestDTO {
    @IsString()
    kakaoToken: string;
    @IsString()
    nickname: string;
    @IsString()
    profileImage: string;
}


export class CurrentLoginUserDTO {
    @IsNumber()
    id: number;
    @IsString()
    nickname: string;
    @IsNumber()
    profileImageId: number;
}