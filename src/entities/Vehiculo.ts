import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Conductor } from "./Conductor";
import { Documentacion } from "./Documentacion";
import { Propietario } from "./Propietario";
import { Revision } from "./Revision";
import { Rutas } from "./Rutas";
import { Tipovehiculo } from "./Tipovehiculo";

@Index("placa", ["placa"], { unique: true })
@Index("fk_vehiculo", ["fkIdTipoVehiculo"], {})
@Entity("vehiculo", { schema: "rentautos" })
export class Vehiculo {
  @Column("int", { primary: true, name: "NumInterno" })
  numInterno: number;

  @Column("varchar", { name: "placa", unique: true, length: 6 })
  placa: string;

  @Column("varchar", { name: "color", nullable: true, length: 20 })
  color: string | null;

  @Column("varchar", { name: "marca", length: 20 })
  marca: string;

  @Column("int", { name: "modelo" })
  modelo: number;

  @Column("int", { name: "cilindraje", nullable: true })
  cilindraje: number | null;

  @Column("int", { name: "capacidad" })
  capacidad: number;

  @Column("int", { name: "fk_IdTipoVehiculo" })
  fkIdTipoVehiculo: number;

  @OneToMany(() => Conductor, (conductor) => conductor.fkNumInterno2)
  conductors: Conductor[];

  @OneToMany(
    () => Documentacion,
    (documentacion) => documentacion.fkNumInterno2
  )
  documentacions: Documentacion[];

  @OneToMany(() => Propietario, (propietario) => propietario.fkNumInterno2)
  propietarios: Propietario[];

  @OneToMany(() => Revision, (revision) => revision.fkNumInterno2)
  revisions: Revision[];

  @OneToMany(() => Rutas, (rutas) => rutas.fkNumInterno2)
  rutas: Rutas[];

  @ManyToOne(() => Tipovehiculo, (tipovehiculo) => tipovehiculo.vehiculos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "fk_IdTipoVehiculo", referencedColumnName: "idTipoVehiculo" },
  ])
  fkIdTipoVehiculo2: Tipovehiculo;
}
