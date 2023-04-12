import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GetHealthCheckStatusResponseDto } from './app.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Health')
@Controller('/health')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHealthStatus(): GetHealthCheckStatusResponseDto {
    return this.appService.getHealthStatus();
  }
}
