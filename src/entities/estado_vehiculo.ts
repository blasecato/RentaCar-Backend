import { type } from "os";
import { Vehiculo } from "./Vehiculo";
import { PrimaryGeneratedColumn, Column, OneToOne, Entity, JoinColumn } from "typeorm";

@Entity("estado_vehiculo", { schema: "rentautos" })
export class estado_vehiculo {

    @PrimaryGeneratedColumn({ type: "bigint", name: "id_estado_vehiculo" })
    id_estado_vehiculo: number;

    @Column("varchar")
    descripcion: string;
    
    
    @OneToOne(() => Vehiculo, (Vehiculo) => Vehiculo.estadovehiculo)
    Vehiculo: Vehiculo;

}