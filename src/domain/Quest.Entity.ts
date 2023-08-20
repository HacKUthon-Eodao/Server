import { Entity, PrimaryGeneratedColumn} from 'typeorm';




@Entity() 
export class Quest { 
    
    @PrimaryGeneratedColumn()
    id: number;

    name: String;

    

}