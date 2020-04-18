import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'title02',
  templateUrl: './title02.component.html',
  styleUrls: ['./title02.component.scss']
})
export class Title02Component implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() { }

}
