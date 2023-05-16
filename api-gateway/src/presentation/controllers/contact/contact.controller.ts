import { Body, Controller, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { ClientProxyProvider } from 'src/providers/client-proxy.provider';

@Controller('contacts')
export class ContactController {
  constructor(private readonly clientProxyProvider: ClientProxyProvider) {}

  @Post(':type')
  handleAddAccount(
    @Body() addUserDTO: any,
    @Param('type') type: any,
  ): Observable<ClientProxy> {
    if (type === 'macapa') {
      return this.clientProxyProvider
        .handleUser()
        .emit('contact.type.macapa', addUserDTO);
    } else if (type === 'varejao') {
      return this.clientProxyProvider
        .handleUser()
        .emit('contact.type.varejao', addUserDTO);
    }
  }
}
