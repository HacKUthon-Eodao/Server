import { Entity, PrimaryGeneratedColumn} from 'typeorm';
import { AuditingField } from './AuditingField.Entity';




@Entity() 
export class User extends AuditingField { 
    
    @PrimaryGeneratedColumn()
    id: number;

    //kakaoToken: KakaoOauthToken;

    nickname: String;

    imageContentId: number | null;

    like: number;

    

}