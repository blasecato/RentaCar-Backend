import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Vehiculo } from "./Vehiculo";
import { Documentacion } from "./Documentacion";


@Entity("revision", { schema: "rentautos" })
export class Revision {

  @PrimaryGeneratedColumn({ type: "bigint", name: "idRevision" })
  idRevision: number;

  @Column("datetime")
  FechaRevision: Date;

  @ManyToOne(() => Vehiculo, (vehiculo) => vehiculo)
  vehiculo: Vehiculo[];
  @JoinColumn({ name: "fkvehiculo", referencedColumnName: "id_vehiculo" })
  vehiculos: Vehiculo[];

  
  @OneToOne(() => Documentacion, (documentacion) => documentacion.revision)
  documentacion: Documentacion[];

}
