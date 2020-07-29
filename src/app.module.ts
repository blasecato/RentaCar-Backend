import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import ConfigService from "./common/config/config.service";
import { CommonModule } from './common/common.module';
import { PersonaModule } from './Modules/Persona/Persona.module'


@Module({
  imports: [
    TypeOrmModule.forRoot(ConfigService.orm_config),
    AuthModule,
    CommonModule,
    PersonaModule,
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
