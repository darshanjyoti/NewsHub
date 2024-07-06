import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchKeyword: string = '';
  articles: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchKeyword = params['keyword'];
      this.searchArticles();
    });
  }
  limit : number = 5;
  searchArticles(): void {
    this.newsService.searchArticles(this.searchKeyword).subscribe(data => {
      this.articles = data.articles.slice(0, this.limit); // Limit the number of articles to 5
    });
  }
  showMore(){
    this.limit= this.limit + 5;
    this.searchArticles();
  }
}
