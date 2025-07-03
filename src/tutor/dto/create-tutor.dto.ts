import { IsInt, IsString, Length } from 'class-validator';

export class CreateTutorDto {
  @IsString()
  @Length(1, 100)
  name: string;

  @IsString()
  @Length(1, 100)
  surname: string;

  @IsInt()
  id_user: number;
}

