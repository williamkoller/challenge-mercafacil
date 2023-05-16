import { IsNotEmpty, IsString } from 'class-validator';

export class AddContactDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  cellPhone: string;
}
