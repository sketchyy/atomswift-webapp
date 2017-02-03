import { Component, OnInit } from '@angular/core';
import { ArticleDataService } from './shared/article-data.service';
import { Article } from './shared/article.model';

@Component({
  selector: 'asw-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles: Article[];

  constructor(private articleDataService: ArticleDataService) { }

  ngOnInit() {
    this.articles = this.articleDataService.getArticles();
  }

}
