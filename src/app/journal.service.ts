import { Injectable } from '@angular/core';
import { Journal } from './journal.model';

@Injectable({ providedIn: 'root' })
export class JournalService {
  private journals: Journal[] = [
    new Journal('1', 'First Entry', 'This is my first journal entry.', new Date()),
    new Journal('2', 'Second Entry', 'Learning Angular is fun!', new Date()),
  ];

  getJournals() {
    return [...this.journals];
  }

  getJournal(id: string) {
    return this.journals.find(journal => journal.id === id);
  }

  addJournal(journal: Journal) {
    this.journals.push(journal);
  }

  updateJournal(id: string, updatedJournal: Journal) {
    const index = this.journals.findIndex(j => j.id === id);
    if (index > -1) this.journals[index] = updatedJournal;
  }

  deleteJournal(id: string) {
    this.journals = this.journals.filter(journal => journal.id !== id);
  }
}

