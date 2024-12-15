import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Journal } from './journal.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  private apiUrl = 'http://localhost:5000/api/journal';
  // API endpoint for journal entries

  constructor(private http: HttpClient) {}

  // Get all journals
  getJournals(): Observable<Journal[]> {
    return this.http.get<Journal[]>(this.apiUrl);
  }

  // Get a specific journal by ID
  getJournal(id: string): Observable<Journal> {
    return this.http.get<Journal>(`${this.apiUrl}/${id}`);
  }

  // Add a new journal
  addJournal(newJournal: Journal): Observable<Journal> {
    return this.http.post<Journal>(this.apiUrl, newJournal);
  }

  // Update an existing journal
  updateJournal(id: number, updatedJournal: Journal): Observable<Journal> {
    return this.http.put<Journal>(`${this.apiUrl}/${id}`, updatedJournal);
  }

  // Delete a journal by ID
  deleteJournal(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
