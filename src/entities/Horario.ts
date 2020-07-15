import { Column, Entity, OneToMany } from "typeorm";
import { Cronograma } from "./Cronograma";

@Entity("horario", { schema: "rentautos" })
export class Horario {
  @Column("int", { primary: true, name: "idHorario" })
  idHorario: number;

  @Column("varchar", { name: "Jornada", length: 20 })
  jornada: string;

  @OneToMany(() => Cronograma, (cronograma) => cronograma.fkIdHorario2)
  cronogramas: Cronograma[];
}
