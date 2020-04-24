import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Title02Component } from './title02.component';

describe('Title02Component', () => {
  let component: Title02Component;
  let fixture: ComponentFixture<Title02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Title02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Title02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
