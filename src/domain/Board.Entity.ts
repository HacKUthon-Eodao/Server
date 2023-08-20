import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User.Entity'; 
import { AuditingField } from './AuditingField.Entity';



@Entity()
export class Board extends AuditingField{

    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(type => User, user => user.id)
    userId: User;
  
    @Column()
    title: string;
  
    @Column({ nullable: true })
    imageContentId: number | null;
  
    @Column({ nullable: true })
    content: string | null;

    like: number;
}