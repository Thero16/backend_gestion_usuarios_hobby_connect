import { Handler } from 'aws-lambda';
import serverlessExpress from '@vendia/serverless-express';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

let server: Handler;

async function bootstrap() {
  if (!server) {
    const expressApp = express();
    const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
    app.enableCors();
    await app.init();
    server = serverlessExpress({ app: expressApp });
  }
  return server;
}

export const handler: Handler = async (event, context) => {
  const server = await bootstrap();
  return server(event, context);
};
