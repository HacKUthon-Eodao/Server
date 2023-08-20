import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/user.entity';
import { ConfigModule } from '@nestjs/config';
import { AuditingField } from './domain/auditingField.entity';
import { Board } from './domain/board.entity';
import { Friend } from './domain/friend.entity';
import { Like } from 'typeorm';
import { Quest } from './domain/quest.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }), 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
      entities: [AuditingField,Board,Friend,Like,Quest,User],
      autoLoadEntities: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
