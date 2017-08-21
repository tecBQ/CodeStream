import {Component,Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-selector',
  templateUrl: './tab-selector.component.html',
  styleUrls: ['./tab-selector.component.css']
})
export class TabSelectorComponent implements OnInit {
  @Input() active:boolean=false;
  constructor() {

  }

  ngOnInit() {
  }

}
