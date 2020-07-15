import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Vehiculo } from "./Vehiculo";
import { Cronograma } from "./Cronograma";

@Index("fk_rutas", ["fkNumInterno"], {})
@Index("fk_rutasCrono", ["fkIdCrono"], {})
@Entity("rutas", { schema: "rentautos" })
export class Rutas {
  @Column("int", { primary: true, name: "idRuta" })
  idRuta: number;

  @Column("varchar", { name: "CiudadOrigen", nullable: true, length: 20 })
  ciudadOrigen: string | null;

  @Column("varchar", { name: "CiudadDestino", nullable: true, length: 20 })
  ciudadDestino: string | null;

  @Column("int", { name: "fk_NumInterno" })
  fkNumInterno: number;

  @Column("int", { name: "fk_idCrono" })
  fkIdCrono: number;

  @ManyToOne(() => Vehiculo, (vehiculo) => vehiculo.rutas, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "fk_NumInterno", referencedColumnName: "numInterno" }])
  fkNumInterno2: Vehiculo;

  @ManyToOne(() => Cronograma, (cronograma) => cronograma.rutas, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "fk_idCrono", referencedColumnName: "idCrono" }])
  fkIdCrono2: Cronograma;
}
