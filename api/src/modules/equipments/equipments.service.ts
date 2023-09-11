import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/modules/prisma/prisma.service'
import { CreateEquipmentDto } from './dto/create-equipment.dto'
import { UpdateEquipmentDto } from './dto/update-equipment.dto'

@Injectable()
export class EquipmentsService {
  constructor(readonly prismaService: PrismaService) {}

  async create(createEquipmentDto: CreateEquipmentDto) {
    const equipmentCreated = await this.prismaService.equipment.create({
      data: createEquipmentDto,
    })
    return equipmentCreated
  }

  async findAll() {
    const equipmentsFound = await this.prismaService.equipment.findMany({})
    return equipmentsFound
  }

  async findOne(id: string) {
    const equipmentFound = await this.prismaService.equipment.findUnique({
      where: { id },
    })
    return equipmentFound
  }

  async update(id: string, updateEquipmentDto: UpdateEquipmentDto) {
    const equipmentUpdated = await this.prismaService.equipment.update({
      where: { id },
      data: updateEquipmentDto,
    })
    return equipmentUpdated
  }

  async remove(id: string) {
    const equipmentDeleted = await this.prismaService.equipment.delete({
      where: { id },
    })
    return equipmentDeleted
  }
}
