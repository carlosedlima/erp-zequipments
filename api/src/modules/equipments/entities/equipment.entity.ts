import { $Enums } from '.prisma/client'
import { Equipment } from '@prisma/client'

export class EquipmentEntity
  implements Omit<Equipment, 'id' | 'createdAt' | 'updatedAt'>
{
  name: string
  description: string
  status: $Enums.EquipmentStatus
  type: $Enums.EquipmentType
  defectDescription: string
  createdBy: string
}
