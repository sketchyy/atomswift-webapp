import { Article } from "./../shared/article.model";
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { ArticleCardComponent } from "./article-card.component";

describe("ArticleCardComponent", () => {
  let component: ArticleCardComponent;
  let fixture: ComponentFixture<ArticleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCardComponent);
    component = fixture.componentInstance;
    component.article = new Article();
    component.article.title = "Test Title";
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should contains tile", () => {
    const el: HTMLElement = fixture.debugElement.query(By.css("h3")).nativeElement;
    expect(el.textContent).toBe("Test Title");
  });
});
