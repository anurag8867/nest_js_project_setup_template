import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class GetHealthCheckStatusResponseDto {
  @ApiProperty({
    type: Boolean,
    description: 'Shows the status of the response',
  })
  success: boolean;
  @ApiProperty({
    type: Object,
    description: 'shows internal details of the response',
  })
  healthcheck: { uptime: number; message: string; timestamp: number };
}
