import { type } from "os";
import { Persona } from "./Persona";
import { Vehiculo } from "./Vehiculo";
import { PrimaryGeneratedColumn, Column, OneToOne, Entity, JoinColumn } from "typeorm";

@Entity("renta_vehiculo", { schema: "rentautos" })
export class renta_vehiculo {

    @PrimaryGeneratedColumn({ type: "bigint", name: "idrenta_vehiculo" })
    idrenta_vehiculo: number;

    @Column("datetime")
    fecha_inicial: Date;
    
    @Column("datetime")
    fecha_final: Date;

    
    @OneToOne(() => Vehiculo, (Vehiculo) => Vehiculo.rentavehiculo)
    Vehiculo: Vehiculo[];

}