import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Horario } from "./Horario";
import { Rutas } from "./Rutas";

@Index("fk_cronograma", ["fkIdHorario"], {})
@Entity("cronograma", { schema: "rentautos" })
export class Cronograma {
  @Column("int", { primary: true, name: "idCrono" })
  idCrono: number;

  @Column("varchar", { name: "descripcion", length: 20 })
  descripcion: string;

  @Column("datetime", { name: "HorarioCrono" })
  horarioCrono: Date;

  @Column("int", { name: "fk_idHorario" })
  fkIdHorario: number;

  @ManyToOne(() => Horario, (horario) => horario.cronogramas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "fk_idHorario", referencedColumnName: "idHorario" }])
  fkIdHorario2: Horario;

  @OneToMany(() => Rutas, (rutas) => rutas.fkIdCrono2)
  rutas: Rutas[];
}
