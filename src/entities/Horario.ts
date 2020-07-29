import { Column, Entity, OneToMany, JoinColumn } from "typeorm";
import { Cronograma } from "./Cronograma";

@Entity("horario", { schema: "rentautos" })
export class Horario {
  @Column("int", { primary: true, name: "idHorario" })
  idHorario: number;

  @Column("varchar")
  jornada: string;

  @OneToMany(() => Cronograma, (cronograma) => cronograma.horarios)
  cronogramas: Cronograma[];
}
