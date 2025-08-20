import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ConfigifyModule } from '@itgorillaz/configify';
import { EcommerceDbModule } from '@app/database';
import { AppConfig } from './common/config/app.config';

@Module({
    imports: [
      ConfigifyModule.forRootAsync(),
      EcommerceDbModule.forRootAsync({
        inject: [AppConfig],
        global: true,
        useFactory: (appConfig: AppConfig) => {
          return {
            connectionString: appConfig.dataBaseUrl,
          }
        }
      })
    ],
    controllers: [],
    providers: [],
})
export class UserModule {}
