import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity()
@Unique(["currentUserId", "friendUserId"]) 
export class Friend {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  currentUserId: number;

  @Column()
  friendUserId: number;
}
