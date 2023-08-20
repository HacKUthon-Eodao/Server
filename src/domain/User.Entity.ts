import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import { AuditingField } from './auditingField.entity';

@Entity() 
export class User extends AuditingField { 
    
    @PrimaryGeneratedColumn()
    id: number;

    kakaoToken: string;

    @Column({ nullable: false })
    nickname: string;

    profileImageId: number | null;



}