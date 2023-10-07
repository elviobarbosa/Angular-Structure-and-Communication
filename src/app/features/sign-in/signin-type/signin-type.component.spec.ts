import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninTypeComponent } from './signin-type.component';

describe('SigninTypeComponent', () => {
  let component: SigninTypeComponent;
  let fixture: ComponentFixture<SigninTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninTypeComponent]
    });
    fixture = TestBed.createComponent(SigninTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
