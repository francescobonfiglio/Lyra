import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Professor } from './entities/professor.entity';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';

@Injectable()
export class ProfessorService {
  constructor(
    @InjectRepository(Professor)
    private professorRepository: Repository<Professor>,
  ) {}

  async create(createProfessorDto: CreateProfessorDto): Promise<Professor> {
    const professor = this.professorRepository.create(createProfessorDto);
    return this.professorRepository.save(professor);
  }

  findAll(): Promise<Professor[]> {
    return this.professorRepository.find();
  }

  async findOne(id: number): Promise<Professor> {
    const professor = await this.professorRepository.findOneBy({ id });
    if (!professor) throw new NotFoundException(`Professor con id ${id} non trovato`);
    return professor;
  }

  async update(id: number, updateProfessorDto: UpdateProfessorDto): Promise<Professor> {
    await this.professorRepository.update(id, updateProfessorDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.professorRepository.delete(id);
  }
}
