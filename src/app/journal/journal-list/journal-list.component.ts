import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JournalService } from '../journal.service';
import { QuoteService } from '../quote.service';

import { Journal } from '../journal.model';

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.css']
})
export class JournalListComponent implements OnInit {
  journals: Journal[] = [];  // Assuming you're working with a list of journals
  randomQuote: { text: string, author: string } | undefined;  // Initialize empty random quote string

  constructor(
    private journalService: JournalService,
    private router: Router,
    private quoteService: QuoteService  // Inject QuoteService
  ) { console.log('JournalListComponent constructor called'); }

  ngOnInit(): void {
    // Subscribe to get the journals and assign them to the journals array
    this.journalService.getJournals().subscribe((journals: Journal[]) => {
      this.journals = journals;
    });

    // Fetch random quote
    this.quoteService.getRandomQuote().subscribe((quote: { text: string, author: string }) => {
      this.randomQuote = quote;
    });

  }


  onViewDetail(journalId: number): void {
    this.router.navigate(['/journals', journalId]);  // Navigate to the journal's detail page
    console.log('Navigating to journal with ID:', journalId);
    console.log("Journal ID from URL:", journalId);
  }
}
