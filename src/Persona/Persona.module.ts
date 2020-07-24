import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from '../entities/Persona';
import { User } from '../entities/User';
import { PersonaController } from './persona.controller';
import { PersonaService } from './persona.service';
import { Rolpersona } from 'src/entities/Rolpersona';
import { Genero } from 'src/entities/Genero';

@Module({
  imports: [TypeOrmModule.forFeature([Persona, User, Rolpersona, Genero])],
  providers: [PersonaService],
  controllers: [PersonaController, PersonaController],
})


export class PersonaModule { }