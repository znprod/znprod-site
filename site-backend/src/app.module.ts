import { Module, CacheModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CacheModule.register()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
