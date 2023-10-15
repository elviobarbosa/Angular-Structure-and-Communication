import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinginPersonalComponent } from './singin-personal.component';

describe('SinginPersonalComponent', () => {
  let component: SinginPersonalComponent;
  let fixture: ComponentFixture<SinginPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinginPersonalComponent]
    });
    fixture = TestBed.createComponent(SinginPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
