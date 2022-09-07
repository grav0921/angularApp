import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashborComponent } from './dashbor.component';

describe('DashborComponent', () => {
  let component: DashborComponent;
  let fixture: ComponentFixture<DashborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashborComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
