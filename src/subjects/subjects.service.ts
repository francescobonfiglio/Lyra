import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './entities/subject.entity';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
  ) {}

  async create(createSubjectDto: CreateSubjectDto) {
    // Crea l'oggetto subject senza relazioni, useremo solo gli id
    const subject = this.subjectRepository.create({
      name: createSubjectDto.name,
      total_hrs: createSubjectDto.total_hrs,
      course: { id: createSubjectDto.id_course },
      professor: { id: createSubjectDto.id_professors },
    });
    return this.subjectRepository.save(subject);
  }

  findAll() {
    return this.subjectRepository.find();
  }

  findOne(id: number) {
    return this.subjectRepository.findOneBy({ id });
  }

  async update(id: number, updateSubjectDto: UpdateSubjectDto) {
    await this.subjectRepository.update(id, {
      ...updateSubjectDto,
      ...(updateSubjectDto.id_course && { course: { id: updateSubjectDto.id_course } }),
      ...(updateSubjectDto.id_professors && { professor: { id: updateSubjectDto.id_professors } }),
    });
    return this.findOne(id);
  }

  remove(id: number) {
    return this.subjectRepository.delete(id);
  }
}
