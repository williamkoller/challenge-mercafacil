import { Module } from '@nestjs/common';
import { AuthController } from 'src/presentation/controllers/auth/auth.controler';
import { ClientProxyModule } from 'src/providers/client-proxy.module';

@Module({
  imports: [ClientProxyModule],
  controllers: [AuthController],
})
export class AuthModule {}
