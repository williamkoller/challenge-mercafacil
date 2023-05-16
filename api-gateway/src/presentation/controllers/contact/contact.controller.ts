import { Body, Controller, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AddContactDTO } from 'src/presentation/dtos/add-contact.dto';
import { ClientProxyProvider } from 'src/providers/client-proxy.provider';

@Controller('contacts')
export class ContactController {
  constructor(private readonly clientProxyProvider: ClientProxyProvider) {}

  @Post(':type')
  handleContact(
    @Body() addContactDTO: AddContactDTO,
    @Param('type') type: string,
  ): Observable<ClientProxy> {
    if (type === 'macapa') {
      return this.clientProxyProvider
        .handleContact()
        .emit('contacts.type.macapa', addContactDTO);
    } else if (type === 'varejao') {
      return this.clientProxyProvider
        .handleContact()
        .emit('contacts.type.varejao', addContactDTO);
    }
  }
}
