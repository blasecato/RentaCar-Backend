import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  OneToOne,
} from "typeorm";

import { Tipovehiculo } from "./Tipovehiculo";
import { Persona } from "./Persona";
import { color_vehiculo } from "./color_vehiculo";
import { Planilla } from "./Planilla";
import { marca } from "./marca";
import { renta_vehiculo } from "./renta_vehiculo";
import { estado_vehiculo } from "./estado_vehiculo";
import { Revision } from "./Revision";


@Entity("vehiculo", { schema: "rentautos" })
export class Vehiculo {

  @PrimaryGeneratedColumn({ type: "bigint", name: "id_vehiculo" })
  id_vehiculo: number;

  @Column("varchar")
  placa: string;

  @Column("int")
  modelo: number;

  @Column("int")
  cilindraje: number;

  @Column("int")
  capacidad: number;
  
  @Column("int")
  numInterno: number;

  @Column("text")
  descripcion: string;

  @Column("varchar")
  recorrido: string;

  @ManyToOne(() => Persona, (person) => person.vehiculo)
  @JoinColumn({ name: "fk_PersonaVehiculo", referencedColumnName: 'idPersona' })
  persona: Persona;

  @ManyToOne(() => marca, (marca) => marca.vehicle)
  @JoinColumn({ name: "fk_marca"})
  marcas: marca;

  @ManyToOne(() => Tipovehiculo, (tvehiculo) => tvehiculo.idTipoVehiculo)
  @JoinColumn({ name: "fk_tipoVehiculo"})
  tvehiculos: Tipovehiculo;

  @OneToOne(() => color_vehiculo, (color_vehi) => color_vehi.Vehiculo)
  @JoinColumn()
  color_vehi: color_vehiculo;

  @OneToOne(() => Planilla, (planilla) => planilla.vehiculo)
  @JoinColumn()
  planilla: Planilla;

  @OneToOne(() => renta_vehiculo, (rentavehiculo) => rentavehiculo.Vehiculo)
  @JoinColumn()
  rentavehiculo: renta_vehiculo;

  @OneToOne(() => estado_vehiculo, (estadovehiculo) => estadovehiculo.Vehiculo)
  @JoinColumn()
  estadovehiculo: estado_vehiculo;

  @OneToMany(() => Revision, (revision) => revision.vehiculos)
  @JoinColumn()
  revision: Revision;

}
