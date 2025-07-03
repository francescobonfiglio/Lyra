import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Course } from '../../courses/courses.entity';
import { Professor } from '../../professors/entities/professor.entity';

@Entity('subjects')
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'int', nullable: true })
  total_hrs: number | null;


  @ManyToOne(() => Course, course => course.subjects, { eager: true })
  @JoinColumn({ name: 'id_course' })
  course: Course;

  @ManyToOne(() => Professor, professor => professor.subjects, { eager: true, nullable: true})
  @JoinColumn({ name: 'id_professors' })
  professor: Professor;
}

