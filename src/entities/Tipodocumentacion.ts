import { Column, Entity, OneToMany } from "typeorm";
import { Documentacion } from "./Documentacion";

@Entity("tipodocumentacion", { schema: "rentautos" })
export class Tipodocumentacion {
  @Column("int", { primary: true, name: "idTipoDocumentacion" })
  idTipoDocumentacion: number;

  @Column("varchar", { name: "Descripcion", nullable: true, length: 20 })
  descripcion: string | null;

  @OneToMany(
    () => Documentacion,
    (documentacion) => documentacion.fkIdTipoDocumentacion2
  )
  documentacions: Documentacion[];
}
