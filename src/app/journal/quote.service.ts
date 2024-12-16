import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private apiUrl = 'http://localhost:5000/api/quotes';
  // API endpoint to fetch quotes from backend

  constructor(private http: HttpClient) {}

  // Fetch all quotes from the backend
  getQuotes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Fetch a random quote from the backend
  getRandomQuote(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/random`);
  }

  // Add a new quote to the backend
  addQuote(newQuote: { quote: string, author: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, newQuote);
  }
}
