import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/modules/prisma/prisma.service'
import { CreateEquipmentDto } from './dto/create-equipment.dto'
import { UpdateEquipmentDto } from './dto/update-equipment.dto'

@Injectable()
export class EquipmentsService {
  constructor(readonly prismaService: PrismaService) {}

  async create(createEquipmentDto: CreateEquipmentDto) {
    const equipmentCreated = await this.prismaService.equipment.create({
      data: {
        name: createEquipmentDto.name,
        description: createEquipmentDto.description,
        status: createEquipmentDto.status,
        type: createEquipmentDto.type,
        defectDescription: createEquipmentDto.defectDescription,
        createdBy: createEquipmentDto.createdBy,
      },
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
      data: {
        name: updateEquipmentDto.name,
        description: updateEquipmentDto.description,
        status: updateEquipmentDto.status,
        type: updateEquipmentDto.type,
        defectDescription: updateEquipmentDto.defectDescription,
        createdBy: updateEquipmentDto.createdBy,
      },
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
