import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuredGraphContainer } from './cured-graph-container.component';

describe('CuredGraphContainer', () => {
  let component: CuredGraphContainer;
  let fixture: ComponentFixture<CuredGraphContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuredGraphContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuredGraphContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
