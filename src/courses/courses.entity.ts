import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Student } from '../students/entities/student.entity';
import { Subject } from '../subjects/entities/subject.entity';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({nullable: true })
  total_hrs: number;

  @Column()
  frontal_hrs: number;

  @Column()
  apprenticeship_hrs: number;

  @OneToMany(() => Subject, subject => subject.course)
  subjects: Subject[];

  @OneToMany(() => Student, student => student.course)
  students: Student[];
}
