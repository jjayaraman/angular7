import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserComponent } from './create-user.component';
import { FormsModule } from '@angular/forms';

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CreateUserComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CreateUserComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have text', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('User');
  });
});
