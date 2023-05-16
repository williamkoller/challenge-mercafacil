import { Body, Controller, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { ClientProxyProvider } from '../../../providers/client-proxy.provider';
import { AddUserDTO } from '../../dtos/add-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly clientProxyProvider: ClientProxyProvider) {}

  @Post(':type')
  handleUser(
    @Body() addUserDTO: AddUserDTO,
    @Param('type') type: string,
  ): Observable<ClientProxy> {
    if (type === 'varejao') {
      return this.clientProxyProvider
        .handleUser()
        .emit('add.account.varejao', addUserDTO);
    } else if (type === 'macapa') {
      return this.clientProxyProvider
        .handleUser()
        .emit('add.account.macapa', addUserDTO);
    }
  }
}
