import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_PIPE } from '@nestjs/core';
import { ProcessModule } from './Process/process.module';

@Module({
  imports: [ProcessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
