import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User} from './User.Entity'; 
import { Board } from './Board.Entity'; 

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.like)
  user: User;

  @ManyToOne(() => Board, board => board.like)
  board: Board;
}