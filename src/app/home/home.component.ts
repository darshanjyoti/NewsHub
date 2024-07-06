import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Article } from '../news.model';

interface NewsSource {
  name: string;
  id: string;
  articles: Article[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sources: string[] = [
    'News18', 'The Hindu', 'The Indian Express', 'Hindustan Times', 
    'NDTV News', 'India Today', 'Moneycontrol', 'Livemint', 'Hindustan Times Zoom'
  ];
  newsSources: NewsSource[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    // Fetch top headlines
    this.newsService.getTopHeadlines().subscribe(response => {
      const articles: Article[] = response.articles;

      // Organize articles by source
      this.sources.forEach(source => {
        const filteredArticles = articles.filter(article => article.source.name === source);
        if (filteredArticles.length > 0) {
          this.newsSources.push({ name: source, id: source.toLowerCase().replace(' ', '-'), articles: filteredArticles });
        }
      });
    });
  }
  }
