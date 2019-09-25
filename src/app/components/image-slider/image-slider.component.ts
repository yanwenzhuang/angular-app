import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';

export interface ImageSlider{
  imgUrl: string,
  link: string,
  caption: string
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  @Input() sliders: ImageSlider[] = [];
  @ViewChild('imgSlider',{static:false}) imgSlider:ElementRef;
  @Input() intervalSeconds = 2;
  constructor(private rd2: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    let i = 0;
    setInterval(()=>{
      this.rd2.setProperty(this.imgSlider.nativeElement,'scrollLeft',
       (++i % this.sliders.length)*this.imgSlider.nativeElement.scrollWidth/this.sliders.length)
    },this.intervalSeconds * 1000);
  }

}
