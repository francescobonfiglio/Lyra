import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Course } from '../../courses/courses.entity'; // aggiorna il path

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', default: 0 })
  absence_hrs: number;

  @ManyToOne(() => Course, course => course.students, { eager: true })
  @JoinColumn({ name: 'course_id' }) // aggiunge foreign key nella tabella
  course: Course;
}
