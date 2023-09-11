import { Module } from '@nestjs/common'
import { PrismaModule } from '../prisma/prisma.module'
import { EquipmentsController } from './equipments.controller'
import { EquipmentsService } from './equipments.service'

@Module({
  imports: [PrismaModule],
  controllers: [EquipmentsController],
  providers: [EquipmentsService],
})
export class EquipmentsModule {}
