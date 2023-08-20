import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import { AuditingField } from './auditingField.entity';




@Entity() 
export class User extends AuditingField { 
    
    @PrimaryGeneratedColumn()
    id: number;

    //kakaoToken: KakaoOauthToken;

    @Column({ nullable: false })
    nickname: String;

    imageContentId: number | null;

    like: number;

    

}