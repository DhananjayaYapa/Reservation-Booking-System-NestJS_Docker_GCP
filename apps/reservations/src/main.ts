import * as dns from 'node:dns';
import { NestFactory } from '@nestjs/core';
import { ReservationsModule } from './reservations/reservations.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';

dns.setServers(['1.1.1.1', '1.0.0.1', '8.8.8.8']);

async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useLogger(app.get(Logger));
  const configService = app.get(ConfigService);
  await app.listen(configService.get<number>('PORT') || 3000);
}
bootstrap();
