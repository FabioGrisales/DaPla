import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseatomComponent } from './reverseatom.component';

describe('ReverseatomComponent', () => {
  let component: ReverseatomComponent;
  let fixture: ComponentFixture<ReverseatomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReverseatomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseatomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
