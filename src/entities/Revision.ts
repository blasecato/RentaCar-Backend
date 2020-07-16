import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Vehiculo } from "./Vehiculo";
import { Tiporevision } from "./Tiporevision";

@Index("fk_revision", ["fkNumInterno"], {})
@Index("fk_revisionTipo", ["fkIdTipoRevision"], {})
@Entity("revision", { schema: "rentautos" })
export class Revision {
  @Column("int", { primary: true, name: "idRevision" })
  idRevision: number;

  @Column("date", { name: "FechaRevision" })
  fechaRevision: string;

  @Column("int", { name: "fk_idTipoRevision" })
  fkIdTipoRevision: number;

  @Column("int", { name: "fk_NumInterno" })
  fkNumInterno: number;

  @ManyToOne(() => Vehiculo, (vehiculo) => vehiculo.revisions, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "fk_NumInterno", referencedColumnName: "numInterno" }])
  fkNumInterno2: Vehiculo;

  @ManyToOne(() => Tiporevision, (tiporevision) => tiporevision.revisions, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "fk_idTipoRevision", referencedColumnName: "idTipoRevision" },
  ])
  fkIdTipoRevision2: Tiporevision;
}
