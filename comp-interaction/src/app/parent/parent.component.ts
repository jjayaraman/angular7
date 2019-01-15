import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  fromParentMsg = 'defaul parent msg';
  count = 1;

  @ViewChild(ChildComponent) child;

  constructor() {}

  ngOnInit() {
    console.log('parent oninit...');
  }

  ngAfterViewInit(): void {
    console.log('parent after view init');
    console.log('childMessage : ', this.child.fromChildMsg);


  }

  parentClick() {
    this.fromParentMsg = 'parent updated its message...' + this.count++;
  }
}
