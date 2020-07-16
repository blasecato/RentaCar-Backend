import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Conductor } from "./Conductor";

@Index("fk_planilla", ["fkIdConductor"], {})
@Entity("planilla", { schema: "rentautos" })
export class Planilla {
  @Column("int", { primary: true, name: "CodPlanilla" })
  codPlanilla: number;

  @Column("datetime", { name: "FechaEmision" })
  fechaEmision: Date;

  @Column("datetime", { name: "FechaVencimiento" })
  fechaVencimiento: Date;

  @Column("varchar", { name: "lugarExpedicion", length: 30 })
  lugarExpedicion: string;

  @Column("int", { name: "fk_idConductor" })
  fkIdConductor: number;

  @ManyToOne(() => Conductor, (conductor) => conductor.planillas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "fk_idConductor", referencedColumnName: "idConductor" }])
  fkIdConductor2: Conductor;
}
