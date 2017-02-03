/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArticleDataService } from './article-data.service';

describe('ArticleDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleDataService]
    });
  });

  it('should ...', inject([ArticleDataService], (service: ArticleDataService) => {
    expect(service).toBeTruthy();
  }));
});
