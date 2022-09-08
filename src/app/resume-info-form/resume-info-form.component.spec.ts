import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInfoFormComponent } from './resume-info-form.component';

describe('ResumeInfoFormComponent', () => {
  let component: ResumeInfoFormComponent;
  let fixture: ComponentFixture<ResumeInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeInfoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
