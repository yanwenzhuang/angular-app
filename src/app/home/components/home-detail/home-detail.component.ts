import { Component, OnInit } from '@angular/core';
import { Channel, ImageSlider } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {
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
  channels:Channel[] = [
    {
      id: 1,
      icon: '../../assets/icons/refund.png',
      title: '限时秒杀',
      link:'hot'
    },
    {
      id: 2,
      icon: '../../assets/icons/fav_store.png',
      title: '限时秒杀',
      link:'hot'
    },
    {
      id: 3,
      icon: '../../assets/icons/membership.png',
      title: '限时秒杀',
      link:'hot'
    },
    {
      id: 4,
      icon: '../../assets/icons/fav_store.png',
      title: '限时秒杀',
      link:'hot'
    },
    {
      id: 5,
      icon: '../../assets/icons/coupon.png',
      title: '限时秒杀',
      link:'hot'
    },
    {
      id: 6,
      icon: '../../assets/icons/membership.png',
      title: '限时秒杀',
      link:'hot'
    },
    {
      id: 7,
      icon: '../../assets/icons/coupon.png',
      title: '限时秒杀',
      link:'hot'
    }

  ];

  selectTabLink = '';
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params =>{
      this.selectTabLink = params.get('tabLink');
    })
  }

}
