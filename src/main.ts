import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.setGlobalPrefix('api');
	const config = app.get(ConfigService);
	const listenPort = config.get<number>('APP_LISTEN_PORT') || 3000;
	await app.listen(listenPort);
}
bootstrap();
