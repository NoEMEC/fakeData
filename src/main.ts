import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from 'config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const serverConfig = config.get('server');
    const port = process.env.PORT || serverConfig.port;
    await app.listen(port);
}
bootstrap();
