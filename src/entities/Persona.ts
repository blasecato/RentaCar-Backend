import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, } from "typeorm";
import { Genero } from "./Genero";
import { User } from "./User";
import { Vehiculo } from "./Vehiculo";
import { empresa } from "./Empresa";


@Entity("persona", { schema: "rentautos" })
export class Persona {

  @PrimaryGeneratedColumn({ type: "bigint", name: "idPersona" })
  idPersona: number;

  @Column("varchar", { name: "cedula", unique: true, length: 11 })
  cedula: string;

  @Column("varchar", { name: "nombres", length: 45 })
  nombres: string;

  @Column("varchar", { name: "apellidos", length: 20 })
  apellidos: string;

  @Column("timestamp", { name: "fechaNacimiento" })
  fechaNacimiento: Date | null;

  @Column("varchar", { name: "direccion", nullable: true, length: 30 })
  direccion: string | null;

  @Column("varchar", { name: "telefono", nullable: true })
  telefono: string | null;

  @Column("varchar", { name: "EstadoPersona", length: 1 })
  estadoPersona: string | null;

  @ManyToOne(type => Genero, genero => genero.personas)
  @JoinColumn([{ name: "fk_genero", referencedColumnName: 'id' }])
  genero: Genero | null;

  @OneToMany(type => User, (user) => user.persona)
  users: User;

  @OneToMany(type => Vehiculo, (vechiculo) => vechiculo.persona)
  vehiculo: Vehiculo;

  @ManyToOne(type => empresa, empresa => empresa.persona)
  @JoinColumn([{ name: "fk_idempresa", referencedColumnName: 'id_empresa' }])
  empresa: empresa;


}
