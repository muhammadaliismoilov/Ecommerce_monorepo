import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';

async function bootstrap() {
  const PORT = process.env.PORT_USER  || 3001
  const app = await NestFactory.create(UserModule);

  await app.listen(PORT, ()=>{
    console.log("Server is running   User    " + PORT);
    
  });
}
bootstrap();
