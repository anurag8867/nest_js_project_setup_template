import { Injectable } from '@nestjs/common';
import { GetHealthCheckStatusResponseDto } from './app.dto';

@Injectable()
export class AppService {
  getHealthStatus(): GetHealthCheckStatusResponseDto {
    return {
      success: true,
      healthcheck: {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now(),
      },
    };
  }
}
