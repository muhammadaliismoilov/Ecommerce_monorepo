// import { Module } from '@nestjs/common';
// import { UserController } from './user.controller';
// import { UserService } from './user.service';
// import { ConfigifyModule } from '@itgorillaz/configify';
// import { EcommerceDbModule } from '@app/database';
// import { AppConfig } from './common/config/app.config';

// @Module({
//     imports: [
//       ConfigifyModule.forRootAsync(),
//       EcommerceDbModule.forRootAsync({
//         inject: [AppConfig],
//         global: true,
//         useFactory: (appConfig: AppConfig) => {
//           return {
//             connectionString: appConfig.dataBaseUrl,
//           }
//         }
//       })
//     ],
//     controllers: [],
//     providers: [],
// })
// export class UserModule {}
import { Module } from '@nestjs/common';
import { ConfigifyModule } from '@itgorillaz/configify';
import { DbModule } from '@app/database';
import { AppConfig } from './common/config/app.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true, // butun loyihada ishlaydi
    }),
    ConfigifyModule.forRootAsync({}),
    DbModule.forRootAsync({
      useFactory: (appConfig: AppConfig) => ({
        connectionString: appConfig.dataBaseUrl,
      }),
      inject: [AppConfig],
      global: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class UserModule {}
