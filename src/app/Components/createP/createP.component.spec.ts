import { ComponentFixture, TestBed } from '@angular/core/testing';

import { createPComponent } from './createP.component';

describe('createPComponent', () => {
  let component: createPComponent;
  let fixture: ComponentFixture<createPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ createPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(createPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
