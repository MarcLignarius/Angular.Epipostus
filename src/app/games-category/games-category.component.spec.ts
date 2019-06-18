import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesCategoryComponent } from './games-category.component';

describe('GamesCategoryComponent', () => {
  let component: GamesCategoryComponent;
  let fixture: ComponentFixture<GamesCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
