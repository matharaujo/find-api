import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as dotenv from 'dotenv';
import * as path from 'path';

const env = process.env.NODE_ENV ? `/.env.${process.env.NODE_ENV}` : '/.env';
dotenv.config({ path: path.resolve(process.cwd() + env) });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as any,
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      logging: Boolean(process.env.DATABASE_LOGGING),
      entities: ['dist/**/entities/*.js'],
      migrationsTableName: 'migrations',
      migrations: ['dist/src/database/migrations/*.js'],
      namingStrategy: new SnakeNamingStrategy(),
    }),
  ],
})
export class DatabaseConfiguration {}
