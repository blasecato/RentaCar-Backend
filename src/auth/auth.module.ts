import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { HttpStrategy } from '../common/strategys/http.strategy';
import { Persona } from '../entities/Persona';
import { User } from '../entities/User';

@Module({
    imports: [
        JwtModule.register({
            secret: 'reantautos',
            signOptions: { expiresIn: '15d' },
        }),
        TypeOrmModule.forFeature([User, Persona]),
    ],
    controllers: [AuthController],
    providers: [AuthService, HttpStrategy],
})
export class AuthModule { }
