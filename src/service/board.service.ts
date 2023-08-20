import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from '../domain/board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>, // BoardRepository 주입
  ) {}

  async create(boardData: Partial<Board>): Promise<Board> {
    const board = this.boardRepository.create(boardData);
    return this.boardRepository.save(board);
  }

  async findAll(): Promise<Board[]> {
    return this.boardRepository.find();
  }


  async findOne(id: number): Promise<Board | undefined> {
    return this.boardRepository.findOne({
        where: { id }
    }); // 수정된 부분
  }
  

  async update(id: number, boardData: Partial<Board>): Promise<Board | undefined> {
    await this.boardRepository.update(id, boardData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.boardRepository.delete(id);
  }

}
