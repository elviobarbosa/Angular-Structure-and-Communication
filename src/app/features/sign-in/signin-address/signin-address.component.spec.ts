import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninAddressComponent } from './signin-address.component';

describe('SigninAddressComponent', () => {
  let component: SigninAddressComponent;
  let fixture: ComponentFixture<SigninAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninAddressComponent]
    });
    fixture = TestBed.createComponent(SigninAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
