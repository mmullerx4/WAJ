import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JournalService } from '../journal.service';
import { QuoteService } from '../quote.service';  // Import QuoteService

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.css']
})
export class JournalListComponent implements OnInit {
  journals: any[] = [];  // Assuming you're working with a list of journals
  randomQuote: string = '';  // Initialize empty random quote string

  constructor(
    private journalService: JournalService,
    private router: Router,
    private quoteService: QuoteService  // Inject QuoteService
  ) {}

  ngOnInit(): void {
    this.journals = this.journalService.getJournals();  // Fetch journals
    this.randomQuote = this.quoteService.getRandomQuote();  // Fetch random quote
  }

  onViewDetail(journalId: number): void {
    this.router.navigate(['/journals', journalId]);  // Navigate to the journal's detail page
  }
}
