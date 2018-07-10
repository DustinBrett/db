import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Starfield } from './starfield';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  @ViewChild('background') background: ElementRef;

  ngOnInit() {
    const starfield = new Starfield();

    starfield.initialise(this.background.nativeElement);
    starfield.start();
  }
}
