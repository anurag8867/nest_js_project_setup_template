import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AppConfigModule } from './config/app/configuration.module';
import { CustomerModule } from './modules/customer/customer.module';
import { ConfigModule } from '@nestjs/config';
import { ExceptionsLoggerFilter } from './util/exception/base-exception-filter';
import { APP_FILTER } from '@nestjs/core';

/**
 * Import and provide app related classes.
 *
 * @module
 */
@Module({
  imports: [CustomerModule, AppConfigModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: ExceptionsLoggerFilter,
    },
  ],
})
export class AppModule {}
