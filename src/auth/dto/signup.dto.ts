import { IsNotEmpty, IsString, IsEmail, Length, IsNumber, IsOptional } from 'class-validator';

export class SignUpDto {
  @IsString()
  nombres: string;

  @IsString()
  apellidos: string;

  @IsNotEmpty()
  @IsString()
  cedula: string;

  @IsString()
  @IsOptional()
  fechaNacimiento: string;

  @IsString()
  telefono: string;

  @IsString()
  @IsOptional()
  direccion: string;

  @IsString()
  @IsOptional()
  fechaAfiliacion: string;

  @IsNumber()
  idGenero: number;


  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  password: string;
}