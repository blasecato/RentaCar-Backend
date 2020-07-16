import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { SignUpDto } from './dto/signUp.dto';
import { User } from '../entities/User';
import { Persona } from '../entities/Persona';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {

  constructor(
    @Inject('CryptoService') private readonly cryptoService,
    private readonly jwtService: JwtService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Persona) private readonly personaRepository: Repository<Persona>
  ) { }

  async getStructureToken(email: string) {
    return await this.personaRepository.createQueryBuilder("persona")
      .select(['persona.idPersona', 'persona.nombres', 'persona.apellidos', 'persona.cedula',
        'persona.fechaNacimiento', 'persona.direccion', 'persona.telefono', 'persona.fechaAfiliacion',
        'persona.EstadoPersona'])
      .addSelect(['User.idUser', 'User.email'])
      .innerJoin('persona.users', 'User')
      .leftJoinAndSelect("persona.genero", "genero")
      .leftJoinAndSelect("User.rolPersona", "rolpersona")
      .where("User.email = :email", { email },)
      .getOne();
  }

  async login(body: LoginDto) {
    const user = await this.userRepository.findOne({
      where: { email: body.email },
    });

    if (!user)
      return {
        error: 'USER_NOT_EXIST',
        detail: 'Tu correo electronico o contraseña no son válidos.',
      };
    // else if (user.state === 'inactive')
    //   return { error: 'USER_INACTIVE', detail: 'Usuario inactivo.' };

    return await this.getStructureToken(user.email);
  }

  async signUp(body: SignUpDto) {
    
    body.password = this.cryptoService.encrypt(body.password);
    
    const user = await this.userRepository.findOne({ where: { email: body.email } });
    console.log(user);

    const validatePerson = await this.personaRepository.findOne({
      where: { cedula: body.cedula },
    });
    console.log(validatePerson);
    

    if (user) {
      return { error: 'EMAIL_IN_USE', detail: 'Ese correo electronico ya está siendo utilizado.' };
    } else if (validatePerson) {
      return { error: 'IDENTIFICATION_CARD_IN_USE', detail: 'La cédula de ciudadanía ya está siendo utilizada.' };
    } else {
      try {
        const person = await this.personaRepository.save({
          nombres: body.nombres,
          apellidos: body.apellidos,
          cedula: body.cedula,
          fechaNacimiento: body.fechaNacimiento,
          telefono: body.telefono,
          direccion: body.direccion,
          fechaAfiliacion: body.fechaAfiliacion,
          estadoPersona: "1",
          idGenero: {id: body.idGenero}
        });
        console.log(person);

        console.log(person.idPersona);

        await this.userRepository.save({
          email: body.email,
          password: body.password,
          persona: { idPersona: person.idPersona },
          rolPersona: { idRolPersona: 1 }
        });

        return { success: 'OK' };
      } catch (error) {
        return { error };
      }
    }
  }

  async validateUser(token: string): Promise<any> {
    let payload: any = this.jwtService.decode(token);
    if (payload) {
      const user = await this.userRepository.findOne({
        select: ["idUser", "email"],
        where: { email: payload.user.email }
      })

      return { ...user };
    }

    return false;
  }

}
