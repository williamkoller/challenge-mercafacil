import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class AddContactDTO {
  @IsArray()
  contacts: Contact[];
}

export class Contact {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  cellphone: string;
}
