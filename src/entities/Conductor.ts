import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Vehiculo } from "./Vehiculo";
import { Planilla } from "./Planilla";

@Index("fk_Conductor", ["fkNumInterno"], {})
@Entity("conductor", { schema: "rentautos" })
export class Conductor {
  @Column("int", { primary: true, name: "idConductor" })
  idConductor: number;

  @Column("date", { name: "HorarioCond" })
  horarioCond: string;

  @Column("int", { name: "fk_NumInterno" })
  fkNumInterno: number;

  @ManyToOne(() => Vehiculo, (vehiculo) => vehiculo.conductors, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "fk_NumInterno", referencedColumnName: "numInterno" }])
  fkNumInterno2: Vehiculo;

  @OneToMany(() => Planilla, (planilla) => planilla.fkIdConductor2)
  planillas: Planilla[];
}
