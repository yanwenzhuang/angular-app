import { Component } from '@angular/core';
import { TopMenu, ImageSlider } from './components';

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
  sliders: ImageSlider[] = [
    {
      imgUrl:'http://www.51pptmoban.com/d/file/2015/03/08/0bb432f619c04fac4607a79c35b2d777.jpg',
      link:'',
      caption:'图片无法显示'
    },
    {
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVrhVPpOQZFIYf8qmBdaPLRtWJuJp2pYqcXQUluwQ7HuZvpPs-1w',
      link:'',
      caption:'图片无法显示'
    },
    {
      imgUrl:'https://src.mcool.com/data/attachment/forum/201802/07/220337vdlk3j22lp3b83jp.png-view',
      link:'',
      caption:'图片无法显示'
    },
    {
      imgUrl:'http://www.51pptmoban.com/d/file/2015/03/08/0bb432f619c04fac4607a79c35b2d777.jpg',
      link:'',
      caption:'图片无法显示'
    },{
      imgUrl:'https://src.mcool.com/data/attachment/forum/201802/07/220337vdlk3j22lp3b83jp.png-view',
      link:'',
      caption:'图片无法显示'
    }
  ];

}