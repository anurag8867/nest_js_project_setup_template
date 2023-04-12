import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CustomerModule } from '../modules/customer/customer.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { bk } from './constants';

@Module({
  imports: [
    CustomerModule,
    JwtModule.register({
      global: true,
      secret: bk.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
