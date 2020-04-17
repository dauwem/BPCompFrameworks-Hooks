import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedGraphContainer } from './confirmed-graph-container.component';

describe('ConfirmedGraphContainer', () => {
  let component: ConfirmedGraphContainer;
  let fixture: ComponentFixture<ConfirmedGraphContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedGraphContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedGraphContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
