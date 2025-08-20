import * as schema from '../lib/db.schema';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { Provider } from '@nestjs/common';
import { makeInjectableDecorator } from '@golevelup/nestjs-common';
import { ECOMMERCE_DB_OPTIONS_PROVIDER } from './db.options';
import relations from './db.relation';

export type DataSource = NodePgDatabase<typeof schema, typeof relations>;
export const DATASOURCE_PROVIDER = Symbol('DATASOURCE_PROVIDER');
export const InjectDb = makeInjectableDecorator(DATASOURCE_PROVIDER);
export const dbProvider = {
  provide: DATASOURCE_PROVIDER,
  inject: [ECOMMERCE_DB_OPTIONS_PROVIDER],
  useFactory: (connectionString: string) => {
    const pool = new Pool({
      connectionString,
    });
    return drizzle(pool, { schema, relations });
  },
} as Provider;
