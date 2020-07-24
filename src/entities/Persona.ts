import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  OneToOne,
} from "typeorm";
import { Genero } from "./Genero";
import { User } from "./User";
import { Vehiculo } from "./Vehiculo";

@Index("cedula", ["cedula"], { unique: true })
// @Index("fk_idGenero", ["fkIdGenero"], {})
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

  // @Column("date", { name: "fechaAfiliacion" })
  // fechaAfiliacion: string | null;

  @Column("varchar", { name: "EstadoPersona", length: 1 })
  estadoPersona: string | null;

  @ManyToOne(() => Genero, genero => genero.personas, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn([{ name: "fk_genero" , referencedColumnName:'id' }])
  genero: Genero[] | null;

  @OneToMany(() => User, (user) => user.persona)
  users: User[];

  @OneToMany(() => Vehiculo, (vechiculo) => vechiculo.propietarios)
  vechile: Vehiculo[];
}
