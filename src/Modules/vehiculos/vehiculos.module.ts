import { Module } from '@nestjs/common';
import { Vehiculo } from 'src/entities/Vehiculo';
import { Genero } from 'src/entities/Genero';
import { Rolpersona } from 'src/entities/Rolpersona';
import { User } from 'src/entities/User';
import { Persona } from 'src/entities/Persona';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiculosService } from './vehiculos.service';
import { VehiculosController } from './vehiculos.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Persona, User, Rolpersona, Genero, Vehiculo])],
    providers: [VehiculosService],
    controllers: [VehiculosController],
})
export class VehiculosModule { }
