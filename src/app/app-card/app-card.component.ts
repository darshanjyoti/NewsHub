import { Component, Input } from '@angular/core';
import { Article } from '../news.model';

interface NewsSource {
  name: string;
  articles: Article[];
}

@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrl: './app-card.component.css'
})
export class AppCardComponent {
  @Input() newsSources: NewsSource[] = [];

  @Input() articles: Article[] = [];

  constructor() { }
}
