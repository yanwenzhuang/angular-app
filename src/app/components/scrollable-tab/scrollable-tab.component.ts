import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
export interface TopMenu{
  title: string;
  link?: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss']
})
export class ScrollableTabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() menus:TopMenu[];
  @Output() tabSelected = new EventEmitter();

  selectedIndex = -1;
  handleSelection(index:number){
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }
}
