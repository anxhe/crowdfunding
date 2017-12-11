import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCauseComponent } from './new-cause.component';

describe('NewCauseComponent', () => {
  let component: NewCauseComponent;
  let fixture: ComponentFixture<NewCauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCauseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
