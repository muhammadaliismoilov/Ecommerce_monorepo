import { ModuleMetadata, Type } from '@nestjs/common';

export interface EcommerceDbOptions {
  connectionString: string;
  global?: boolean;
}

export const ECOMMERCE_DB_OPTIONS_PROVIDER = Symbol(
  'ECOMMERCE_DB_OPTIONS_PROVIDER',
);

export interface EcommerceDbModuleFactory {
  createHttpModuleOptions: () =>
    | Promise<EcommerceDbOptions>
    | EcommerceDbOptions;
}

export interface EcommerceDbAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  global: boolean;
  useClass?: Type<EcommerceDbModuleFactory>;
  useExisting?: Type<EcommerceDbModuleFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<EcommerceDbOptions> | EcommerceDbOptions;
}
