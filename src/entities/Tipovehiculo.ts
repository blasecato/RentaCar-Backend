import { Column, Entity, OneToMany, JoinColumn } from "typeorm";
import { Vehiculo } from "./Vehiculo";

@Entity("tipovehiculo", { schema: "rentautos" })
export class Tipovehiculo {


  @Column("int", { primary: true, name: "idTipoVehiculo" })
  idTipoVehiculo: number;

  @Column("varchar", { name: "descripcion", length: 20 })
  descripcion: string;

  @OneToMany(() => Vehiculo, (vehiculo) => vehiculo.tvehiculos)
  vehiculos: Vehiculo[];
  
}
