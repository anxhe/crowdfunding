import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDonationsComponent } from './list-donations.component';

describe('ListDonationsComponent', () => {
  let component: ListDonationsComponent;
  let fixture: ComponentFixture<ListDonationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDonationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
