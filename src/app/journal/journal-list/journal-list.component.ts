import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Journal } from '../../journal.model';
import { JournalService } from '../../journal.service';

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.css']
})
export class JournalListComponent implements OnInit {
  journals: Journal[] = [];

  constructor(
    private journalService: JournalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.journals = this.journalService.getJournals(); // Fetch journals as strings
  }

  onViewDetail(journalId: number): void {
    this.router.navigate(['/journals', journalId]); // Navigate to the detail view
  }
}



