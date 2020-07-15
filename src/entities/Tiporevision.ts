import { Column, Entity, OneToMany } from "typeorm";
import { Revision } from "./Revision";

@Entity("tiporevision", { schema: "rentautos" })
export class Tiporevision {
  @Column("int", { primary: true, name: "idTipoRevision" })
  idTipoRevision: number;

  @Column("varchar", { name: "descripcion", length: 40 })
  descripcion: string;

  @OneToMany(() => Revision, (revision) => revision.fkIdTipoRevision2)
  revisions: Revision[];
}
