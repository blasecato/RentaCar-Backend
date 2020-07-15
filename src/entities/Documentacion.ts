import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Tipodocumentacion } from "./Tipodocumentacion";
import { Vehiculo } from "./Vehiculo";

@Index("fk_documentacion", ["fkIdTipoDocumentacion"], {})
@Index("fk_documentacionVeh", ["fkNumInterno"], {})
@Entity("documentacion", { schema: "rentautos" })
export class Documentacion {
  @Column("int", { primary: true, name: "idDocumentacion" })
  idDocumentacion: number;

  @Column("date", { name: "FechaAfiliacionVehiculo" })
  fechaAfiliacionVehiculo: string;

  @Column("date", { name: "FechaRetiroVehiculo", nullable: true })
  fechaRetiroVehiculo: string | null;

  @Column("int", { name: "fk_idTipoDocumentacion" })
  fkIdTipoDocumentacion: number;

  @Column("int", { name: "fk_NumInterno" })
  fkNumInterno: number;

  @ManyToOne(
    () => Tipodocumentacion,
    (tipodocumentacion) => tipodocumentacion.documentacions,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([
    {
      name: "fk_idTipoDocumentacion",
      referencedColumnName: "idTipoDocumentacion",
    },
  ])
  fkIdTipoDocumentacion2: Tipodocumentacion;

  @ManyToOne(() => Vehiculo, (vehiculo) => vehiculo.documentacions, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "fk_NumInterno", referencedColumnName: "numInterno" }])
  fkNumInterno2: Vehiculo;
}
