import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),  // Prende JWT da header Authorization Bearer
      ignoreExpiration: false,
      secretOrKey: 'YOUR_SECRET_KEY',  // Cambia con la tua chiave segreta, idealmente usa variabile ambiente
    });
  }

  async validate(payload: any) {
    // Questo metodo viene chiamato se il token è valido
    // Il valore restituito sarà assegnato a request.user
    return { userId: payload.sub, email: payload.email, role: payload.role };
  }
}
