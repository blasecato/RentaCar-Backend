import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from 'mysql'
import { Persona } from '../../entities/Persona';
import { User } from '../../entities/User';
import { Vehiculo } from 'src/entities/Vehiculo';

@Injectable()
export class PersonaService {


  constructor(
    @InjectRepository(Persona) private readonly personaRepository: Repository<Persona>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Vehiculo) private readonly vehiculoRepository: Repository<Vehiculo>,
  ) { }


  async findAll(): Promise<Persona[]> {
    return await this.personaRepository.find();
  }

  // async getById(id: string): Promise<Genero> {
  //   return await this.generoRepository.find({Genero => Genero.id === id });  
  // }



  async getById(id) {
    return await this.personaRepository.createQueryBuilder()
      .select("idPersona", "idPersona")
      .addSelect("nombres", "nombres")
      .addSelect("apellidos", "apellidos")
      .addSelect("cedula", "cedula")
      .addSelect("telefono", "telefono")
      .addSelect("direccion", "direccion")
      .where("idPersona = :ids", { ids: id })
      .execute();
  }

  async getByEmail(email){
    return await this.userRepository.createQueryBuilder("user")
      .select("idUser", "id")
      .addSelect("email", "email")
      .addSelect("password", "password")
      .innerJoinAndSelect("user.persona", "persona")
      .where("email = :emails", { emails: email })
      .execute();
  
    }

  async getByIdVehicle(id){
    return await this.vehiculoRepository.createQueryBuilder("vehiculo")
    .select("id_vehiculo", "id_vehiculo")
    .addSelect("placa", "placa")
    .addSelect("modelo", "modelo")
    .addSelect("cilindraje", "cilindraje")
    .addSelect("capacidad", "capacidad")
    .addSelect("numInterno", "numInterno")
    .addSelect("descripcion", "descripcion")
    .addSelect("recorrido", "recorrido")
    .innerJoinAndSelect("persona", "vehiculo.persona")
    .where("id_vehiculo = :ids", { ids: id })
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