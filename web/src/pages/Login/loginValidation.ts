import { object, ObjectSchema, string } from 'yup'
import { YupMessage } from '../../utils/yupValidationMessages'
import { LoginForm } from './loginTypes'

export const loginValidationSchema: ObjectSchema<LoginForm> = object({
  username: string().required(YupMessage.FIELD_REQUIRED('Login')),
  password: string().required(YupMessage.FIELD_REQUIRED('Senha')),
})
