import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity()
@Unique(["currentUserId", "friendUserId"]) 
export class FriendEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  currentUserId: number;

  @Column()
  friendUserId: number;
}
