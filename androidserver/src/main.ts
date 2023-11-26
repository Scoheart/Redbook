import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  //传递类型NestExpressApplication
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //静态资源访问
  app.enableCors()
  app.useStaticAssets('public', { prefix: '/public' });
  await app.listen(3000);
}
bootstrap();
