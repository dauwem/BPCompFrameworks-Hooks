import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadGraphContainer } from './dead-graph-container.component';

describe('DeadGraphContainer', () => {
  let component: DeadGraphContainer;
  let fixture: ComponentFixture<DeadGraphContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadGraphContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadGraphContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
