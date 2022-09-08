import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTeplateOneComponent } from './resume-teplate-one.component';

describe('ResumeTeplateOneComponent', () => {
  let component: ResumeTeplateOneComponent;
  let fixture: ComponentFixture<ResumeTeplateOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeTeplateOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeTeplateOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
