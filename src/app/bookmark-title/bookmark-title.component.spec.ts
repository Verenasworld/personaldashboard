import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkTitleComponent } from './bookmark-title.component';

describe('BookmarkTitleComponent', () => {
  let component: BookmarkTitleComponent;
  let fixture: ComponentFixture<BookmarkTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
