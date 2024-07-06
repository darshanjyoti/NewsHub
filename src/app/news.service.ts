import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsApiResponse } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = YOUR_API_KEY;
  private baseUrl = 'https://newsapi.org/v2/top-headlines';
  private baseUrlforSearch = 'https://newsapi.org/v2/everything';

  constructor(private http: HttpClient) {}

  getTopHeadlines(): Observable<any> {
    const url = `${this.baseUrl}?country=in&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
  getTopBusinessHeadlines(): Observable<any> {
    const url = `${this.baseUrl}?country=in&category=business&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
  getTopTechHeadlines(): Observable<any> {
    const url = `${this.baseUrl}?sources=techcrunch&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
  searchArticles(keyword: string): Observable<any> {
    const url = `${this.baseUrlforSearch}/?q=${keyword}&sortBy=publishedAt&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
