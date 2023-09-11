import { Global, Module } from '@nestjs/common'
import { ConfigModule as NestConfigModule } from '@nestjs/config'
import envConfig from './env-config'

const ConfigModuleExports = NestConfigModule.forRoot({
  isGlobal: true,
  load: [envConfig],
})

@Global()
@Module({
  imports: [ConfigModuleExports],
  exports: [ConfigModuleExports],
})
export class ConfigModule {}
