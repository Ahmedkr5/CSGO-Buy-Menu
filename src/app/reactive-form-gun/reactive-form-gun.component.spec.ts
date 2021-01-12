import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormGunComponent } from './reactive-form-gun.component';

describe('ReactiveFormGunComponent', () => {
  let component: ReactiveFormGunComponent;
  let fixture: ComponentFixture<ReactiveFormGunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormGunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormGunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
