import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css']
})
export class TabPanelComponent implements OnInit {

  tab:number=1;
  css:string="";
  javacript:string="";
  html:string="";
  constructor() { }

  ngOnInit() {

  }
  setTab(num:number){
    this.tab=num;
  }
  isSelect(num:number){
    console.log(this.tab===num);
    return this.tab===num;
  }
  ChangeEditor(editor:string){
      switch(this.tab){
        case 1:
          this.html=editor;
          break;
        case 2:
          this.css=editor;
          break;
        case 3:
          this.javacript=editor;
          break;
        default:
          break;
      }
      console.log(this.html);
      console.log(this.css);
      console.log(this.javacript);
  }
}
