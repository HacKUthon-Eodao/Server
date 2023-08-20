import { Controller, Get, Post, Put, Delete, Param, Body, Headers, Req } from '@nestjs/common';
import { CurrentLoginUserDTO } from './dto/user.dto';
import { UserService } from 'src/service/user.service';



@Controller('users')
export class BoardController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  async getCurrentUser(@Req() request: Request): Promise<CurrentLoginUserDTO> {
    const kakaoToken = request.headers.get('Authorization').split(" ")[1];
    return await this.userService.findOne(kakaoToken);
  }

}

