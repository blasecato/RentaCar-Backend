import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Vehiculo } from "./Vehiculo";
import { Documentacion } from "./Documentacion";


@Entity("seguro", { schema: "rentautos" })
export class seguro {

  @PrimaryGeneratedColumn({ type: "bigint", name: "idseguro" })
  idseguro: number;

  @Column("datetime")
  FechaInicio: Date;
  
  @Column("datetime")
  FechaVencimiento: Date;

  @Column("int")
  estado: number;

  @OneToOne(() => Documentacion, (documentacion) => documentacion.seguro)
  @JoinColumn()
  documentacion: Documentacion[];

}
