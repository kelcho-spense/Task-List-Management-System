import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { TasksModule } from './tasks/tasks.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { MyLoggerModule } from './my-logger/my-logger.module';
import { ListsModule } from './lists/lists.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make ConfigModule available to all modules
      envFilePath: '.env', // Load environment variables from .env file
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000, // 1 minute of time to live
        limit: 10, // 10 requests per TTL
      },
    ]),
    MyLoggerModule,
    UsersModule,
    DatabaseModule,
    TasksModule,
    ListsModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD, // Apply rate limiting to all routes
      useClass: ThrottlerGuard, // Use ThrottlerGuard as the rate limiting guard
    },
  ],
})
export class AppModule {}
