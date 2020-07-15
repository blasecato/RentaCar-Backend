import { Column, Entity, OneToMany } from "typeorm";
import { Persona } from "./Persona";

@Entity("rolpersona", { schema: "rentautos" })
export class Rolpersona {
  @Column("int", { primary: true, name: "idRolPersona" })
  idRolPersona: number;

  @Column("varchar", { name: "NombreRol", length: 20 })
  nombreRol: string;

  @OneToMany(() => Persona, (persona) => persona.fkIdRolPersona2)
  personas: Persona[];
}
