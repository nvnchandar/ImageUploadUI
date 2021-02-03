import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlgridComponent } from './htmlgrid.component';

describe('HtmlgridComponent', () => {
  let component: HtmlgridComponent;
  let fixture: ComponentFixture<HtmlgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
