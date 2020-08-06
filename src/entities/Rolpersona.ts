import { Column, Entity, OneToMany, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity("rolpersona", { schema: "rentautos" })
export class Rolpersona {

  @PrimaryGeneratedColumn({ type: "bigint", name: "idRolPersona" })
  idRolPersona: number;

  @Column("varchar")
  nombreRol: string;

  @OneToMany(() => User, (user) => user.rolPersona)
  users: User;
  
}
