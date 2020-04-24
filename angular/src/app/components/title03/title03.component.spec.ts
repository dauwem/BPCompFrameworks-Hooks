import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Title03Component } from './title03.component';

describe('Title03Component', () => {
  let component: Title03Component;
  let fixture: ComponentFixture<Title03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Title03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Title03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
