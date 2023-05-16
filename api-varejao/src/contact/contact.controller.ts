import { Controller, Logger } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  Payload,
  RmqContext,
  RpcException,
} from '@nestjs/microservices';
import { ContactService } from './contact.service';

@Controller()
export class ContactController {
  private logger = new Logger(ContactController.name);
  constructor(private readonly contactService: ContactService) {}

  @EventPattern('contacts.type.varejao')
  async handleContact(
    @Payload() payload: Record<any, any>,
    @Ctx() ctx: RmqContext,
  ) {
    const channel = ctx.getChannelRef();
    const originalMessage = ctx.getMessage();
    const content = originalMessage.content;
    const { data } = JSON.parse(content.toString());

    try {
      await this.contactService.addContacts(data);
      await channel.ack(originalMessage);
    } catch (error) {
      this.logger.log(`Error: ${JSON.stringify(error.message)}`);
      await channel.ack(originalMessage);
      throw new RpcException(error);
    }
  }
}
