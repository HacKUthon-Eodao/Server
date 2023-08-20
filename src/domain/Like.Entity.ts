import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User} from './user.entity'; 
import { Board } from './board.entity'; 

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.like)
  user: User;

  @ManyToOne(() => Board, board => board.like)
  board: Board;
}