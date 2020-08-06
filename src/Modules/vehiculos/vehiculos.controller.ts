import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';
import { Vehiculo } from 'src/entities/Vehiculo';
import { Persona } from 'src/entities/Persona';
import { VehiculoDto } from './dto/vehiculo.dto';

@Controller('vehiculos')
export class VehiculosController {
    constructor(private readonly vehiculosService: VehiculosService){}


    @Get('getVehicle')
    async findAll(): Promise<Vehiculo[]>{
         return await  this.vehiculosService.findAll();
         
    }

    @Post("createVehicle")
    async createVehicle(@Body() data: VehiculoDto) : Promise<Vehiculo>{
        return await this.vehiculosService.createVehicle(data);
    }

    @Get(':id')
    async findOne(@Param('id') id):Promise<Vehiculo[]>{
        return await this.vehiculosService.getById(id);
    }


}
