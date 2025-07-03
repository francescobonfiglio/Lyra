import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Professor } from './entities/professor.entity';
import { ProfessorService } from './professors.service';
import { ProfessorController } from './professors.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Professor])],
  providers: [ProfessorService],
  controllers: [ProfessorController],
  exports: [ProfessorService],
})
export class ProfessorModule {}
