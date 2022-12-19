import { NestApplication, NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(AppModule, {
    bodyParser: true,
  });

  const host = process.env.RABBITMQ_HOST;
  const user = process.env.RABBITMQ_USER;
  const password = process.env.RABBITMQ_PASSWORD;
  const queueName = process.env.RABBITMQ_QUEUE_NAME;

  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${user}:${password}@${host}`],
      queue: queueName,
      queueOptions: {
        durable: true,
      },
    },
  });

  app.enableCors();

  app.setGlobalPrefix('api');

  await app.startAllMicroservices();

  await app.listen(3001);
}
bootstrap();
