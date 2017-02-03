import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Article } from './../shared/article.model';

@Component({
  selector: 'asw-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {
  @Input() article: Article;

  constructor() { }

  ngOnInit() {
    console.debug(`art ${this.article}`);
  }

}
