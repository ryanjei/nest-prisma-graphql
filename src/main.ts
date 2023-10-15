import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORSを有効にし、必要に応じて設定します
  app.enableCors({
    origin: 'http://localhost:3000', // フロントエンドの実際のオリジンに置き換えてください
    methods: 'GET,POST',
    credentials: true, // リクエストにクッキーを含める必要がある場合に設定
  });

  await app.listen(3001, () => {
    console.log(`
    🚀 Server ready at: http://localhost:3001/graphql
    `);
  });
}
bootstrap();
