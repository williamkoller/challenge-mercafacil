import { Module } from '@nestjs/common';
import { ClientProxyProvider } from './client-proxy.provider';

@Module({
  providers: [ClientProxyProvider],
  exports: [ClientProxyProvider],
})
export class ClientProxyModule {}
