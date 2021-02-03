import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewhtmlgridComponent } from './newhtmlgrid.component';

describe('NewhtmlgridComponent', () => {
  let component: NewhtmlgridComponent;
  let fixture: ComponentFixture<NewhtmlgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewhtmlgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewhtmlgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
