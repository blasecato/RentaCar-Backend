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

/* @Index("fk_IDRolPersona", ["fkIdRolPersona"], {}) */
/* @Index("fk_idPersona", ["fkIdPersona"], {})*/
@Entity("user", { schema: "rentautos" })
export class User {
  @PrimaryGeneratedColumn({ type: "bigint", name: "idUser" })
  idUser: number;

  @Column("varchar", { name: "email", length: 55 })
  email: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @ManyToOne(() => Persona, (persona) => persona.users, {onDelete: 'CASCADE',onUpdate: 'CASCADE'})
  @JoinColumn([{ name: "fk_idPersona", referencedColumnName: "idPersona" }])
  persona: Persona;

  @ManyToOne(() => Rolpersona, (rolpersona) => rolpersona.users, {onDelete: 'CASCADE',onUpdate: 'CASCADE'})
  @JoinColumn([{ name: "fk_IDRolPersona", referencedColumnName: "idRolPersona" }])
  rolPersona: Rolpersona;
}
