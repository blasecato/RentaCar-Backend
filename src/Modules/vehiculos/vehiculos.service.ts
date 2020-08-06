import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from 'src/entities/Persona';
import { User } from 'src/entities/User';
import { Repository } from 'typeorm';
import { Vehiculo } from 'src/entities/Vehiculo';
import { VehiculoDto } from './dto/vehiculo.dto';
import { marca } from 'src/entities/marca';
import { Tipovehiculo } from 'src/entities/Tipovehiculo';
import { color_vehiculo } from 'src/entities/color_vehiculo';
import { Planilla } from 'src/entities/Planilla';
import { renta_vehiculo } from 'src/entities/renta_vehiculo';
import { estado_vehiculo } from 'src/entities/estado_vehiculo';
import { Revision } from 'src/entities/Revision';

@Injectable()
export class VehiculosService {
  constructor(
    @InjectRepository(Persona) private readonly personaRepository: Repository<Persona>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Vehiculo) private readonly vehiculoRepository: Repository<Vehiculo>,
  ) { }


  async findAll(): Promise<Vehiculo[]> {
    return await this.vehiculoRepository.find();
  }


  async getById(id) {
    return await this.vehiculoRepository.createQueryBuilder()
      .select("id_vehiculo", "id_vehiculo")
      .addSelect("placa", "placa")
      .addSelect("modelo", "modelo")
      .addSelect("cilindraje", "cilindraje")
      .addSelect("capacidad", "capacidad")
      .addSelect("numInterno", "numInterno")
      .addSelect("descripcion", "descripcion")
      .addSelect("recorrido", "recorrido")
      .where("id_vehiculo = :ids", { ids: id })
      .execute();
  }


  async createVehicle(data: VehiculoDto): Promise<Vehiculo> {

    let vehiculo = new Vehiculo();
    vehiculo.placa = data.placa;
    vehiculo.modelo = data.modelo;
    vehiculo.cilindraje = data.cilindraje;
    vehiculo.capacidad = data.capacidad;
    vehiculo.numInterno = data.numInterno;
    vehiculo.descripcion = data.descripcion;
    vehiculo.recorrido = data.recorrido;
    vehiculo.persona = new Persona;
    vehiculo.persona.idPersona = data.persona;
    vehiculo.marcas = new marca;
    vehiculo.marcas.id_marca = data.marca;
    vehiculo.tvehiculos = new Tipovehiculo;
    vehiculo.tvehiculos.idTipoVehiculo = data.tipovehiculo;
    vehiculo.color_vehi = new color_vehiculo;
    vehiculo.color_vehi.idcolor_vehiculo = data.colorvehiculo;
    vehiculo.planilla = new Planilla;
    vehiculo.planilla.codPlanilla = data.planillavehiculo;
    vehiculo.rentavehiculo = new renta_vehiculo;
    vehiculo.rentavehiculo.idrenta_vehiculo = data.rentavehiculo;
    vehiculo.estadovehiculo = new estado_vehiculo;
    vehiculo.estadovehiculo.id_estado_vehiculo = data.estadovehiculo;
    vehiculo.revision = new Revision;
    vehiculo.revision.idRevision = data.revisionvehiculo;

    return await this.vehiculoRepository.save(vehiculo);

  }






}
