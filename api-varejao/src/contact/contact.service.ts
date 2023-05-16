import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Contact } from './entities/contact.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly repository: Repository<Contact>,
  ) {}

  async addContacts(datas: Record<any, any>) {
    const { contacts } = datas;
    console.log({ contacts });
    const contactsCreate = await this.repository
      .createQueryBuilder()
      .insert()
      .into(Contact)
      .values(contacts)
      .execute();

    return contactsCreate;
  }
}
