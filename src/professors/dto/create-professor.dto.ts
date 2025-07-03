import { IsInt, IsString, Length } from 'class-validator';

export class CreateProfessorDto {
  @IsString()
  @Length(1, 255)
  qualification: string;

  @IsInt()
  total_hrs: number;

  @IsInt()
  id_course: number;

  @IsInt()
  id_subjects: number;

  @IsInt()
  id_users: number;
}
