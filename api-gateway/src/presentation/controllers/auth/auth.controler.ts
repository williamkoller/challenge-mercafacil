import { Body, Controller, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { ClientProxyProvider } from 'src/providers/client-proxy.provider';

@Controller('auth')
export class AuthController {
  constructor(private readonly clientProxyProvider: ClientProxyProvider) {}

  @Post('login')
  handleAddAccount(@Body() addUserDTO: any): Observable<ClientProxy> {
    return this.clientProxyProvider.handleUser().emit('auth.login', addUserDTO);
  }
}
