import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-highlight-card',
  standalone: true,
  imports: [RouterLink],
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
  @Input()
  id: string = '0';
  constructor() {}
}
