import { DynamicModule } from '@nestjs/common';
import {
  ECOMMERCE_DB_OPTIONS_PROVIDER,
  EcommerceDbOptions,
} from './db.options';
import { ScheduleModule } from '@nestjs/schedule';
import { DATASOURCE_PROVIDER, dbProvider } from './db.provider';

export class EcommerceDbModule {
  static forRootAsync(options: EcommerceDbOptions): DynamicModule {
    return {
      module: EcommerceDbModule,
      imports: [ScheduleModule.forRoot()],
      providers: [
        {
          provide: ECOMMERCE_DB_OPTIONS_PROVIDER,
          useValue: options.connectionString,
        },
        dbProvider,
      ],
      exports: [DATASOURCE_PROVIDER],
      global: options.global ?? false,
    };
  }
}

// import { DynamicModule } from '@nestjs/common';
// import {
//   ECOMMERCE_DB_OPTIONS_PROVIDER,
//   EcommerceDbOptions,
//   EcommerceDbAsyncOptions,
// } from './db.options';
// import { ScheduleModule } from '@nestjs/schedule';
// import { DATASOURCE_PROVIDER, dbProvider } from './db.provider';
//
// export class EcommerceDbModule {
//   static forRootAsync(options: EcommerceDbAsyncOptions): DynamicModule {
//     return {
//       module: EcommerceDbModule,
//       imports: [ScheduleModule.forRoot(), ...(options.imports ?? [])],
//       providers: [
//         {
//           provide: ECOMMERCE_DB_OPTIONS_PROVIDER,
//           inject: options.inject || [],
//           useFactory: options.useFactory!,
//         },
//         dbProvider,
//       ],
//       exports: [DATASOURCE_PROVIDER],
//       global: options.global ?? false,
//     };
//   }
// }
