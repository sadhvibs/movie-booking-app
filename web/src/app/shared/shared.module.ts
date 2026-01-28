import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LanguageNamePipe } from './Pipe/language-name.pipe';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LanguageNamePipe
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    AutoCompleteModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LanguageNamePipe,
    SlickCarouselModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    AutoCompleteModule
  ]
})
export class SharedModule { }
