import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.repo.findOneBy({ id });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  create(dto: CreateUserDto): Promise<User> {
    const user = this.repo.create(dto);
    return this.repo.save(user);
    
  }
  async findByEmail(email: string): Promise<User | undefined> {
  return this.repo.findOneBy({ email });
}

  async findByEmailOrUsername(email: string, username: string): Promise<User | undefined> {
  return this.repo
    .createQueryBuilder('user')
    .where('user.email = :email OR user.username = :username', { email, username })
    .getOne();
  }

}