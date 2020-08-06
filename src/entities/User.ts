import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Persona } from "./Persona";
import { Rolpersona } from "./Rolpersona";

@Entity("user", { schema: "rentautos" })
export class User {

  @PrimaryGeneratedColumn({ type: "bigint", name: "idUser" })
  idUser: number;

  @Column("varchar")
  email: string;

  @Column("varchar")
  password: string;

  @ManyToOne(() => Persona, (persona) => persona.users)
  @JoinColumn([{ name: "fk_idPersona", referencedColumnName: "idPersona" }])
  persona: Persona;

  @ManyToOne(() => Rolpersona, (rolpersona) => rolpersona.users)
  @JoinColumn([{ name: "fk_IDRolPersona", referencedColumnName: "idRolPersona" }])
  rolPersona: Rolpersona;

}
