import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPersonalComponent } from './add-edit-personal.component';

describe('AddEditPersonalComponent', () => {
  let component: AddEditPersonalComponent;
  let fixture: ComponentFixture<AddEditPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
