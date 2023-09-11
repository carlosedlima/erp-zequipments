import { $Enums } from '.prisma/client'
import { Equipment } from '@prisma/client'

export class EquipmentEntity implements Equipment {
  id: string
  name: string
  description: string
  status: $Enums.EquipmentStatus
  type: $Enums.EquipmentType
  defectDescription: string
  createdBy: string
  createdAt: Date
  updatedAt: Date
}
