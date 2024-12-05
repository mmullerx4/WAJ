import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.css']
})
export class JournalListComponent {
  // Example data for journals, replace this with real data or service
  journals = [
    { id: '1', title: 'My First Journal', date: '2024-01-01' },
    { id: '2', title: 'A Day in Paris', date: '2024-01-02' },
    { id: '3', title: 'Vacation Reflections', date: '2024-01-03' },
  ];

  constructor(private router: Router) {}

  // Navigate to the "new" journal entry form
  onAddJournal() {
    this.router.navigate(['/journals/new']);
  }
}

