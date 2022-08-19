import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  console.log(process.env.APP_PORT,'PORT');
  await app.listen(process.env.APP_PORT);
}
bootstrap();
