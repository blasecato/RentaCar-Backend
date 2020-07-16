import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Vehiculo } from "./Vehiculo";

@Index("fk_Propietario", ["fkNumInterno"], {})
@Entity("propietario", { schema: "rentautos" })
export class Propietario {
  @Column("int", { primary: true, name: "IdPropietario" })
  idPropietario: number;

  @Column("int", { name: "CantidadVehiculos" })
  cantidadVehiculos: number;

  @Column("int", { name: "fk_NumInterno" })
  fkNumInterno: number;

  @ManyToOne(() => Vehiculo, (vehiculo) => vehiculo.propietarios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "fk_NumInterno", referencedColumnName: "numInterno" }])
  fkNumInterno2: Vehiculo;
}
