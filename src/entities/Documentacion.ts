import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Vehiculo } from "./Vehiculo";
import { Revision } from "./Revision";
import { seguro } from "./seguro";
import { cda } from "./cda";


@Entity("documentacion", { schema: "rentautos" })
export class Documentacion {


  @PrimaryGeneratedColumn({ type: "bigint", name: "idDocumentacion" })
  idDocumentacion: number;

  @Column("varchar")
  descripcion: string;

  @OneToOne(() => Revision, (revision) => revision.documentacion)
  @JoinColumn()
  revision: Revision;

  @OneToOne(() => seguro, (Seguro) => Seguro.documentacion)
  seguro: seguro;

  @OneToOne(() => cda, (Cda) => Cda.documentacion)
  cda: cda;

}
