import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CkeComponent } from './component/cke/cke.component';
import { QuillComponent } from './component/quill/quill.component';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from 'ckeditor4-angular';

@NgModule({
  declarations: [
    AppComponent,
    CkeComponent,
    QuillComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    CKEditorModule ,
    QuillModule.forRoot(),  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
