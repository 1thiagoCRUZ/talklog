import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { dataSourceOptions } from './database/config/db';
import { NoteModule } from './modules/note.module';
import { TaskModule } from './modules/task.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    NoteModule,
    TaskModule,
    AuthModule,
    JwtModule
  ],
})
export class AppModule { }
