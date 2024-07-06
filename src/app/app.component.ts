import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsapp';
  searchKeyword: string = ''; // Define the searchKeyword property
  placeholders: string[] = [
    "Search (e.g. 'Tesla')",
    "Search (e.g. 'SpaceX')",
    "Search (e.g. 'India')",
    "Search (e.g. 'Modi')",
    "Search (e.g. 'Cricket')",
  ];
  currentPlaceholderIndex: number = 0;

  constructor(private router: Router) {}

  searchArticles() {
    this.router.navigate(['/search'], { queryParams: { keyword: this.searchKeyword } });
  }
   // Method to change placeholder text
   changePlaceholder() {
    this.currentPlaceholderIndex = (this.currentPlaceholderIndex + 1) % this.placeholders.length;
  }

  // Method to get current placeholder
  getCurrentPlaceholder(): string {
    return this.placeholders[this.currentPlaceholderIndex];
  }
  ngOnInit() {
    // Example: Change placeholder every 5 seconds
    setInterval(() => {
      this.changePlaceholder();
    }, 3000);
  }
 
}
