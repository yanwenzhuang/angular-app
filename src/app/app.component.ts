import { Component } from '@angular/core';
import { TopMenu } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '拼多多';

  menus: TopMenu[] = [
    {title:'热门'},
    {title:'女装'},
    {title:'家具'},
    {title:'手机'},
    {title:'百货'},
    {title:'运动'},
    {title:'食物'},
    {title:'电器'},
    {title:'鞋包'},
    {title:'美妆'},
    {title:'电脑'},
    {title:'水果'},
    {title:'童装'}
  ];
  handleSelection(topMenu:TopMenu){
    console.log(topMenu);
  }


}
