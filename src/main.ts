import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle('Nest API').setDescription('the description').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/_swagger', app, document);

  await app.listen(3000);
}
bootstrap();
