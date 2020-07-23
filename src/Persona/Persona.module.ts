import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from '../entities/Persona';
import { User } from '../entities/User';
import { PersonaController } from './persona.controller';
import { PersonaService } from './persona.service';

@Module({
    imports: [TypeOrmModule.forFeature([Persona,User])],
    providers: [PersonaService],
    controllers: [PersonaController, PersonaController],
  })
export class PersonaModule {}