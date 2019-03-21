import { AppComponent } from './app.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { async } from 'q';

describe('hello test', async() => {

  let fixture: ComponentFixture<AppComponent>;

  fixture = TestBed.createComponent(AppComponent);

  let count = 1;

  beforeAll(() => {
    console.log('beforeAll...');
    expect(fixture.isStable()).toBeTruthy();
  });

  beforeEach(() => {
    console.log('beforeEach Test :', count++);
  });

  it('test hello', () => {
    expect('hello').toBeTruthy();
    expect('jjj').toBe('jjj');
  });

  it('test two', () => {
    expect('xx').toBeTruthy();
  });
});
