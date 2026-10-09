import { TestBed } from '@angular/core/testing';
import { CatalogService } from './catalog-service';

describe('CatalogService', () => {
  let service: CatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return categories', () => {
    const data = service.getCategories();
    expect(data.length).toBe(2);
  });
});
