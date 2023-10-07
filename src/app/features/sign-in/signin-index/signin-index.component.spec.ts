import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninIndexComponent } from './signin-index.component';

describe('SigninIndexComponent', () => {
  let component: SigninIndexComponent;
  let fixture: ComponentFixture<SigninIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninIndexComponent]
    });
    fixture = TestBed.createComponent(SigninIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
