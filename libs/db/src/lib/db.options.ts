import { ModuleMetadata, Type } from '@nestjs/common';

export interface DbOptions {
  connectionString: string;
  global?: boolean;
}

export const DB_OPTIONS_PROVIDER = Symbol(
  'DB_OPTIONS_PROVIDER',
);

export interface DbModuleFactory {
  createHttpModuleOptions: () =>
    | Promise<DbOptions>
    | DbOptions;
}

export interface DbAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  global: boolean;
  useClass?: Type<DbModuleFactory>;
  useExisting?: Type<DbModuleFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<DbOptions> | DbOptions;
}
