import { Module } from '@nestjs/common';
import { UserController } from '../../presentation/controllers/user/user.controller';
import { ClientProxyModule } from '../../providers/client-proxy.module';

@Module({
  imports: [ClientProxyModule],
  controllers: [UserController],
})
export class UserModule {}
