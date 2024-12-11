import { Injectable } from '@angular/core';
import { Journal } from './journal.model'; // Assuming the Journal interface is in a separate file

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  private journals: Journal[] = [
    { id: 1, title: 'First Entry', content: 'This is my first journal entry.', date: new Date() },
    { id: 2, title: 'Second Entry', content: 'Learning Angular is fun!', date: new Date() },
  ];

  // Get all journals
  getJournals(): Journal[] {
    return [...this.journals]; // Return a copy to avoid direct manipulation
  }

  // Get a specific journal by ID
  getJournal(id: number): Journal | undefined {
    return this.journals.find((journal) => journal.id === id);
  }

  // Add a new journal (id is optional, will be assigned automatically)
  addJournal(newJournal: Journal): void {
    // Assign an id to the new journal based on the highest existing id
    const maxId = this.journals.reduce((max, journal) => (journal.id! > max ? journal.id! : max), 0);
    newJournal.id = maxId + 1;
    this.journals.push(newJournal);
  }

  // Update an existing journal
  updateJournal(id: number, updatedJournal: Journal): void {
    const index = this.journals.findIndex((journal) => journal.id === id);
    if (index !== -1) {
      this.journals[index] = { ...this.journals[index], ...updatedJournal };

    }
  }

  // Delete a journal by ID
  deleteJournal(id: number): void {
    this.journals = this.journals.filter((journal) => journal.id !== id);
  }
}
