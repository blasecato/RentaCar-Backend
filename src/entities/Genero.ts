import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "./Persona";

@Entity("genero", { schema: "rentautos" })
export class Genero {
  @PrimaryGeneratedColumn( {type: "bigint", name: "id" })
  id: number;

  @Column("varchar", { name: "nombre", nullable: true, length: 45 })
  nombre: string | null;

  @OneToMany(() => Persona, persona => persona.genero)
  personas: Persona[];
}
