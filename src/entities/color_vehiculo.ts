import {Entity, PrimaryColumn,PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn} from "typeorm";
import { type } from "os";
import { Persona } from "./Persona";
import { Vehiculo } from "./Vehiculo";

@Entity("color_vehiculo", { schema: "rentautos" })
export class color_vehiculo {

    @PrimaryGeneratedColumn({ type: "bigint", name: "idcolor_vehiculo" })
    idcolor_vehiculo: number;

    @Column("varchar")
    nombre_color: string;

    
    @OneToOne(() => Vehiculo, (Vehiculo) => Vehiculo.color_vehi)
    Vehiculo: Vehiculo[];



}