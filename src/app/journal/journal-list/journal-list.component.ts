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
  randomQuote: { quote: string, author: string } | undefined;  // Initialize empty random quote string

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
    this.quoteService.getRandomQuote().subscribe((quote: { quote: string, author: string }) => {
      this.randomQuote = quote;
    });

    console.log('This is console test 1');

  }

  onViewDetail(id: string): void {
    console.log('onViewDetail triggered with ID:', id);
    this.router.navigate(['/journals', id]);  // Navigate to the journal's detail page
  }
}
