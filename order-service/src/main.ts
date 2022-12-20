import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(AppModule, {
    bodyParser: true,
  });

  app.enableCors();

  app.setGlobalPrefix('api');

  await app.listen(3002);
}
bootstrap();
