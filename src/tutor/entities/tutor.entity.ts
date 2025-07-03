import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tutors')
export class Tutor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  surname: string;

  @Column()
  id_user: number;
}
