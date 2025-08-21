// import { DynamicModule } from '@nestjs/common';
// import {
//   ECOMMERCE_DB_OPTIONS_PROVIDER,
//   EcommerceDbOptions,
// } from './db.options';
// import { ScheduleModule } from '@nestjs/schedule';
// import { DATASOURCE_PROVIDER, dbProvider } from './db.provider';

// export class EcommerceDbModule {
//   static forRootAsync(options: EcommerceDbOptions): DynamicModule {
//     return {
//       module: EcommerceDbModule,
//       imports: [ScheduleModule.forRoot()],
//       providers: [
//         {
//           provide: ECOMMERCE_DB_OPTIONS_PROVIDER,
//           useValue: options.connectionString,
//         },
//         dbProvider,
//       ],
//       exports: [DATASOURCE_PROVIDER],
//       global: options.global ?? false,
//     };
//   }
// }

import { DynamicModule } from '@nestjs/common';
import {
  DB_OPTIONS_PROVIDER,
  DbOptions,
  DbAsyncOptions,
} from './db.options';
import { ScheduleModule } from '@nestjs/schedule';
import { DATASOURCE_PROVIDER, dbProvider } from './db.provider';

export class DbModule {
  static forRootAsync(options: DbAsyncOptions): DynamicModule {
    return {
      module: DbModule,
      imports: [ScheduleModule.forRoot(), ...(options.imports ?? [])],
      providers: [
        {
          provide: DB_OPTIONS_PROVIDER,
          inject: options.inject || [],
          useFactory: options.useFactory!,
        },
        dbProvider,
      ],
      exports: [DATASOURCE_PROVIDER],
      global: options.global ?? false,
    };
  }
}
