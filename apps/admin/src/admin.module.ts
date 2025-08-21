import { Module } from '@nestjs/common';

import { DbModule } from '@app/database';

import { AppConfig } from './common/config/app.config';
import { ConfigifyModule } from '@itgorillaz/configify';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true, // butun loyihada ishlaydi
    }),
    ConfigifyModule.forRootAsync(),
    DbModule.forRootAsync({
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
