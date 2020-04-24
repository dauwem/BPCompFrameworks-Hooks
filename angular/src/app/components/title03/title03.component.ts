import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'title03',
  templateUrl: './title03.component.html',
  styleUrls: ['./title03.component.scss']
})
export class Title03Component implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() { }

}
