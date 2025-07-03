import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('dashboard')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ExampleController {

  @Get('studente')
  @Roles('studente')
  getStudente(@Req() req) {
    return `Benvenuto studente, userId: ${req.user.userId}`;
  }

  @Get('docente')
  @Roles('docente')
  getDocente(@Req() req) {
    return `Benvenuto docente, userId: ${req.user.userId}`;
  }

  @Get('tutor')
  @Roles('tutor')
  getTutor(@Req() req) {
    return `Benvenuto tutor, userId: ${req.user.userId}`;
  }
}
