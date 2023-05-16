import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './shared/filters/http-all-exception.filter';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('API Varejao');
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RMQ_URL],
        queue: process.env.RMQ_QUEUE_CONTACT,
        queueOptions: {
          durable: false,
        },
        noAck: false,
      },
    },
  );

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new HttpExceptionFilter());

  const config = app.get<ConfigService>(ConfigService);
  const port = config.get<number>('PORT');

  await app.listen();
  logger.log(`Microservices running at port: ${port}`);
}
bootstrap();
