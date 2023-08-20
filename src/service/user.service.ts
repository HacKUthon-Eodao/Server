import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from '../domain/board.entity';
import { CurrentLoginUserDTO } from 'src/controller/dto/user.dto';
import { User } from 'src/domain/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Board)
    private userRepository: Repository<User>, // BoardRepository 주입
  ) {}

  
  async createOne(kakaoToken: string, nickname: string, profileImageId: number): Promise<CurrentLoginUserDTO> {
    return this.userRepository.insert(new User())
  }

  async findOne(token: string): Promise<CurrentLoginUserDTO | undefined> {
    return this.userRepository.findOne({
        where: { kakaoToken: token }
    });
  }
}
