import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  const PORT = 3000;
  const HOST = 'localhost';
  app.listen(PORT, () => {
    logger.verbose(
      `The server is on http://${HOST}:${PORT}(${process.env.NODE_ENV})`,
    );
  });
}
bootstrap();
