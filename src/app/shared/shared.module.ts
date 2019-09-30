import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageSliderComponent,
         ScrollableTabComponent,
         HorizontalGrideComponent
        } from './components';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective } from './directives';


@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGrideComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGrideComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective
  ]
})
export class SharedModule { }
