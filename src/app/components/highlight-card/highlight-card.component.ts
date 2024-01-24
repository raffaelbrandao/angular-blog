import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlight-card',
  standalone: true,
  imports: [],
  templateUrl: './highlight-card.component.html',
  styleUrl: './highlight-card.component.css',
})
export class HighlightCardComponent {
  @Input()
  image: string = '';
  @Input()
  title: string = '';
  @Input()
  sumary: string = '';
  constructor() {}
}
