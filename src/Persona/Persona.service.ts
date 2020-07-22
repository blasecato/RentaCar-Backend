import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Model} from 'mysql'
import { Persona } from '../entities/Persona';
import { User } from '../entities/User';

@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(Persona) private readonly personaRepository: Repository<Persona>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<Persona[]> {
    return await this.personaRepository.find();
  }

  // async getById(id: string): Promise<Genero> {
  //   return await this.generoRepository.find({Genero => Genero.id === id });  
  // }

  getById(id) {
    return this.personaRepository.createQueryBuilder()
    .select("idPersona", "idPersona")
    .addSelect("nombres", "nombres")
    .addSelect("apellidos", "apellidos")
    .addSelect("cedula", "cedula")
    .addSelect("telefono", "telefono")
    .addSelect("direccion", "direccion")
    .where("idPersona = :ids", { ids: id })
    .execute();
  }

  getByEmail(email) {
    return this.userRepository.createQueryBuilder()
    .select("idUser", "id")
    .addSelect("email", "email")
    .addSelect("password", "password")
    .addSelect("fk_IDRolPersona", "fk_IDRolPersona")
    .addSelect("fk_idPersona", "fk_idPersona")
    .where("email = :emails", { emails: email })
    .execute();
  }
  
//   create(genero) {
//     return this.generoRepository.save({ ...genero, fecha_registro: new Date() });
//   }

//   delete(id) {
//     return this.generoRepository.createQueryBuilder()
//     .delete()
//     .from(Genero)
//     .where("id = :ids", { ids: id })
//     .execute();
//   }
  
  // async update(id, Genero): Promise<Genero>{
  //    return await this.generoRepository.update(id , Genero);
  // }
}