import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') // ✅ stringa tra virgolette
export class User { // ✅ Nome della classe in PascalCase e singolare
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name?: string;

  @Column({nullable: true })
  surname: string;

  @Column({nullable: true })
  dob: string;

  @Column({nullable: true })
  address: string;

  @Column({nullable: true })
  phoneNum: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true})
  username: string;

  @Column({nullable: true })
  password: string;
}
