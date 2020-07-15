import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Rolpersona } from "./Rolpersona";

@Index("cedula", ["cedula"], { unique: true })
@Index("fk_IDRolPersona", ["fkIdRolPersona"], {})
@Entity("persona", { schema: "rentautos" })
export class Persona {
  @Column("int", { primary: true, name: "idPersona" })
  idPersona: number;

  @Column("int", { name: "cedula", unique: true })
  cedula: number;

  @Column("varchar", { name: "nombre1", length: 20 })
  nombre1: string;

  @Column("varchar", { name: "nombre2", nullable: true, length: 20 })
  nombre2: string | null;

  @Column("varchar", { name: "apellido1", length: 20 })
  apellido1: string;

  @Column("varchar", { name: "apellido2", nullable: true, length: 20 })
  apellido2: string | null;

  @Column("varchar", { name: "correo", nullable: true, length: 30 })
  correo: string | null;

  @Column("date", { name: "fechaNacimiento" })
  fechaNacimiento: string;

  @Column("varchar", { name: "direccion", nullable: true, length: 30 })
  direccion: string | null;

  @Column("bigint", { name: "telefono", nullable: true })
  telefono: string | null;

  @Column("date", { name: "fechaAfiliacion" })
  fechaAfiliacion: string;

  @Column("varchar", { name: "EstadoPersona", length: 1 })
  estadoPersona: string;

  @Column("int", { name: "fk_IDRolPersona" })
  fkIdRolPersona: number;

  @ManyToOne(() => Rolpersona, (rolpersona) => rolpersona.personas, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: "fk_IDRolPersona", referencedColumnName: "idRolPersona" },
  ])
  fkIdRolPersona2: Rolpersona;
}
