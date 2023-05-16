import { Body, Controller, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AuthLoginDTO } from 'src/presentation/dtos/auth-login.dto';
import { ClientProxyProvider } from 'src/providers/client-proxy.provider';

@Controller('auth')
export class AuthController {
  constructor(private readonly clientProxyProvider: ClientProxyProvider) {}

  @Post('login/:type')
  handleLogin(
    @Body() authLoginDTO: AuthLoginDTO,
    @Param('type') type: string,
  ): Observable<ClientProxy> {
    if (type === 'varejao') {
      return this.clientProxyProvider
        .handleUser()
        .emit('auth.login.varejao', authLoginDTO);
    } else if (type === 'macapa') {
      return this.clientProxyProvider
        .handleUser()
        .emit('auth.login.macapa', authLoginDTO);
    }
  }
}
