import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Subject } from '../../subjects/entities/subject.entity';

@Entity('professors')
export class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  qualification: string;

  @Column('int')
  total_hrs: number;

  @Column('int')
  id_course: number;

  @Column()
  id_subjects: number;

  @Column('int')
  id_users: number;

  @OneToMany(() => Subject, subject => subject.professor, { nullable: true })
  subjects: Subject[];
}

