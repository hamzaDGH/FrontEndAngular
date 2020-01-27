import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrajetComponent } from './edit-trajet.component';

describe('EditTrajetComponent', () => {
  let component: EditTrajetComponent;
  let fixture: ComponentFixture<EditTrajetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTrajetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTrajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
