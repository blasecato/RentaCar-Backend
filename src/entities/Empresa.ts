import {Entity, PrimaryColumn,PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from "typeorm";
import { type } from "os";
import { Persona } from "./Persona";

@Entity("empresa", { schema: "rentautos" })
export class empresa {

    @PrimaryGeneratedColumn({ type: "bigint", name: "idEmpresa" })
    id_empresa: number;

    @Column("varchar")
    nombre_empresa: string;

    @Column("int")
    telefono: number;

    @Column("varchar")
    logo: string;

    @Column("varchar")
    nit: string;

    @OneToMany(() => Persona, (persona) => persona.empresa)
    persona: Persona;



}