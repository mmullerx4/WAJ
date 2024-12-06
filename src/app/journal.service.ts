import { Injectable } from '@angular/core';
import { Journal } from './journal.model';

@Injectable({ providedIn: 'root' })
export class JournalService {
  private journals: Journal[] = [
    new Journal(1, 'First Entry', 'This is my first journal entry.', new Date()),
    new Journal(2, 'Second Entry', 'Learning Angular is fun!', new Date()),
  ];

  getJournals() {
    return [...this.journals];
  }

  getJournal(id: number): Journal | undefined {
    return this.journals.find(journal => journal.id === id); // Compare ids as numbers
  }

  addJournal(journal: Journal): void {
    this.journals.push(journal); // No changes needed for add
  }

  updateJournal(id: number, updatedJournal: Journal): void {
    const index = this.journals.findIndex(j => j.id === id); // Compare ids as numbers
    if (index > -1) {
      this.journals[index] = updatedJournal; // Replace the journal at the found index
    }
  }

  deleteJournal(id: number): void {
    this.journals = this.journals.filter(journal => journal.id !== id); // Filter by id as number
  }

}

