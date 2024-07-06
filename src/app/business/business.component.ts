import { Component, OnInit } from '@angular/core';
import { Article } from '../news.model';
import { NewsService } from '../news.service';

interface NewsSource {
  name: string;
  id: string;
  articles: Article[];
}

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
    export class BusinessComponent implements OnInit {
      newsSources: NewsSource[] = [];
    
      constructor(private newsService: NewsService) { }
    
      ngOnInit(): void {
        // Fetch top headlines
        this.newsService.getTopBusinessHeadlines().subscribe(response => {
          const articles: Article[] = response.articles;
          const sources = this.extractSources(articles);
    
          // Initialize newsSources array with sources and initial articles
          sources.forEach(source => {
            const filteredArticles = articles.filter(article => article.source.name === source);
            if (filteredArticles.length > 0) {
              this.newsSources.push({
                name: source,
                id: source.toLowerCase().replace(' ', '-'),
                articles: filteredArticles.slice(0, 15), // Load initial 10 articles
              });
            }
          });
        });
      }
    
      private extractSources(articles: Article[]): string[] {
        const sources: string[] = [];
        articles.forEach(article => {
          const sourceName = article.source.name;
          if (true) {
            sources.push(sourceName);
          }
        });
        return sources;
      }
    } 
