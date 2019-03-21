import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  count:number = 1;
  constructor() { }

  // Reads parent message
  @Input() fromParentMsg:string;

  // Sends child message to parent using @ViewChild()
  fromChildMsg:string = 'default child message';

  // Sends child message to parent using @Output()
  @Output() childMessageEvent = new EventEmitter<String>();

  ngOnInit() {
    console.log('child oninit...', this.fromParentMsg);
  }

  clear() {
    this.fromParentMsg = '';
  }

  childClicked() {
    this.fromChildMsg = '@ViewChild() from child ' ,this.count++;
  }

  sendChildMsgtoParent() {
    this.childMessageEvent.emit('Message from child using @Output');
  }

}
