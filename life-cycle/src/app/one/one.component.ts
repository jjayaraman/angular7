import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent
  implements
    OnChanges,
    OnInit,
    OnDestroy,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  constructor() {
    console.log('constructor');
  }

  ngOnChanges(): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterContentInit(): void {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    // Called after every check of the component's or directive's content.
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    // Called after every check of the component's view. Applies to components only.
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
