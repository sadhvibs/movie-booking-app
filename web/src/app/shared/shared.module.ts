import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LanguageNamePipe } from './Pipe/language-name.pipe';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LanguageNamePipe
  ],
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LanguageNamePipe,
    SlickCarouselModule
  ]
})
export class SharedModule { }
