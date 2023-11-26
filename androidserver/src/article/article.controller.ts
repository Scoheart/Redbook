import { Controller, Get, Param, Query } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('/article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('page')
  listArticleByPage(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    return this.articleService.listArticleByPage(page, pageSize);
  }

  @Get(':id')
  getArticle(@Param('id') id: number) {
    console.log('getArticle');
    return this.articleService.getArticle(id);
  }

  @Get()
  listArticle() {
    console.log('listArticle');
    return this.articleService.listArticle();
  }
}
