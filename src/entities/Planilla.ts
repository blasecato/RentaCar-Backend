import { Column, Entity, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from "typeorm";
import { Vehiculo } from "./Vehiculo";
import { Cronograma } from "./Cronograma";



@Entity("planilla", { schema: "rentautos" })
export class Planilla {

  @PrimaryGeneratedColumn({ type: "bigint", name: "codPlanilla" })
  codPlanilla: number;

  @Column("datetime")
  FechaEmision: Date;

  @Column("datetime")
  FechaVencimiento: Date;

  @Column("varchar")
  lugarExpedicion: string;

  @OneToOne(() => Vehiculo, (vehiculo) => vehiculo.planilla)
  vehiculo: Vehiculo[];

  @OneToMany(()=> Cronograma, (cronograma)=> cronograma.planilla)
  @JoinColumn({ name: "fk_planilla", referencedColumnName: 'CodPlanilla' })
  cronogram: Cronograma;
  


}
