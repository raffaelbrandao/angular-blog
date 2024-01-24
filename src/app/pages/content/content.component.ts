import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { db } from '../../data/db';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
  image: string = '';
  title: string = '';
  sumary: string = '';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setId(this.id);
  }

  setId(id: string | null) {
    const result = db.filter((article) => article.id == id)[0];

    this.image = result.image;
    this.title = result.title;
    this.sumary = result.sumary;
  }
}
