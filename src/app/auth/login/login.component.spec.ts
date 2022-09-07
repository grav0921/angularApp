import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponents } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponents;
  let fixture: ComponentFixture<LoginComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponents ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
