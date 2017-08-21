import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent implements OnInit {
  @Input() text:string="";
  @Output() result= new EventEmitter<string>();
  constructor() {
  }

  ngOnInit() {
  }
  onKey(event:any){
    console.log(event.target.value);
    this.result.emit(event.target.value);
  }
}
