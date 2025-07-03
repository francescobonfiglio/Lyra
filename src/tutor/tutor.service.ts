import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tutor } from './entities/tutor.entity';
import { CreateTutorDto } from './dto/create-tutor.dto';
import { UpdateTutorDto } from './dto/update-tutor.dto';

@Injectable()
export class TutorService {
  constructor(
    @InjectRepository(Tutor)
    private tutorRepository: Repository<Tutor>,
  ) {}

  async create(createTutorDto: CreateTutorDto): Promise<Tutor> {
    const tutor = this.tutorRepository.create(createTutorDto);
    return this.tutorRepository.save(tutor);
  }

  findAll(): Promise<Tutor[]> {
    return this.tutorRepository.find();
  }

  async findOne(id: number): Promise<Tutor> {
    const tutor = await this.tutorRepository.findOneBy({ id });
    if (!tutor) throw new NotFoundException(`Tutor con id ${id} non trovato`);
    return tutor;
  }

  async update(id: number, updateTutorDto: UpdateTutorDto): Promise<Tutor> {
    await this.tutorRepository.update(id, updateTutorDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tutorRepository.delete(id);
  }
}
