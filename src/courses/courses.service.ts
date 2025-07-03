import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './courses.entity'; // ✅ PascalCase
import { CreateCoursesDto } from './dto/create-courses.dto'; // ✅ PascalCase

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly repo: Repository<Course>,
  ) {}

  findAll(): Promise<Course[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<Course> {
    const course = await this.repo.findOneBy({ id });
    if (!course) throw new NotFoundException('Course not found');
    return course;
  }

  create(dto: CreateCoursesDto): Promise<Course> {
    const course = this.repo.create(dto);
    return this.repo.save(course);
  }
}
