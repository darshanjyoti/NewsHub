import { Component } from '@angular/core';
import { Article } from '../news.model';
import { NewsService } from '../news.service';
interface NewsSource {
  name: string;
  id: string;
  articles: Article[];
}
@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.css'
})
export class TechComponent {
  sources: string[] = [
    'TechCrunch'
  ];
  newsSources: NewsSource[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    // Fetch top headlines
    this.newsService.getTopTechHeadlines().subscribe(response => {
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
