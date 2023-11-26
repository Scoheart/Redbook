import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { UsersModule } from './user/user.module';
import { ArticleModule } from './article/article.module';
import { Article } from './article/entities/article.entity';
import { Profile } from './user/entities/profile.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '39.101.76.177',
      port: 3306,
      username: 'root',
      password: 'shuhao201028',
      database: 'android',
      entities: [User, Article, Profile],
      synchronize: true,
    }),
    ArticleModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
