import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './infra/ioc/user.module';
import { AuthModule } from './infra/ioc/auth.module';
import { ContactModule } from './infra/ioc/contact.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    UserModule,
    AuthModule,
    ContactModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
