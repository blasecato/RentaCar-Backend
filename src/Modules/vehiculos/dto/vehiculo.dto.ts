import { IsNotEmpty, IsString, IsEmail, Length, IsInt } from 'class-validator';
import { isNumber } from 'util';

export class VehiculoDto {

    @IsInt()
    id_vehiculo:number;
  
    @IsNotEmpty()
    @IsString()
    placa: string;


    @IsNotEmpty()
    @Length(4)
    @IsInt()
    modelo: number;

    @IsNotEmpty()
    @Length(4)
    @IsInt()
    cilindraje: number;
    
    @IsNotEmpty()
    @Length(2)
    @IsInt()
    capacidad: number;
    
    @IsNotEmpty()
    @Length(5)
    @IsInt()
    numInterno: number;

    @IsNotEmpty()
    @Length(250)
    @IsString()
    descripcion: string;
   
   
    @IsNotEmpty()
    @Length(250)
    @IsString()
    recorrido: string;


    @IsInt()
    persona : number;

}