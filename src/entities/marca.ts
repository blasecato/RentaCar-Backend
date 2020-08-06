import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { type } from "os";
import { Vehiculo } from "./Vehiculo";


@Entity("marca", { schema: "rentautos" })
export class marca {

    @PrimaryGeneratedColumn({ type: "bigint", name: "idmarca" })
    id_marca: number;

    @Column("varchar")
    nombre_marca: string;

    @OneToMany(() => Vehiculo, (Vehicle) => Vehicle.marcas)
    vehicle: Vehiculo;


}