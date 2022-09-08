import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeInfoFormComponent } from './resume-info-form/resume-info-form.component';
import { ResumeTeplateOneComponent } from './resume-teplate-one/resume-teplate-one.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeInfoFormComponent,
    ResumeTeplateOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
