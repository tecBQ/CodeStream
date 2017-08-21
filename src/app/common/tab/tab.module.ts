import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabContentComponent} from './tab-content/tab-content.component';
import {TabSelectorComponent} from './tab-selector/tab-selector.component';
import {TabPanelComponent} from './tab-panel/tab-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TabContentComponent,TabSelectorComponent,TabPanelComponent],
  exports:[TabPanelComponent]
})
export class TabModule { }
