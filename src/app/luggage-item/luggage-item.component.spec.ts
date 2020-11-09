import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuggageItemComponent } from './luggage-item.component';

describe('LuggageItemComponent', () => {
  let component: LuggageItemComponent;
  let fixture: ComponentFixture<LuggageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuggageItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuggageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
