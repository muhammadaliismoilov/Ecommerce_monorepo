import { Module } from '@nestjs/common';
import { AdminApiController } from './admin-api.controller';
import { AdminApiService } from './admin-api.service';
import { EcommerceDbModule } from '@ecommerce/db';
import { AppConfig } from './common/config/app.config';
import { ConfigifyModule } from '@itgorillaz/configify';

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
export class AdminApiModule {}
