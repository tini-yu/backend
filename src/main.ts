import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //:number проверяет, что port это number ещё на этапе написания кода
  const port: number = parseInt(process.env.PORT); //parseInt преобразует строку в целочисленное число
  console.log(port);
  const server = process.env.SERVER; // take port and server info from .env
  await app.listen(port, server);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
