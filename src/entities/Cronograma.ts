import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Horario } from "./Horario";
import { Planilla } from "./Planilla";


@Entity("cronograma", { schema: "rentautos" })
export class Cronograma {

  @PrimaryGeneratedColumn({type: "bigint", name: "idCrono"})
  idCrono: number;

  @Column("varchar")
  descripcion: string;

  @Column("datetime")
  horariocrono: Date;

  @ManyToOne(() => Planilla, (planilla)=> planilla.cronogram)
  planilla: Planilla;

  @ManyToOne(()=>Horario, (horario)=> horario.cronogramas)
  @JoinColumn({ name: "fk_horario", referencedColumnName: 'idHorario' })
  horarios:Horario;

  
}
