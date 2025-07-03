import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './users/user.module';
import { CoursesModule } from './courses/courses.module';
import { AuthModule } from './auth/auth.module';
import { ExampleModule } from './example/example.module';
import { StudentsModule } from './students/students.module';
import { TutorModule } from './tutor/tutor.module';
import { ProfessorModule } from './professors/professors.module';  // Plurale
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubjectsModule } from './subjects/subjects.module';

@Module({
  imports: [
    ExampleModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,  // sincronizza schema in dev
    }),
    UsersModule,
    CoursesModule,
    AuthModule,
    StudentsModule,
    TutorModule,
    ProfessorModule,  // Modulo Professors corretto
    SubjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
