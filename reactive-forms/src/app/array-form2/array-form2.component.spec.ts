import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayForm2Component } from './array-form2.component';

describe('ArrayForm2Component', () => {
  let component: ArrayForm2Component;
  let fixture: ComponentFixture<ArrayForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
