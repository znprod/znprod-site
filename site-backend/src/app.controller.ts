import {CacheInterceptor, CacheKey, CacheTTL, Controller, Get, Header, UseInterceptors} from '@nestjs/common';
import { AppService } from './app.service';

@UseInterceptors(CacheInterceptor)
@Controller("/api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/feed")
  @Header('Content-Type', 'application/json; charset=utf-8')
  @CacheKey('rssfeed')
  @CacheTTL(3600)
  async getFeed(): Promise<string> {
    return await this.appService.getFeed();
  }
}
