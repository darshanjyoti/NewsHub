import { Component, Input } from '@angular/core';
import { Article } from '../news.model';

interface NewsSource {
  name: string;
  articles: Article[];
}

@Component({
  selector: 'app-app-card-business',
  templateUrl: './app-card-business.component.html',
  styleUrl: './app-card-business.component.css'
})
export class AppCardBusinessComponent {
  @Input() newsSources: NewsSource[] = [];

  @Input() articles: Article[] = [];
  hidden : Boolean = true;

  constructor() { }
}
