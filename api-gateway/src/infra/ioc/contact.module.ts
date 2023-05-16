import { Module } from '@nestjs/common';
import { ContactController } from '../../presentation/controllers/contact/contact.controller';
import { ClientProxyModule } from '../../providers/client-proxy.module';

@Module({
  imports: [ClientProxyModule],
  controllers: [ContactController],
})
export class ContactModule {}
