import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class CreateStudentDto {
  @IsInt()
  @IsPositive()
  absence_hrs: number;

  @IsInt()
  @IsPositive()
  courseId: number; // ID del corso a cui associare lo studente
}

