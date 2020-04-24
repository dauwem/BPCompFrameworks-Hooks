import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'main-dropdown',
  templateUrl: './main-dropdown.component.html',
  styleUrls: ['./main-dropdown.component.scss']
})
export class MainDropdownComponent implements OnInit {
  @Input() countries: Array<Object>;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  changeValue(value) {
    this.onChange.emit(value);
  }
}
