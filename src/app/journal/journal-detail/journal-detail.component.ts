import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { JournalService } from '../journal.service';
import { QuoteService } from '../quote.service';
import { Journal } from '../journal.model';

@Component({
  selector: 'app-journal-detail',
  templateUrl: './journal-detail.component.html',
  styleUrls: ['./journal-detail.component.css']
})
export class JournalDetailComponent implements OnInit {
  journal!: Journal;
  randomQuote: { text: string, author: string } | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private journalService: JournalService,
    private quoteService: QuoteService
  ) { console.log('JournalDetailComponent constructor called'); }

  ngOnInit() {
    console.log(this.route.snapshot.params); // Logs all route params
    const journalId = this.route.snapshot.params['id'];
    console.log("Journal ID from URL:", journalId); // This should log the actual ID if it's set correctly

    if (!journalId) {
      console.error('Journal ID is missing from the URL');
      return;
    }

    this.fetchJournal(journalId); //error message for this line
    this.quoteService.getRandomQuote().subscribe((quote: { text: string, author: string }) => {
      this.randomQuote = quote;
    });
  }

  fetchJournal(id: string) {
    if (!id || typeof id !== 'string') {
      console.error('Invalid journal ID:', id); // Add more specific checks here
      return;
    }

    console.log('Fetching journal with ID:', id);

    this.journalService.getJournal(id).subscribe(
      (journal: Journal) => {
        console.log('Fetched journal:', journal);
        this.journal = journal;
      },
      (error) => {
        console.error('Error fetching journal:', error); // Backend issue log
      }
    );
  }

  onEdit() {
    // Redirect to the edit route for this journal
    this.router.navigate(['/journals', this.journal?.id, 'edit']);
  }

  onDelete() {
    if (confirm('Are you sure you want to delete this journal?')) {
      this.journalService.deleteJournal(this.journal?.id); // Implement delete in the service
      this.router.navigate(['/journals']); // Redirect to the list
    }
  }
}
