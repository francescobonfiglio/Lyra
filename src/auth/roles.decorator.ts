import { SetMetadata } from '@nestjs/common';

// Definisce i ruoli autorizzati su una rotta/metodo
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
