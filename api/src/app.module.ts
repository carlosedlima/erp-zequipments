import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from './config/config.module'
import { EquipmentsModule } from './modules/equipments/equipments.module'
import { PrismaModule } from './modules/prisma/prisma.module'

@Module({
  imports: [ConfigModule, EquipmentsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
