import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input() fromParentMsg:string;
  fromChildMsg:string = 'default child message';
  count:number = 1;
  constructor() { }


  ngOnInit() {
    console.log('child oninit...', this.fromParentMsg);
  }

  clear() {
    this.fromParentMsg = '';
  }

  childClicked() {
    this.fromChildMsg = '@ViewChild() from child ' ,this.count++;
  }
}
