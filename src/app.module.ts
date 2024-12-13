import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { TasksModule } from './tasks/tasks.module';
import { EmployeesModule } from './employees/employees.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make ConfigModule available to all modules
      envFilePath: '.env', // Load environment variables from .env file
    }),
    UsersModule,
    DatabaseModule,
    TasksModule,
    EmployeesModule,
    ThrottlerModule.forRoot([
      {
        ttl: 60000, // 1 minute of time to live
        limit: 10, // 10 requests per TTL
      },
    ]),
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
