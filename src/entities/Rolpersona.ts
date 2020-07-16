import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity("rolpersona", { schema: "rentautos" })
export class Rolpersona {
  @PrimaryGeneratedColumn({ type: "bigint", name: "idRolPersona" })
  idRolPersona: number;

  @Column("varchar", { name: "NombreRol", length: 20 })
  nombreRol: string;

  @OneToMany(() => User, (user) => user.rolPersona)
  users: User[];
}
