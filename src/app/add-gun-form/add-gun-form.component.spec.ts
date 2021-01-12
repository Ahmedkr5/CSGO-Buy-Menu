import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGunFormComponent } from './add-gun-form.component';

describe('AddGunFormComponent', () => {
  let component: AddGunFormComponent;
  let fixture: ComponentFixture<AddGunFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGunFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGunFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
