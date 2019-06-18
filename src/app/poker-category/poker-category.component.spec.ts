import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerCategoryComponent } from './poker-category.component';

describe('PokerCategoryComponent', () => {
  let component: PokerCategoryComponent;
  let fixture: ComponentFixture<PokerCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokerCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
