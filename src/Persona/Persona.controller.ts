import {  Controller,Get,Post,Put,Delete,Body,Param, UseGuards, Request } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/roles.guard';
import {PersonaService } from "./Persona.service";
import { Persona } from "../entities/Persona";
import { User } from "../entities/User";
import { Roles } from '../common/decorators/roles.decorator';


@Controller('persona')
export class PersonaController {
    constructor(private readonly personaService: PersonaService){}
    //sirve
    @Get('getUsers')
    async findAll(): Promise<Persona[]>{
         return await  this.personaService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id):Promise<Persona>{
        return await this.personaService.getById(id);
    }

    @Get('getUser/:email')
    async findEmail(@Param('email') email):Promise<User>{
        return await this.personaService.getByEmail(email);
    }

} 