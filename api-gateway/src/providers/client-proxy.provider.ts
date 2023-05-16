import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class ClientProxyProvider {
  constructor(private readonly cfService: ConfigService) {}

  handleUser(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [this.cfService.get<string>('RMQ_URL')],
        queue: this.cfService.get<string>('RMQ_QUEUE_USER'),
        queueOptions: {
          durable: false,
        },
        noAck: false,
      },
    });
  }

  handleContact(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [this.cfService.get<string>('RMQ_URL')],
        queue: this.cfService.get<string>('RMQ_QUEUE_CONTACT'),
        queueOptions: {
          durable: false,
        },
        noAck: false,
      },
    });
  }
}
