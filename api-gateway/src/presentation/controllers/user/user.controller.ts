import { Body, Controller, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { ClientProxyProvider } from '../../../providers/client-proxy.provider';
import { AddUserDTO } from '../dtos/add-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly clientProxyProvider: ClientProxyProvider) {}

  @Post()
  handleAddAccount(@Body() addUserDTO: AddUserDTO): Observable<ClientProxy> {
    return this.clientProxyProvider
      .handleUser()
      .emit('add.account', addUserDTO);
  }
}
