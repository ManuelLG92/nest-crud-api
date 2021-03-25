import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import {UsersModule} from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    TaskModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
