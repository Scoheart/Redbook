import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}
  saveArticle(article: Article) {
    return this.articleRepository.save(article);
  }

  getArticle(id: number) {
    return this.articleRepository.findOneBy({ id: id });
  }

  listArticle() {
    return this.articleRepository.find();
  }

  listArticleByPage(page: number, limit: number) {
    return this.articleRepository.find({
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  updateArticle(id: number, article: Article) {
    return `This action updates a #${id} article`;
  }

  removeArticle(id: number) {
    return `This action removes a #${id} article`;
  }
}
