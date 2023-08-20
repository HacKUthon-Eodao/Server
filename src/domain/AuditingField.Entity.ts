import { Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export abstract class AuditingField{

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date | null;
  
}
