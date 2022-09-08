import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeInfoFormComponent } from './resume-info-form/resume-info-form.component';
import { ResumeTeplateOneComponent } from './resume-teplate-one/resume-teplate-one.component';

const routes: Routes = [
  { path: "", component: ResumeInfoFormComponent },
  { path: "home", component: ResumeInfoFormComponent },
  { path: "resume-download", component: ResumeTeplateOneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
