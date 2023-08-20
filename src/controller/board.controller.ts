import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BoardService } from '../service/board.service';
import { Board } from '../domain/board.entity'; 

@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  create(@Body() boardData: Partial<Board>): Promise<Board> {
    return this.boardService.create(boardData);
  }

  @Get()
  findAll(): Promise<Board[]> {
    return this.boardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Board | undefined> {
    return this.boardService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() boardData: Partial<Board>): Promise<Board | undefined> {
    return this.boardService.update(id, boardData);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.boardService.remove(id);
  }
}
