import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { readdirSync } from 'fs';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('home')
  getHomeList(): any {
    const imagesUrl = readdirSync(join(__dirname, '..', 'public/images'));
    const homeList = imagesUrl.map((item) => {
      return {
        name: `${item}`,
        url: `http://192.168.10.10:3000/public/images/${item}`,
      };
    });
    return homeList;
  }
}
