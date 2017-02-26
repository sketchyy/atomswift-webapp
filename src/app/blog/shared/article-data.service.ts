import { Article } from "./article.model";
import { Injectable } from "@angular/core";

@Injectable()
export class ArticleDataService {
  articles: Article[];

  constructor() {
    this.articles = ["1", "2", "3", "4", "5"].map(id => {
      const article = new Article();
      article.id = id;
      article.title = `Title ${id}`;
      article.content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Maecenas vulputate enim sed tortor viverra malesuada. In sit amet nisi nec turpis consectetur luctus vitae id ex.
        Mauris posuere hendrerit diam at maximus. `;
      return article;
    });
  }

  getArticles() {
    return this.articles;
  }

}
