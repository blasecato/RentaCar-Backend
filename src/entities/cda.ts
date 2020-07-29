import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Vehiculo } from "./Vehiculo";
import { Documentacion } from "./Documentacion";


@Entity("cda", { schema: "rentautos" })
export class cda {

    @PrimaryGeneratedColumn({ type: "bigint", name: "idCda" })
    idCda: number;

    @Column("datetime")
    FechaInicio: Date;

    @Column("datetime")
    FechaVencimiento: Date;

    @Column("int")
    estado_cda: number;

    @OneToOne(() => Documentacion, (documentacion) => documentacion.cda)
    @JoinColumn()
    documentacion: Documentacion[];

}
