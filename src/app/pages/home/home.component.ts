import { Component } from '@angular/core';
import { HeaderTitleComponent } from "../../components/header-title/header-title.component";
import { HighlightCardComponent } from "../../components/highlight-card/highlight-card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderTitleComponent, HighlightCardComponent]
})
export class HomeComponent {

}