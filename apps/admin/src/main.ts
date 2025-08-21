import { NestFactory } from '@nestjs/core';
import { AdminApiModule } from './admin.module';
import { log } from 'node:console';

async function bootstrap() {
  const PORT = process.env.PORT_ADMIN || 4000
  const app = await NestFactory.create(AdminApiModule);
  await app.listen(PORT , ()=>{ 
    console.log("Server is running   ADMIN  "  +  PORT);
    
  });
}
bootstrap();
